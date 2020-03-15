import React from 'react';

export default function UserPassReset(props) {
  const {
    userState,
    userInfo,
    overlayState,
    overlayContent
  } = props
  
  return (
    <div className="overlay-passReset">
      <span>Username</span>
      <input id="resetUser" type="text" />
      <br />
      <span>New password</span>
      <input id="resetPass" type="text" />
      <br />
      <span>Repeat Password</span>
      <input id="resetPasswordRepeat" type="text" />
      <div id="overlayBtnReset" className="overlay btn">Reset</div>
      <div id="overlayBtnLogin"
        onClick={overlayContent}
        className="overlay link">Back to login</div>
    </div>
  )
}
