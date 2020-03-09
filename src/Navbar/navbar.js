import React from 'react'
import Content from '../Main/content.js'

export default function Navbar(props) {
  const {
    currentContentState
  } = props

  return(
    <div className="navbar">
      <div className="navbar-list">
        <div onClick={currentContentState} className="navbar-button">Progress</div>
        <div onClick={currentContentState} className="navbar-button">Bugs</div>
        <div onClick={currentContentState} className="navbar-button">Archive</div>
        <div onClick={currentContentState} className="navbar-button">Settings</div>
      </div>
    </div>
  )
}
