import React, { useEffect, useState } from 'react'
import Home from './home.js'
import Progress from './progress.js'
import Bugs from './bugs.js'
import Archive from './archive.js'
import Settings from './settings.js'

// export {default as Home} from './home.js'
// export {default as Progress} from './progress.js'
// export {default as Bugs} from './bugs.js'
// export {default as Archive} from './archive.js'
// export {default as Settings} from './settings.js'

export default function Content(props) {
  const [displayedContent, setContent] = useState()

  const {
    mainContent
  } = props

  const state = [
    {contentName: "Home", contentState: false},
    {contentName: "Progress", contentState: false},
    {contentName: "Bugs", contentState: false},
    {contentName: "Archive", contentState: false},
    {contentName: "Settings", contentState: false}
  ]

  useEffect(() => {
    state.forEach((item, i) => {
      item.contentState = false;
    });
    state[0].contentState = true;
  }, []);

  useEffect(() => {
    state.forEach((item, i) => {
      item.contentState = false;
    });
    state.forEach((item, i) => {
      if(item.contentName === mainContent) {
        item.contentState = true
        switch (item.contentName) {
          case "Home":
            setContent(<Home />)
            break;
          case "Progress":
            setContent(<Progress />)
            break;
          case "Bugs":
            setContent(<Bugs />)
            break;
          case "Archive":
            setContent(<Archive />)
            break;
          case "Settings":
            setContent(<Settings />)
            break;
        }
      };
    });
  }, [ mainContent ])

  return (
    <div className="main-content">
      { displayedContent }
    </div>
  )
}
