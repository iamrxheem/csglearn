import * as React from "react"
import Faq from "react-faq-component"

import { Alert, Container } from "shards-react"

class CostBreakdown extends React.Component {
  render() {
    const data = {
      title: "",
      rows: [
        {
          title: "See tuition breakdown",
          content: (
            <Alert className="break-container">
              <Container>
                <br />
                <span>Yes, this is a breadown</span>

                <br />
                <br />
              </Container>
            </Alert>
          )
        }
      ]
    }

    const config = {
      animate: true
      // arrowIcon: "V",
      // tabFocus: true
    }

    return (
      <>
        <Faq open data={data} config={config} />
      </>
    )
  }
}

export default CostBreakdown
