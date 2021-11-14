import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import React from 'react'
import Head from './components/Head/Head'
import Body from './components/Body/Body'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      color: 'white !important',
    },
    body: {
      padding: theme.spacing(2),
    },
  }),
)

function App() {
  const classes = useStyles()
  return (
    <div>
      <Head classes={classes} />
      <Body classes={classes} />
    </div>
  )
}

export default App
