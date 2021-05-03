import React from "react"

const TopNav = () => (
  <div className="bg-primary">
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <a
          style={{ color: "white" }}
          className="nav-link"
          href="https://api.whatsapp.com/send/?phone=18767073443&text&app_absent=0"
          target="_blank"
        >
          <small>
            <i className="fas fa-phone-alt mr-2"></i>
            (876) 707-3443
          </small>
        </a>
      </li>
      <li className="nav-item">
        <a
          style={{ color: "white" }}
          className="nav-link"
          href="mailto:info@csglearn.com"
        >
          <small>
            <i className="fas fa-envelope mr-2"></i>
            info@csglearn.com
          </small>
        </a>
      </li>
    </ul>

    <ul className="nav justify-content-center">
      <li className="nav-item">
        <a
          style={{ color: "white" }}
          className="nav-link"
          href="https://www.hub.csglearn.com/my/"
          target="_blank"
        >
          <small>Student Portal</small>
        </a>
      </li>
      <li className="nav-item">
        <a
          style={{ color: "white" }}
          className="nav-link"
          href="https://www.news.csglearn.com/"
          target="_blank"
        >
          <small>News</small>
        </a>
      </li>
      <li className="nav-item">
        <a
          style={{ color: "white" }}
          className="nav-link"
          href="https://www.careers.csglearn.com/my/"
          target="_blank"
        >
          <small>Careers</small>
        </a>
      </li>
    </ul>
  </div>
)

export default TopNav
