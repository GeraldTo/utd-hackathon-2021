import * as React from 'react'
import { Table } from 'react-bootstrap'
import { ServerResponse } from '../../../optimization'
import styles from './DataTab.module.css'

export interface ResultProps {
  result: null | ServerResponse
}

export default function Result(props: ResultProps) {
  if (props.result) {
    const desired = Object.keys(props.result).filter((e) => e !== 'type')
    const el = props.result! as object
    return (
      <div className={styles.Box2}>
        <h1>Results</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              {desired.map(function (e, i) {
                const result = e.replace(/([A-Z])/g, ' $1')
                const finalResult =
                  result.charAt(0).toUpperCase() + result.slice(1)
                return <th key={i}>{finalResult}</th>
              })}
            </tr>
          </thead>
          <tbody>
            <tr>
              {desired.map(function (e: string, i) {
                const element = el[e as keyof object]
                return (
                  <td key={i}>
                    {i == 1 && '$'}
                    {Math.round(element * 100) / 100}
                  </td>
                )
              })}
            </tr>
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
