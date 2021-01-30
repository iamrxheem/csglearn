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
      title="How To Pay Tuition Online"
      shortTitle="Pay Online"
      category="Payment & Tuition"
      href="/support"
      description="The preferred online method of payment is a recurring monthly electronic invoice, where the student can make an agreed-upon down payment on their tuition."
      lastModified=""
    >
      <span>
        Students who wish to pay online should indicate so upon registration, or
        by contacting Customer Care if they are already enrolled.
      </span>
    </SupportArticleLayout>
  </SupportLayout>
)

export default Page
