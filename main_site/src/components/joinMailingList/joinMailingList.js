import * as React from "react"
import PropTypes from "prop-types"

// Shards-React Components
import { Form, FormGroup, FormInput, Row, Col, Button } from "shards-react"

class JoinMailingList extends React.Component {
  constructor(props) {
    super(props)

    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)

    this.state = {
      fName: "",
      email: ""
    }
  }

  handleNameChange(e) {
    this.setState({ fName: e.target.value })
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value })
  }

  render() {
    return (
      <>
        <div id="mc_embed_signup">
          <Form
            action="https://csglearn.us1.list-manage.com/subscribe/post?u=1880f88152f522fd6aedd65fc&amp;id=cd07c140ce"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
            novalidate="novalidate"
          >
            <div id="mc_embed_signup_scroll">
              <h5>MAILING LIST</h5>

              {/* First Name */}
              <br />
              <FormGroup>
                <div class="mc-field-group">
                  <label for="mce-FNAME">First Name</label>
                  <FormInput
                    type="text"
                    value={this.state.name}
                    onChange={this.handleNameChange}
                    name="FNAME"
                    className=""
                    id="mce-FNAME"
                  />
                </div>
              </FormGroup>

              {/* Email */}
              <FormGroup>
                <div class="mc-field-group">
                  <label for="mce-EMAIL">
                    Email Address
                    <span className="asterisk">*</span>
                  </label>
                  <FormInput
                    type="email"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                    name="EMAIL"
                    className="required email"
                    id="mce-EMAIL"
                  />
                </div>
              </FormGroup>

              <div
                style={{ position: "absolute", left: "-5000px" }}
                ariaHidden="true"
              >
                <FormInput
                  type="text"
                  name="b_1880f88152f522fd6aedd65fc_cd07c140ce"
                  tabindex="-1"
                  value=""
                />
              </div>
              <div className="clear">
                <input
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="btn btn-primary"
                />
              </div>
            </div>
          </Form>
        </div>
      </>
    )
  }
}

export default JoinMailingList
