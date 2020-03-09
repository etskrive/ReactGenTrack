import React from 'react'

export default function Bugs() {
  return (
    <div className="contentBugs">
      <h3>Bugs - no content</h3>
      <p>Here is the Bugs content</p>

        <div class="buttons">
          <div class="btn submitBug" id="btnBugSubmitNew">Submit new bug</div>
          <div class="btn archiveAllChecked" id="btnBugArchiveAllChecked">Archive checked</div>
        </div>

      <div class="bugCategory">
        <div class="bugCategoryTitle">Category</div>

        <div class="bugPost">
          <div class="bugPostContainer">
            <div class="bugTitle">Title</div>
            <div class="bugTags">Tags</div>
            <div class="bugSubtitle">
              <div class="bugAuthor">Author</div>
              <div class="bugDate">Date</div>
            </div>
            <div class="bugPreviewText">TLDR;Description</div>
            <div class="bugText">Description</div>
          </div>
          <div className="buttons">
            <div className="btn solved">Check solved</div>
            <div className="btn delete">Delete</div>
          </div>
        </div>


          <div class="bugPost">
            <div class="bugPostContainer">
              <div class="bugTitle">Title</div>
              <div class="bugTags">Tags</div>
              <div class="bugSubtitle">
                <div class="bugAuthor">Author</div>
                <div class="bugDate">Date</div>
              </div>
              <div class="bugPreviewText">TLDR;Description</div>
              <div class="bugText">Description</div>
            </div>
            <div className="buttons">
              <div className="btn solved">Check solved</div>
              <div className="btn delete">Delete</div>
            </div>
          </div>

      </div>
    </div>
  )
}
