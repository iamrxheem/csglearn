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
import DelePromotion from "../home/delePromotion"
import CsecSeptemberClasses from "../home/csecSeptemberClasses"
import IELTS from "../home/ielts"

import StayInTheLoop from "../components/stayInTheLoop/stayInTheLoop"

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
          <title>{this.state.title}</title>
          <meta name="description" content={this.state.description} />
          <meta name="robots" content="index,follow" />
          <meta name="owner" content="Raheem McDonald" />
          <meta name="copyright" content="CSG Learning Institute" />
          <meta name="og:title" content={this.state.title} />
          <meta name="og:description" content={this.state.description} />
          <meta name="author" content="Raheem McDonald, info@csglearn.com" />
          <meta name="twitter:creator" content="@iamrxheem" />
          <meta name="twitter:site" content="@csglearn" />
          <meta
            name="keywords"
            content="cxc, csec, cxcguide, csglearn, Raheem McDonald, CSG Learning Institute, CSG Learning, Kerwin Springer, DELE, diplomas de espanol, jamaica, education, online, online learning, accredited university, accredited, exam, CAPE, cape exam, csec past papers, cxc past peprs, paperbin, paperbin xyz, cxc textbooks, accredited, university, online university, dele, SAT, college board, sat exam, SAT jamaica, past papers, cxc past papers, cape past papers, csec past papers, the student hub, diplomas in french, sixth form"
          />
        </Helmet>

        <Layout hideAlert>
          <Container>
            <ProgrammesPromo />
          </Container>

          <br />
          <br />
          <CsecSeptemberClasses />

          <OnlineClasses />

          <Container>
            <AppPreview />
          </Container>

          <StayInTheLoop />
        </Layout>
      </>
    )
  }
}

export default IndexPage
