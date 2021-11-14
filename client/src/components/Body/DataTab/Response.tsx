import * as React from 'react'
import { ClientResponse, ServerRequest } from '../../../optimization'
import { Pie } from 'react-chartjs-2'
import styles from './DataTab.module.css'

export interface ResponseProps {
  response: null | ClientResponse
  request: null | ServerRequest
}

const rand = () => Math.floor(Math.random() * 255)

export default function Response(props: ResponseProps) {
  if (props.response) {
    const data = {
      labels: props.response
        ? props.response
            .map((e) => e.operationId)
            .map(
              (e) =>
                props.request?.operations.filter((f) => f.id === e)[0].name,
            )
        : [],
      datasets: [
        {
          label: 'Current Dataset',
          backgroundColor: props.response
            ? props.response.map((_) => `rgb(${rand()}, ${rand()}, ${rand()})`)
            : [],
          data: props.response.map((e) => e.flowRate),
        },
      ],
    }
    return (
      <div className={styles.Box}>
        <h1>Response</h1>
        <Pie data={data} />
      </div>
    )
  } else return <div></div>
}
