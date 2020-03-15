import React, { useEffect, useState } from 'react';
import Create from './userCreate.js'
import Login from './userLogin.js'
import Reset from './userPassReset.js'

export default function UserOverlay(props) {
  const [overlayContent, setOverlayContent] = useState()
  const overlayLogin = <Login overlayContent={ e => checkOverlayContent(e) } />;
  const overlayPassReset = <Reset overlayContent={ e => checkOverlayContent(e) } />;
  const overlayCreateUser = <Create overlayContent={ e => checkOverlayContent(e) } />;

  const {
    userState,
    userInfo,
    overlayState
  } = props

  useEffect(() => {
    setOverlayContent(overlayLogin)
  }, [])

  useEffect(() => {
    setOverlayContent(overlayLogin)
  }, [ overlayState ])

  function checkOverlayContent(e) {
    if (e.target.innerHTML === "Create new user") {
      setOverlayContent(overlayCreateUser)
    } else if (e.target.innerHTML === "Forgotten password") {
      setOverlayContent(overlayPassReset)
    } else {
      setOverlayContent(overlayLogin)
    }
  }

  return (
    <div className="overlay-container-outer">
      <div className="overlay-container-inner">
        <div id="overlayBtnClose"
          className="overlay close"
          onClick={overlayState}>X</div>
        { overlayContent }
      </div>
    </div>
  )
}
