import { styled } from '@material-ui/core'
import * as React from 'react'
import {
  ClientResponse,
  ServerRequest,
  ServerResponse,
} from '../../../optimization'
import BodyText from './BodyText'
import Request from './Request'
import styles from './DataTab.module.css'

export interface DataTabProps {
  request: null | ServerRequest
  response: null | ClientResponse
  result: null | ServerResponse
}

export default function DataTab(props: DataTabProps) {
  return (
    <div className={styles.DataTab}>
      <Request request={props.request} />
      <BodyText
        data={props.response}
        divText={'2.) Client Sends Solution to the Optimization:'}
      />
      <BodyText data={props.result} divText={'3.) Server Sends Result:'} />
    </div>
  )
}
