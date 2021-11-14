import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { ClassNameMap } from '@material-ui/styles'
import * as React from 'react'
import { Navbar } from 'react-bootstrap'
import styles from './Head.module.css'

export interface HeadProps {
  classes: ClassNameMap
}
export default function Head(props: HeadProps) {
  return (
    <Navbar bg="primary" expand="lg">
      <Navbar.Brand className={styles.Head}>UTD Hackathon</Navbar.Brand>
    </Navbar>
  )
}
