import * as React from 'react'
import { Table } from 'react-bootstrap'
import { ClientResponse } from '../../../optimization'
import styles from '../DataTab/DataTab.module.css'

export interface LogTabProps {
  response: null | ClientResponse
}

export default function Logs(props: LogTabProps) {
  const [logArr, setLogArr] = React.useState<ClientResponse[]>([])
  const [headerNames, setHeaderNames] = React.useState<string[]>([])
  const maxLen = 15
  React.useEffect(() => {
    if (props.response) {
      let newArr = [props.response].concat([...logArr])
      if (newArr.length > maxLen) {
        newArr.pop()
      }
      setLogArr(newArr)
      let newHeaders = props.response.map((e) => e.operationId)
      if (newHeaders.length > headerNames.length) setHeaderNames(newHeaders)
    }
  }, [props.response])

  if (props.response) {
    const el = props.response! as object
    return (
      <div>
        <h1>Responses</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              {headerNames.map(function (e, i) {
                const result = e.replace(/_/g, ' ')
                const finalResult =
                  result.charAt(0).toUpperCase() + result.slice(1)
                return <th key={i}>{finalResult}</th>
              })}
            </tr>
          </thead>
          <tbody>
            {logArr.map(function (row, i) {
              const cols = row.map(function (col, j) {
                return <td key={j}>{Math.round(col.flowRate * 100) / 100}</td>
              })
              return <tr key={i}>{cols}</tr>
            })}
          </tbody>
        </Table>
      </div>
    )
  } else
    return (
      <div>
        <h1>No Results. Check Connection to server</h1>
      </div>
    )
}
