import * as React from "react"
import { Link } from "gatsby"

// Shards-React Components
import { Row, Col, Container } from "shards-react"
import Copyright from "./copyright"
import JoinMailingList from "../joinMailingList/joinMailingList"

function MidFooter() {
  return (
    <>
      <div className="bg-dark text-light">
        <br />
        <br />
        <Container>
          <Row>
            <Col md={3}>
              <h5>HELP & SUPPORT</h5>

              <ul className="ul">
                <li>
                  <Link className="link-light" to="/contact">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link className="link-light" to="/">
                    How to Reset Your Password
                  </Link>
                </li>
                <li>
                  <Link className="link-light" to="/">
                    How To Pay Tuition Online
                  </Link>
                </li>
                <li>
                  <Link className="link-light" to="/">
                    How To Submit An Assignment
                  </Link>
                </li>
                <li>
                  <Link className="link-light" to="/">
                    How To Download Course Materials
                  </Link>
                </li>
              </ul>

              {/* Adds an break on Mobile Devices  */}
              <br className="d-block d-md-none" />
            </Col>
            <Col md={3}>
              <h5>INTERNAL SITES</h5>

              <ul className="ul">
                <li>
                  <a className="link-light" href="/pay">
                    Make a Payment
                  </a>
                </li>
                <li>
                  <a
                    className="link-light"
                    target="_blank"
                    href="https://www.hub.csglearn.com/my"
                  >
                    Student Portal
                  </a>
                </li>
                <li>
                  <Link className="link-light" to="/help">
                    Help Centre
                  </Link>
                </li>
                <li>
                  <a href="/interview" className="link-light">
                    Interview Scheduler
                  </a>
                </li>
                <li>
                  <a
                    className="link-light"
                    href="https://webmail.dreamhost.com/?_task=mail&_mbox=INBOX"
                    target="_blank"
                  >
                    Webmail
                  </a>
                </li>
                <li>
                  <Link className="link-light" to="/"></Link>
                </li>
              </ul>

              {/* Adds an break on Mobile Devices  */}
              <br className="d-block d-md-none" />
            </Col>

            <Col md={6}>
              <JoinMailingList />
            </Col>
          </Row>
        </Container>
        <br />
        <br />
      </div>
    </>
  )
}

export default MidFooter
