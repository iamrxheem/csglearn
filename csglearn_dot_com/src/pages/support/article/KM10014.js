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
      title="Download Course Materials"
      shortTitle="Download Materials"
      description="Take your online learning experience offline, and learn how to download course materials to learn on the go."
      category="Mobile App"
      href="/support"
      lastModified=""
    >
      <h5>Step 1 - Go to your dashboard</h5>

      <span>Here, you will see all the courses you are enrolled in.</span>

      <br />
      <br />
      <img
        src="https://dl.dropbox.com/s/u2y08e2vtkuv8ua/WhatsApp%20Image%202021-01-24%20at%2012.09.30%20PM.jpeg?dl=0"
        style={{ width: "100%" }}
      />

      <br />
      <br />
      <br />
      <h5>Step 2 - Click on the three dots</h5>

      <span>
        On the course you want to download, click on the three dots which should
        bring up a mini-menu.
      </span>

      <br />
      <br />
      <img
        src="https://dl.dropbox.com/s/t7dqdb1zpps9564/WhatsApp%20Image%202021-01-24%20at%2012.09.31%20PM.jpeg?dl=0"
        style={{ width: "100%" }}
      />

      <br />
      <br />
      <br />
      <h5>Step 3 - Confirm the download</h5>
      <span>
        A pop up will appear prompting you to confirm if you wish to download
        all the coruse material. Click 'yes'/
      </span>

      <br />
      <br />
      <img
        src="https://dl.dropbox.com/s/af9f2p148rk08g6/WhatsApp%20Image%202021-01-24%20at%2012.09.32%20PM.jpeg?dl=0"
        style={{ width: "100%" }}
      />

      <br />
      <br />
      <br />
      <h5>Step 4 - Wait for it to download</h5>
      <span>
        You should now see a loading icon. Depending of the size of the course
        and the contents, the may take over a minute.
      </span>

      <br />
      <br />
      <img
        src="https://dl.dropbox.com/s/4b2jg37rz3cmw4a/WhatsApp%20Image%202021-01-24%20at%2012.09.31%20PM%20%281%29.jpeg?dl=0"
        style={{ width: "100%" }}
      />

      <br />
      <br />
      <br />
      <h5>Step 5 - That's it, it's saved</h5>
      <span>
        You should now see a green tick once all the materials in the course
        have been downloaded.
      </span>

      <br />
      <br />
      <img
        src="https://dl.dropbox.com/s/zg1d9lydajrycnl/WhatsApp%20Image%202021-01-24%20at%2012.09.32%20PM%20%281%29.jpeg?dl=0"
        style={{ width: "100%" }}
      />

      <br />
      <br />
      <strong>
        Note: an internet connection is required to complete this process. For
        security concerns, previous class recordings may not be included in your
        download.
      </strong>

      <br />
      <br />
    </SupportArticleLayout>
  </SupportLayout>
)

export default Page
