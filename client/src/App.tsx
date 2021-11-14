import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import React from 'react'
import Head from './Head/Head'
import Body from './Body/Body'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      flexGrow: 1,
      textAlign: 'left',
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
