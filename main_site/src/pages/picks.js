import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// Picks
import PickBox from "../common/pickBox"
import PickDisplay from "../common/pickDisplay"

// View Components
import MobileView from "../common/mobileView"
import BrowserView from "../common/browserView"
import { Helmet } from "react-helmet"
import {
  Container,
  Breadcrumb,
  BreadcrumbItem,
  Row,
  Col,
  Alert
} from "shards-react"
import { isIOS } from "react-device-detect"
import StudentVideo from "../videos/exam22.mp4"
import Image from "../images/young-student.jpg"

const Page = () => (
  <Layout hideAlert>
    <SEO title="Top Picks" description="" />

    <Container style={{ paddingTop: "10px" }}>
      <Row>
        <PickDisplay
          title="Laptops & Tablets"
          description="Shop and save on popular laptops and other electonics for both in-person and remote learning. "
          src="https://m.media-amazon.com/images/I/51iQ2ojh+yL._SL500_.jpg"
          href="/picks/tablets"
        />
        <PickDisplay
          title="Smartphones"
          description="Shop and save on popular smartphones and other smart devices."
          src="https://m.media-amazon.com/images/I/71FaAo27evL._AC_UY436_FMwebp_QL65_.jpg"
          href="/picks/smartphones"
        />
        <PickDisplay
          title="Book Bags"
          description="Find new and durable bookbags from your favourite brands, including JanSport, Nike and Adidas."
          src="https://m.media-amazon.com/images/I/518s6U+vyOL._SL500_.jpg"
          href="/picks/bookbags"
        />

        <PickDisplay
          title="Stationery"
          description="Shop stationery supplies, including notebooks, pens, pencils, crayons and more, all available at your fingertips."
          src="https://m.media-amazon.com/images/I/51nphsY5O2L._SL500_.jpg"
          href="/picks/stationery"
        />

        <PickDisplay
          title="Games & Consoles"
          description="Short popular gaming consoles, games"
          src="https://m.media-amazon.com/images/I/41TZkoiMYOL._SL500_.jpg"
          href="/picks/"
        />

        <PickDisplay
          title="Exercise"
          description=""
          src="https://m.media-amazon.com/images/I/610S0HsKSJL._AC_SY400_.jpg"
          href="/picks/"
        />
      </Row>
    </Container>
  </Layout>
)

export default Page
