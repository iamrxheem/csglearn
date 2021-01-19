import React from "react"
import { Link } from "gatsby"
import ShortCoursesLayout from "../layouts/shortCoursesLayout"
import SEO from "../components/seo"
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
  Button,
  CardFooter,
  CardBody,
  Nav,
  NavItem,
  NavLink
} from "shards-react"
import ShortCoursePreview from "../common/shortCoursePreview"

const Page = () => (
  <ShortCoursesLayout>
    <>
      <SEO
        title="Short Courses & Certification"
        description="Learn business, creative, and technology skills to achieve your personal and professional goals."
        lang="en"
      />
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Short Courses</BreadcrumbItem>
      </Breadcrumb>

      <h5>Short Courses & Certification</h5>
      <br />

      <span>
        Learn business, creative, and technology skills to achieve your personal
        and professional goals. Enroll in our short certification course
      </span>

      <br />
      <br />
      <br />
      <div className="text-center">
        <Row>
          <Col md={6} lg={6} xl={6}>
            <img
              style={{ width: "100px" }}
              className="rounded-circle"
              src="https://www.languagescientific.com/wp-content/uploads/2016/02/translationaccreditationprocess-e1481228309605.jpg"
            />

            <br />
            <br />
            <h5>Accredited</h5>
            <br />

            <span>
              Study for an accredited certifications and diplomas, including
              SATs, CXC and more!
            </span>

            <br />
          </Col>

          <Col md={6}>
            <div className="d-block d-md-none">
              <br />
              <br />
            </div>

            <img
              style={{ width: "100px" }}
              className="rounded-circle"
              src="https://www.kindpng.com/picc/m/469-4690660_trusted-by-kitchen-bath-professionals-everywhere-quality-free.png"
            />
            <br />
            <br />
            <h5>Trusted</h5>
            <br />

            <span>
              Trusted by over 25,000 yearly students across the Caribbean for
              online resources.
            </span>

            <br />
          </Col>
        </Row>
      </div>

      <br />
      <br />
      <Row>
        <ShortCoursePreview
          featured
          title="Spanish for Business"
          description="Learn to communicate in Spanish in a professional environment with business vocabulary, contructing professional business letters and more."
          hideImg
          action="Apply now"
          href="spanish-for-business"
        />
        <ShortCoursePreview
          title="Intro to Public Speaking"
          description="The course is design to prepare participants for success in public speaking through systematically examining the elements of speech presentation."
          hideImg
          action="Apply now"
          href="intro-to-public-speaking"
        />
        <ShortCoursePreview
          started
          title="Introduction to Web Design"
          description="Learn to create functional websites in HTML5, CSS3 and Javascript. Learn through real-life examples and more."
          hideImg
          action="Apply now"
          href="intro-to-web-design"
        />
        <ShortCoursePreview
          started
          title="Entrepreneurship"
          description="This course is designed to offer a broad overview and introduction to entrepreneurship. "
          hideImg
          action="Apply now"
          href="entrepreneurship"
        />
      </Row>
    </>
  </ShortCoursesLayout>
)

export default Page
