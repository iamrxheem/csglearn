import * as React from "react"
import { Nav, NavItem, NavLink } from "shards-react"

function SocialMediaNavigation() {
  return (
    <>
      <br />
      <br />
      <Nav style={{ marginLeft: "-15px" }}>
        <NavItem>
          <NavLink target="_blank" href="https://www.instagram.com/csglearn/">
            <i
              style={{ color: "#8a3ab9" }}
              className="fab fa-instagram fa-lg"
            ></i>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink target="_blank" href="https://www.facebook.com/csglearning/">
            <i
              style={{ color: "#0084ff" }}
              className="fab fa-facebook-messenger fa-lg"
            ></i>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink target="_blank" href="https://twitter.com/csglearn">
            <i
              style={{ color: "#00acee" }}
              className="fab fa-twitter fa-lg"
            ></i>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            target="_blank"
            href="https://www.linkedin.com/company/71081015"
          >
            <i
              style={{ color: "#0077b5" }}
              className="fab fa-linkedin fa-lg"
            ></i>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            target="_blank"
            href="https://www.youtube.com/channel/UCbm81_gf0LVGLs3M9meGztg"
          >
            <i
              style={{ color: "#FF0000" }}
              className="fab fa-youtube fa-lg"
            ></i>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink target="_blank" href=""></NavLink>
        </NavItem>
      </Nav>
    </>
  )
}

export default SocialMediaNavigation
