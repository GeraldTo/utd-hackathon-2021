import * as React from 'react'
import { ServerRequest } from '../../../optimization'
import styles from './DataTab.module.css'
import Select from 'react-select'

export interface RequestProps {
  request: null | ServerRequest
}
export default function Request(props: RequestProps) {
  const [current, setCurrent] = React.useState<string>('')
  // will set current to the first operations if current is blank
  React.useEffect(() => {
    if (props.request && current === '') {
      setCurrent(props.request.operations[0].id)
    }
  }, [props.request])
  // will only display information if request exists
  if (props.request) {
    const options = props.request.operations.map(function (element) {
      return {
        label: element.name,
        value: element.id,
      }
    })
    const currentObj = props.request.operations.filter((obj) => {
      return obj.id === current
    })
    console.log(currentObj[0])
    return (
      <div className={styles.Box}>
        <h1>Request</h1>
        <h2>Flow Rate In: {props.request.flowRateIn}</h2>
        <Select
          options={options}
          value={
            currentObj[0]
              ? { label: currentObj[0].name, value: currentObj[0].id }
              : undefined
          }
          onChange={(event) =>
            setCurrent(event?.value !== undefined ? event?.value : '')
          }
        />
      </div>
    )
  } else
    return (
      <div>
        <h1>No Requests. Check Connection to server</h1>
      </div>
    )
}
