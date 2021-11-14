import * as React from 'react'
import {
  ClientResponse,
  processRequest,
  ServerRequest,
  ServerResponse,
} from '../../../optimization'
import BodyText from '../DataTab/BodyText'

export interface LogTabProps {
  response: null | ClientResponse
}


export default function LogTab(props: LogTabProps) {
  
  function addLog(x: null | ClientResponse){
    
    return x;
  }
  
  return (
    <div>
      <h1>hello world </h1>
      <BodyText
      data={addLog(props.response)}
      divText={'Server Logs'}
    />
    </div>
  )
}
