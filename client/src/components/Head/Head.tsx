import * as React from 'react'
import { Navbar } from 'react-bootstrap'
import styles from './Head.module.css'

export default function Head() {
  return (
    <Navbar bg="primary" expand="lg">
      <Navbar.Brand className={styles.Title}>UTD Hackathon</Navbar.Brand>
    </Navbar>
  )
}
