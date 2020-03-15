import React from 'react';

export default function UserCreate(props) {
  const {
    userState,
    userInfo,
    overlayState,
    overlayContent
  } = props

  return (
    <div className="overlay-createUser">
      <span>Username</span>
      <input id="newUserName" type="text" />
      <br />
      <span>Password</span>
      <input id="newUserPass" type="text" />
      <br />
      <span>Repeat Password</span>
      <input id="newUserPassRepeat" type="text" />
      <div id="overlayBtnCreateUser" className="overlay btn">Create New User</div>
      <div id="overlayBtnLogin"
        onClick={overlayContent}
        className="overlay link">Back to login</div>
    </div>
  )
}
