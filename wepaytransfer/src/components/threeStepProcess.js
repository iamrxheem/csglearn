import * as React from "react"
import classnames from "classnames"
// reactstrap components
import {
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,
  Col
} from "reactstrap"

class ThreeStepProcess extends React.Component {
  state = {
    tabs: 1
  }
  toggleNavs = (e, state, index) => {
    e.preventDefault()
    this.setState({
      [state]: index
    })
  }

  render() {
    return (
      <>
        <div className="nav-wrapper">
          <Nav
            className="nav-fill flex-column flex-md-row"
            id="tabs-icons-text"
            pills
            role="tablist"
          >
            <NavItem>
              <NavLink
                aria-selected={this.state.tabs === 1}
                className={classnames("mb-sm-3 mb-md-0", {
                  active: this.state.tabs === 1
                })}
                onClick={e => this.toggleNavs(e, "tabs", 1)}
                href="#pablo"
                role="tab"
              >
                <i className="ni ni-cloud-upload-96 mr-2" />
                Step 1 - Sign up
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-selected={this.state.tabs === 2}
                className={classnames("mb-sm-3 mb-md-0", {
                  active: this.state.tabs === 2
                })}
                onClick={e => this.toggleNavs(e, "tabs", 2)}
                href="#pablo"
                role="tab"
              >
                <i className="ni ni-bell-55 mr-2" />
                Step 2 - Transfer
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-selected={this.state.tabs === 3}
                className={classnames("mb-sm-3 mb-md-0", {
                  active: this.state.tabs === 3
                })}
                onClick={e => this.toggleNavs(e, "tabs", 3)}
                href="#pablo"
                role="tab"
              >
                <i className="ni ni-calendar-grid-58 mr-2" />
                Step 3 - Check your account!
              </NavLink>
            </NavItem>
          </Nav>
        </div>
        <Card className="shadow">
          <CardBody>
            <TabContent activeTab={"tabs" + this.state.tabs}>
              <TabPane tabId="tabs1">
                <Row>
                  <Col sm={3}>
                    <img
                      style={{ width: "100%" }}
                      src="https://iconarchive.com/download/i80766/custom-icon-design/flatastic-3/signup.ico"
                    />
                  </Col>
                  <Col sm={6}>
                    <br />
                    <h5>Create your account</h5>

                    <p>
                      When you <a href="/create-account">create your account</a>
                      , we securly store your personal information for easy
                      future transfers. We require
                    </p>

                    <Row>
                      <Col sm={6}>
                        <ul>
                          <li>Full name</li>
                          <li style={{ paddingTop: "10px" }}>
                            Address, email and phone number
                          </li>
                        </ul>
                      </Col>
                      <Col sm={6}>
                        <ul>
                          <li>Company details (optional)</li>
                          <li style={{ paddingTop: "10px" }}>
                            Banking details
                          </li>
                        </ul>
                      </Col>
                    </Row>
                  </Col>

                  <Col sm={3}></Col>
                </Row>
              </TabPane>
              <TabPane tabId="tabs2">
                <Row>
                  <Col sm={3}>
                    <img
                      style={{ width: "100%" }}
                      src="https://image.freepik.com/free-vector/money-transfer_9206-6.jpg"
                    />
                  </Col>
                  <Col sm={9}>
                    {/* Internal Row */}
                    <br />
                    <Row>
                      <Col sm={6}>
                        <h5>Transfer the funds to us</h5>

                        <p>
                          Transfer the funds from your PayPal, CashApp, Venmo or
                          Zelle to ours, and then create a{" "}
                          <a href="/transfer-request">transfer request</a>.
                        </p>
                        <p>
                          To withdraw directly from PayPal, you will need a US
                          bank account. When you transfer to us, we will
                          withdraw the fnds to our US bank account and then
                          transfer the funds directly to your Jamaican bank
                          account.
                        </p>
                      </Col>

                      <Col sm={6}>
                        <h6>PayPal</h6>
                        <p>
                          <a target="_blank" href="">
                            paypal@wepaytransfer.com
                          </a>
                        </p>

                        <Row>
                          <Col xs={6}>
                            <h6>CashApp</h6>
                            <p>
                              <a
                                className="text-success font-bold"
                                target="_blank"
                                href="https://www.cash.app/$wepaytransfer"
                              >
                                <strong>$wepaytransfer</strong>
                              </a>
                            </p>
                          </Col>
                          <Col xs={6}>
                            <h6>Zelle, Venmo</h6>
                            <p>
                              <a
                                target="_blank"
                                href="https://venmo.com/code?user_id=3278760686125056967"
                              >
                                @wepaytransfer
                              </a>
                            </p>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="tabs3">
                <Row>
                  <Col sm={3}>
                    <img
                      style={{ width: "100%" }}
                      src="https://cdn.iconscout.com/icon/free/png-512/bank-transfer-1817143-1538011.png"
                    />
                  </Col>
                  <Col sm={6}>
                    <br />
                    <h5>Get your money in your bank account</h5>
                    <p>
                      We'll send the funds to your Jamaican bank account and
                      send you a copy of the transfer receipt for verification.
                    </p>

                    <p>
                      Bank transfers are typically processed within 1 business
                      day.
                    </p>
                  </Col>
                  <Col sm={3}>
                    <img
                      style={{ width: "100%" }}
                      src="http://paytra.in/img/banner_2.png"
                    />
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </>
    )
  }
}

export default ThreeStepProcess
