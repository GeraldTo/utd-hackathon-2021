import * as React from 'react'
import { Table } from 'react-bootstrap'
import { ClientResponse } from '../../../optimization'
import styles from '../DataTab/DataTab.module.css'

export interface LogTabProps {
  response: null | ClientResponse
}


export default function Logs(props: LogTabProps) {
    const logArr = []
    function addLog(x: null | ClientResponse){
        
        return x;
      }
    
  if (props.response) {
    const el = props.response! as object
    return (
      <div className={styles.Box}>
        <h1>Responses</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              { props.response.map(function (e, i) {
                  const result = e.operationId.replace(/_/g, ' ')
                  const finalResult =
                    result.charAt(0).toUpperCase() + result.slice(1)
                  return <th key={i}>{finalResult}</th>
              })
              }
            </tr>
          </thead>
          <tbody>
            <tr>
              { props.response.map(function (e, i) {
                const element = e.flowRate
                return <td key={i}>{Math.round(element * 100) / 100}</td>
              })
              }
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
