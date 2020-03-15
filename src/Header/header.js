import React from 'react'
import defaultProfileImg from './../images/user.svg'
import logoImg from './../images/LogoMakr_0QrXre.png'

export default function Header(props) {
  const {
    currentContentState,
    currentHeader,
    userState,
    userInfo,
    overlayState
  } = props

  console.log("@header - overlayState: ")
  console.log(overlayState)

  return (
    <div className="header">
      <div className="header__left">
        <div className="header-logo__placement soft-hover"
          style={{backgroundImage: `url(${logoImg})`}}
          onClick={currentContentState}>
        </div>
      </div>
      <div className="header__center">
        <div className="header-content">
          { currentHeader }
        </div>
      </div>
      <div className="header__right">
        <div className="header-profile__picture soft-hover"
          style={{backgroundImage: `url(${defaultProfileImg})`}}
          onClick={overlayState}>
        </div>
        <div className="header-profile__name">User</div>
      </div>
    </div>
  )
}
