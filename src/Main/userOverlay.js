import React from 'react';

export default function UserOverlay(props) {
  const {
    userState,
    userInfo,
    overlayState
  } = props

  return (
    <div className="overlay-container-outer">
      <div className="overlay-container-inner">
        <div id="overlayBtnClose"
          className="overlay close"
          onClick={overlayState}>X</div>
        <span>Username</span>
        <input id="inputUsername" type="text" />
        <br />
        <span>Password</span>
        <input id="inputPassword" type="text" />
        <div id="overlayBtnLogin" className="overlay btn">Login</div>
        <div id="overlayBtnNewUser" className="overlay link">Create new user</div>
        <div id="overlayBtnForgottenPass" className="overlay link">Forgotten password</div>
      </div>
    </div>
  )
}
