import React from "react"
import { Link } from "gatsby"
import SupportLayout from "../../../layouts/supportLayout"
import SupportArticleLayout from "../../../supportComponents/supportArticleLayout"
import SEO from "../../../components/seo"
import {
  Breadcrumb,
  BreadcrumbItem,
  Alert,
  Container,
  Row,
  Col,
  CardHeader,
  CardTitle,
  Card,
  CardFooter,
  CardBody,
  Nav,
  NavItem,
  NavLink
} from "shards-react"

const Page = () => (
  <SupportLayout>
    <SupportArticleLayout
      title="How to Query Oustanding Tuition"
      shortTitle="Query Tuition"
      category="Payment & Tuition"
      href="/support"
      description="While our system is undergoing maintenance, students are able to query their outstanding balance by contacting Customer Service, or by referencing their most recent invoice."
      lastModified=""
    ></SupportArticleLayout>
  </SupportLayout>
)

export default Page
