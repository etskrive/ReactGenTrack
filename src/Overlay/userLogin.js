import React, { useEffect, useState } from 'react'

export default function UserLogin(props) {
  const {
    userState,
    userInfo,
    overlayState,
    overlayContent
  } = props

  return (
    <div className="overlay-login">
      <span>Username</span>
      <input id="inputUsername" type="text" />
      <br />
      <span>Password</span>
      <input id="inputPassword" type="text" />
      <div id="overlayBtnLogin" className="overlay btn">Login</div>
      <div id="overlayBtnNewUser"
        onClick={overlayContent}
        className="overlay link">Create new user</div>
      <div id="overlayBtnNewPass"
        onClick={overlayContent}
        className="overlay link">Forgotten password</div>
    </div>
  )
}
