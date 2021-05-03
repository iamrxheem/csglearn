import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// View Components
import MobileView from "../common/mobileView"
import BrowserView from "../common/browserView"

import {
  Container,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button,
  Row,
  Col
} from "shards-react"
import OnlineClasses from "../home/onlineClasses"

const Page = () => (
  <Layout>
    <SEO title="Programmes" description="" />

    <Container>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>Programmes</BreadcrumbItem>
      </Breadcrumb>
    </Container>

    <OnlineClasses />
  </Layout>
)

export default Page
