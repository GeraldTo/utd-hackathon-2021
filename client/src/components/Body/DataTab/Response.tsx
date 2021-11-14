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
    const respIdList = props.response.map((respEl) => respEl.operationId)
    const data = {
      labels: respIdList.map(function (respId) {
        const reqEl = props.request
          ? props.request?.operations.filter((f) => f.id === respId)
          : [undefined]
        return reqEl[0] !== undefined ? reqEl[0].name : ''
      }),
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
        <Pie data={data} options={{responsive: true,maintainAspectRatio: true}}/>
      </div>
    )
  } else return <div></div>
}
