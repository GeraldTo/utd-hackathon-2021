import * as React from 'react'
import {
  ClientResponse,
  ServerRequest,
  ServerResponse,
} from '../../../optimization'
import BodyText from './BodyText'

export interface DataTabProps {
  request: null | ServerRequest
  response: null | ClientResponse
  result: null | ServerResponse
}

export default function DataTab(props: DataTabProps) {
  return (
    <div>
      <BodyText
        data={props.request}
        divText={'1.) Server Sends Current State of the System:'}
      />
      <BodyText
        data={props.response}
        divText={'2.) Client Sends Solution to the Optimization:'}
      />
      <BodyText data={props.result} divText={'3.) Server Sends Result:'} />
    </div>
  )
}
