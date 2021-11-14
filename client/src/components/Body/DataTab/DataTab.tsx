import { styled } from '@material-ui/core'
import * as React from 'react'
import Result from './Result'
import {
  ClientResponse,
  ServerRequest,
  ServerResponse,
} from '../../../optimization'
import BodyText from './BodyText'
import Request from './Request'
import styles from './DataTab.module.css'
import Response from './Response'
import { request } from 'http'

export interface DataTabProps {
  request: null | ServerRequest
  response: null | ClientResponse
  result: null | ServerResponse
}

export default function DataTab(props: DataTabProps) {
  return (
    <div className={styles.DataTab}>
      <Request request={props.request} />
      <Response response={props.response} request={props.request} />
      <Result result={props.result} />
    </div>
  )
}
