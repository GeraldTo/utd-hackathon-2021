import * as React from 'react'
import {
  ClientResponse,
  ServerRequest,
  ServerResponse,
} from '../../../optimization'

export interface BodyTextProps {
  data: null | ServerRequest | ServerResponse | ClientResponse
  divText: string
}

export default function BodyText(props: BodyTextProps) {
  return (
    <div>
      <div>{props.divText}</div>
      <textarea
        readOnly
        rows={10}
        cols={150}
        value={JSON.stringify(props.data, undefined, 2)}
      />
    </div>
  )
}
