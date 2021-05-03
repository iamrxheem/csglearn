import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

// View Components
import MobileView from "../common/mobileView"
import BrowserView from "../common/browserView"
import View from "../components/view/view"
import { Helmet } from "react-helmet"
import SEO from "../components/seo"
import { Carousel, Table, OverlayTrigger, Popover } from "react-bootstrap"

// Shards-React Components
import { Row, Col, Container } from "shards-react"

// App Components
import AppPreview from "../home/app-preview/appPreview"
import AppPromo from "../home/appPromo"
import AppSlider from "../home/appSlider/appSlider"

import HomeCarousel from "../home/homeCarousel"

// Import home components
import ProgrammeMarketing from "../home/programmeMarketing"
import Show from "../home/show"
import LowerShow from "../home/lowerShow"
import ProgrammesPromo from "../home/programmes-promo/programmesPromo"
import Services from "../home/services"
import OnlineClasses from "../home/onlineClasses"
import Reviews from "../home/reviews"

import StayInTheLoop from "../components/stayInTheLoop/stayInTheLoop"

// Gets the country code here
// import { getCountryCode } from "../assets/js/userCountry"
import ReadingClasses from "../images/reading-classes.png"

// Local CSS imports
import "../assets/css/animate.css"
import "../assets/css/normalize.css"
import "../assets/css/bootstrap.css"
import "../assets/css/bootswatch-bootstrap.css"
import "../assets/css/gradients.css"
import "../assets/css/style.css"

// Local JavaScript files
import "../assets/js/push-engage.js"
import "../assets/js/service-worker.js"

// Data
import $ from "jquery"
import axios from "axios"

class IndexPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "The CSG Learning Institute, Jamaica",
      description:
        "The CSG Learning Institute is the premier provider of online education and training for accredited certifications, diplomas and education services."
    }
  }

  componentDidMount() {
    const url = "https://www.api.csglearn.com/no-auth/csec-subjects.json"
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Page Not Found</title>
          <meta name="description" content="Page not found" />
          <meta name="robots" content="noindex,nofollow" />
        </Helmet>

        <Layout>
          <div className="text-center">
            <br />
            <br />
            <h3>We couldn't fnd the page you were looking for</h3>
            <span>
              But here are some of our most popular and upcoming programmes that
              you may be interested in
            </span>
            <br />
            <br />
          </div>

          <OnlineClasses />

          <StayInTheLoop />
        </Layout>
      </>
    )
  }
}

export default IndexPage
