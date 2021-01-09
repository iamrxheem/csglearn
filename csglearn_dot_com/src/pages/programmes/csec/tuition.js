import React, { Component } from "react"
import { Link } from "gatsby"

import SEO from "../../../components/seo"
import { Breadcrumb, BreadcrumbItem } from "shards-react"
import { Alert, Button, Row, Col, Container } from "shards-react"
import CSECLayout from "../../../layouts/csecLayout"
import { Table } from "react-bootstrap"
import { MobileView } from "react-device-detect"
import axios from "axios"
import CurrencyShower from "../../../common/currencyShower"

class Page extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countryName: "",
      countryCode: "",
      currency: ""
    }
  }

  getGeoInfo = () => {
    axios
      .get("https://ipapi.co/json/")
      .then(response => {
        let data = response.data
        this.setState({
          countryName: data.country_name,
          countryCode: data.country_code,
          currency: data.currency
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  componentWillMount() {
    this.getGeoInfo()

    if (this.state.countryCode == "US") {
      this.setState({ country: "the " + this.state.country })
    }
  }

  render() {
    return (
      <CSECLayout>
        <Container>
          <SEO
            title="Online CSEC Classes Fees & Tuition"
            description=""
            lang="en"
          />
          <Breadcrumb>
            <BreadcrumbItem>
              <a href="/">Home</a>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <a href="/programmes/">Programmes</a>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <a href="/programmes/csec">CSEC</a>
            </BreadcrumbItem>
            <BreadcrumbItem active>Tuition</BreadcrumbItem>
          </Breadcrumb>

          <Row>
            <Col sm={12} md={7} lg={7}>
              <h3>Tuition for Candidates in {this.state.countryName}</h3>
              <br />

              <span>Please note the fees below.</span>

              <br />
              <br />

              <h5>Montly Fee - January Exams</h5>
              <br />

              <span>
                Students are able to enroll in individual classes on a
                month-to-month payment plan. See individual subject fees below
                which are for the January classes.
              </span>

              <br />
              <br />
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Subject</th>
                    <th>Cost per month</th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody>
                  <tr>
                    <td>English A</td>
                    <td>
                      <CurrencyShower
                        JM="$6,500"
                        US="$45"
                        TT="$300"
                        BB="$90"
                        GY="$9500"
                        VC="EC $120"
                        AI="EC $120"
                        DM="EC $120"
                        BZ="$90"
                        GD="EC $120"
                        LC="EC $120"
                        AG="EC $120"
                        KY="40"
                      />{" "}
                      / USD $45
                    </td>
                  </tr>
                  <tr>
                    <td>Mathematics</td>
                    <td>
                      <CurrencyShower
                        JM="$6,500"
                        US="$45"
                        TT="$300"
                        BB="$90"
                        GY="$9500"
                        VC="EC $120"
                        AI="EC $120"
                        DM="EC $120"
                        BZ="$90"
                        GD="EC $120"
                        LC="EC $120"
                        AG="EC $120"
                        KY="$40"
                      />{" "}
                      / USD $45
                    </td>
                  </tr>
                  <tr>
                    <td>All other subjects</td>
                    <td>
                      <CurrencyShower
                        JM="$5,800"
                        US="$40"
                        TT="$250"
                        BB="$80"
                        GY="$8500"
                        VC="EC $100"
                        AI="EC $100"
                        DM="EC $190"
                        BZ="$75"
                        GD="EC $100"
                        LC="EC $100"
                        AG="EC $100"
                        KY="30"
                      />{" "}
                      / USD $40
                    </td>
                  </tr>
                </tbody>
              </Table>

              <br />
              <h5>Montly Fee - May/ June Exams</h5>
              <br />

              <span>
                Students are able to enroll in individual classes on a
                month-to-month payment plan. See individual subject fees below
                which are for the May/ June classes.
              </span>

              <br />
              <br />
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Subject</th>
                    <th>Cost (in JMD) per month</th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody>
                  <tr>
                    <td>English A</td>
                    <td>JMD $5,800 / USD $45</td>
                  </tr>
                  <tr>
                    <td>Mathematics</td>
                    <td>JMD $5,800 / USD $45</td>
                  </tr>
                  <tr>
                    <td>All other subjects</td>
                    <td>JMD $4,300 / USD $30</td>
                  </tr>
                </tbody>
              </Table>
            </Col>

            <Col sm={12} md={5} lg={5}>
              <MobileView>
                <br />
              </MobileView>

              <h5>Term Fee</h5>
              <br />

              <span>
                Students enrolled in the term will be subjected to a full term
                fee that can be paid down monthly. Students can select from
                special packages or choose their own subject.
              </span>

              <br />
              <br />
              <span>
                Term begins in September and ends in April, 2022. All fees
                listed do not include examination fee.
              </span>

              <br />
              <br />
              <br />
              <h5>Miscellaneous Fees</h5>

              <br />
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Subject</th>
                    <th>Cost (in {this.state.currency})</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Registration Fee</td>
                    <td>
                      <CurrencyShower
                        JM="$1,000"
                        US="$10"
                        TT="$50"
                        BB="$15"
                        GY="$1500"
                        VC="EC $15"
                        AI="EC $15"
                        DM="EC $190"
                        BZ="USD $10"
                        GD="EC $15"
                        LC="EC $15"
                        AG="EC $15"
                        KY="$5"
                      />{" "}
                      / USD $10
                    </td>
                  </tr>

                  {this.state.countryCode == "JM" ? (
                    <>
                      <tr>
                        <td>Course Materials</td>
                        <td>$4,500 / USD $30</td>
                      </tr>
                    </>
                  ) : (
                    <></>
                  )}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </CSECLayout>
    )
  }
}

export default Page
