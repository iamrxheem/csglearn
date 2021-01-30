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
      title=""
      shortTitle=""
      category=""
      description=""
      lastModified=""
    >
      <br />
      <br />
      <br />
    </SupportArticleLayout>
  </SupportLayout>
)

export default Page
