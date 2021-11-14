import * as React from 'react'
import {
  ClientResponse,
  processRequest,
  ServerRequest,
  ServerResponse,
} from '../../../optimization'
import BodyText from '../DataTab/BodyText'
import styles from '../DataTab/DataTab.module.css'
import Logs from './Logs'

export interface LogTabProps {
  response: null | ClientResponse
}

export default function LogTab(props: LogTabProps) {
  
  
  
  return (
    <div className={styles.DataTab}>
      <Logs response={props.response} />
    </div>
  )
}