import * as React from 'react'
import { ClassNameMap } from '@material-ui/styles'
import {
  ClientResponse,
  processRequest,
  ServerRequest,
  ServerResponse,
} from '../../optimization'
import { Tabs, Tab } from 'react-bootstrap'
import DataTab from './DataTab/DataTab'
import LogTab from './LogTab/LogTab'

export interface BodyProps {
  classes: ClassNameMap
}

export default function Body(props: BodyProps) {
  const [request, setRequest] = React.useState<null | ServerRequest>(null)
  const [response, setResponse] = React.useState<null | ClientResponse>(null)
  const [result, setResult] = React.useState<null | ServerResponse>(null)
  React.useEffect(() => {
    // const ws = new WebSocket('ws://localhost:9172');
    // eslint-disable-next-line no-restricted-globals
    const ws = new WebSocket(`wss://2021-utd-hackathon.azurewebsites.net`)

    ws.addEventListener('open', () => {
      ws.send(JSON.stringify({ setPitCapacity: 100000 }))
    })

    // When the server sends new data, we send how to optimally allocate the water
    ws.addEventListener('message', (message) => {
      if (message.data.startsWith('Error')) {
        window.alert(message.data)
        throw Error(message.data)
      }
      const data = JSON.parse(message.data)
      if (data.type === 'CURRENT_STATE') {
        const request: ServerRequest = JSON.parse(message.data)
        setRequest(request)
        const response = processRequest(request)
        setResponse(response)
        ws.send(JSON.stringify(response))
      } else if (data.type === 'OPTIMATION_RESULT') {
        const response: ServerResponse = JSON.parse(message.data)
        setResult(response)
      }
    })

    // Oh no! Something unexpected happened.
    ws.addEventListener('error', (event) => {
      throw Error(JSON.stringify(event))
    })

    // cleanup function
    return () => {
      ws.close()
    }
  }, [])
  return (
    <div className={props.classes.body}>
      <Tabs defaultActiveKey="data">
        {' '}
        <Tab eventKey="data" title="Data">
          <DataTab request={request} response={response} result={result} />
        </Tab>
        <Tab eventKey="logs" title="Logs">
          <LogTab />
        </Tab>
      </Tabs>
    </div>
  )
}
