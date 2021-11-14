import * as React from 'react'
import { Table } from 'react-bootstrap'
import { ServerResponse } from '../../../optimization'

export interface ResultProps {
  result: null | ServerResponse
}

export default function Result(props: ResultProps) {
  if (props.result) {
    const desired = Object.keys(props.result).filter((e) => e !== 'type')
    const el = props.result! as object
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            {desired.map((e, i) => (
              <th key={i}>{e}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {desired.map(function (e: string, i) {
              const element = el[e as keyof object]
              return <td key={i}>{Math.round(element * 100) / 100}</td>
            })}
          </tr>
        </tbody>
      </Table>
    )
  } else
    return (
      <div>
        <h1>No Results. Check Connection to server</h1>
      </div>
    )
}
