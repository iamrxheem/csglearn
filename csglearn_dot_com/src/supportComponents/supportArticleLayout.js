import React from "react"
import {
  Breadcrumb,
  BreadcrumbItem,
  Container,
  Row,
  Col} from "shards-react"
import SEO from "../components/seo"

const SupportArticleLayout = props => (
  <>
    <SEO
      title={props.title + " - Support"}
      description={props.description}
      lang="en"
    />
    <Container>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="/support">Support</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>{props.shortTitle}</BreadcrumbItem>
      </Breadcrumb>

      <Row>
        <Col md={8}>
          <h2>{props.title}</h2>
          <span>
            <a href={props.href}>{props.category}</a>
          </span>

          <br />
          <br />
          <span>
            {props.description}
            <br />
            <br />
            <br />
          </span>
          {props.children}
        </Col>
        <Col md={4}></Col>
      </Row>
    </Container>
  </>
)

export default SupportArticleLayout
