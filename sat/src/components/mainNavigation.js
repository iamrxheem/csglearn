import React, { Component } from "react"
import $ from "jquery"

class MainNavigation extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (process.browser) {
      $(document).ready(function() {
        // Check for click events on the navbar burger icon
        $(".navbar-burger").click(function() {
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          $(".navbar-burger").toggleClass("is-active")
          $(".navbar-menu").toggleClass("is-active")
        })
      })
    }
  }

  render() {
    return (
      <>
        {/* CSG Learning Institute top logo */}
        <div className="is-hidden-desktop">
          <a href="/">
            <img
              src="https://i.imgur.com/IcviBO3.jpg"
              style={{ width: "100%", height: "100%", marginBottom: "-5px" }}
            />
          </a>
        </div>

        {/* Main navigation */}
        <nav
          className="bd-navbar is-info navbar is-spaced"
          role="navigation"
          ariaLabel="main navigation"
        >
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              <h1 className="title is-5 has-text-white">SAT Center</h1>
            </a>

            <a
              role="button"
              className="navbar-burger"
              ariaLabel="menu"
              ariaExpanded="false"
              dataTarget="navbarBasicExample"
            >
              <span ariaHidden="true"></span>
              <span ariaHidden="true"></span>
              <span ariaHidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-end">
              {/* Fees */}
              <a href="/tuition" className="navbar-item">
                <i className="fas fa-wallet mr-2 is-hidden-desktop has-text-primary"></i>
                Tuition
              </a>

              {/* Exam Centers */}
              <a href="/exam-centers" className="navbar-item">
                <i className="far fa-building mr-2 is-hidden-desktop has-text-info"></i>
                Exam Centers
              </a>

              {/* Documents */}
              <a href="/documents" className="navbar-item">
                <i className="fas fa-file-alt mr-3 is-hidden-desktop has-text-danger"></i>
                Documents
              </a>

              {/* FAQs */}
              <a href="/FAQs" className="navbar-item">
                <i class="fas fa-info-circle has-text-info mr-2 is-hidden-desktop"></i>
                FAQs
              </a>

              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">More</a>

                <div className="navbar-dropdown">
                  <a
                    target="_blank"
                    className="navbar-item"
                    href="https://www.csglearn.com/diplomas/dele"
                  >
                    Diploma in Spanish
                  </a>
                  <a
                    target="_blank"
                    className="navbar-item"
                    href="https://www.csglearn.com/diplomas/delf"
                  >
                    Diploma in French
                  </a>
                  <a
                    target="_blank"
                    className="navbar-item"
                    href="https://www.csglearn.com/programmes/csec"
                  >
                    Online CSEC Classes
                  </a>
                  <hr className="navbar-divider" />
                  <a
                    href="https://www.csglearn.com/support"
                    className="navbar-item"
                  >
                    <i class="fas fa-question-circle has-text-info mr-2 is-hidden-desktop"></i>
                    Support
                  </a>
                </div>
              </div>

              <div className="navbar-item">
                <div className="buttons">
                  <a href="/enroll" className="button is-primary">
                    <strong>Enroll Today</strong>
                  </a>
                  <a
                    target="_blank"
                    className="button is-light"
                    href="https://www.hub.csglearn.com/my"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </>
    )
  }
}

export default MainNavigation
