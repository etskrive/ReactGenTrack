import React from 'react'

export default function Progress() {
  return (
    <div className="contentProgress">
      <h3>Progress - no content</h3>
      <p>Here is the Progress content</p>
      <div className="masterButtons">
        <div className="btn add" id="btnProgressAddPost">Add post</div>
        <div className="btn toggleRemove" id="btnProgressToggleRemove">Toggle remove</div>
      </div>
      Example-posts:

      <div className="progress-post">
        <div className="progress-post-container">
          <div className="progress-post-top">
            <span className="progress-date">Date</span>
            <span className="progress-title">Title</span>
          </div>
          <div className="progress-text">Text</div>
            <div className="progress-post-bottom">
              <span className="progress-edit-date">Edit-date</span>
              <span className="progress-author">Author</span>
              <div className="progress-btn-edit">Edit</div>
            </div>
        </div>
        <div className="btn delete">X</div>
      </div>

      <div className="progress-post">
        <br></br>
        <div className="progress-post-container">
          <div className="progress-post-top">
            <span className="progress-date">Date</span>
            <span className="progress-title">Title</span>
          </div>
          <div className="progress-text">Text</div>
            <div className="progress-post-bottom">
              <span className="progress-edit-date">Edit-date</span>
              <span className="progress-author">Author</span>
              <div className="progress-btn-edit">Edit</div>
            </div>
        </div>
        <div className="btn delete">X</div>
      </div>

    </div>
  )
}
