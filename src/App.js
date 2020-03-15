import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header/header.js'
import UserOverlay from './Overlay/userOverlay.js'
import Navbar from './Navbar/navbar.js'
import Content from './Main/content.js'
import Footer from './Footer/footer.js'

import * as Default from './Main/content.js'

function App() {
  const [currentContentState, setState] = useState()
  const [userState, setUser] = useState()
  const [userInfo, setUserInfo] = useState([])
  const [overlayState, setOverlay] = useState()
  const [overlayContent, setOverlayContent] = useState()

  useEffect(() => {
    setState("Home")
    setUser("Default")
    setUserInfo("No info")
    setOverlay(false)
  }, [])

  useEffect(() => {
    if(currentContentState == null) {
      setState("Home")
    } else {
      setState(currentContentState)
    }
  }, [ currentContentState ])

  useEffect(() => {
    console.log("overlayState-------------")
    console.log(overlayState)
    if (overlayState == true) {
      document.querySelector('.overlay-container-outer').style = "display: flex";
    } else {
      document.querySelector('.overlay-container-outer').style = "display: none";
    }
  }, [ overlayState ])

  return (
    <div className="App">
      <Header
        currentContentState={ e => setState("Home") }
        currentHeader={ currentContentState }
        userState={ userState }
        userInfo={ userInfo }
        overlayState={ e => setOverlay(!overlayState) }
        />
      <UserOverlay
        userState={ userState }
        userInfo={ userInfo }
        overlayState={ e => setOverlay(!overlayState) }
        overlayContent={ e =>                 setOverlayContent(!overlayContent) }
        />
      <div className="main-section">
        <Navbar
          currentContentState={ e => setState(e.target.innerHTML) } />
        <Content
          mainContent={ currentContentState } />
      </div>
      <Footer />
    </div>
  );
}


export default App;

const person = {
  name: 'Chaerlie',
  age: 20
};

class Something extends App {
  render(){
    return(
      <div>
        Null
      </div>
    )
  }
}
