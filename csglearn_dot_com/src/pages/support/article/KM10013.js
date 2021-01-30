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
      title="How to Message Or Email Your Teacher"
      shortTitle="Message Teacher"
      category="Mobile App"
      href="/support"
      description="Learn how to message or email your teacher in the app."
      lastModified=""
    >
      <h5>Step 1 - Go to your dashboard</h5>

      <span>Here, you will see all the courses you are enrolled in.</span>

      <br />
      <br />
      <img
        src="https://dl.dropbox.com/s/6crj0ztrwnbv188/WhatsApp%20Image%202021-01-24%20at%203.55.53%20AM.jpeg?dl=0"
        style={{ width: "100%" }}
      />

      <br />
      <br />
      <br />
      <h5>Step 2 - Select the course the instructor teachers</h5>

      <br />
      <img
        src="https://dl.dropbox.com/s/ehdha6httolqg99/WhatsApp%20Image%202021-01-24%20at%203.55.54%20AM.jpeg?dl=0"
        style={{ width: "100%" }}
      />

      <br />
      <br />
      <br />
      <h5>Step 3 - Select the participants tab</h5>
      <span>
        This option is on the top, righ-hand corner of the screen. Here, you
        will find a list of your classmates as well as assigned teachers. Your
        teacher is normally the first participant listed.
      </span>

      <br />
      <br />
      <img
        src="https://dl.dropbox.com/s/q81l5pa2txv6ki1/WhatsApp%20Image%202021-01-24%20at%203.55.54%20AM%20%282%29.jpeg?dl=0"
        style={{ width: "100%" }}
      />
      <a id="step-4-click-teachers-name">
        <br />

        <br />
        <br />
        <h5>Step 4 - Click on your teacher's name</h5>

        <span>
          This will take you to their profile, where you'll have the option to
          send them either an in-app message or an email, as well as perform
          other actions.
        </span>
      </a>

      <br />
      <br />
      <img
        src="https://dl.dropbox.com/s/kyzck47yoorbufk/WhatsApp%20Image%202021-01-24%20at%203.55.54%20AM%20%281%29.jpeg?dl=0"
        style={{ width: "100%" }}
      />

      <br />
      <br />
      <br />
      <h5>Step 5 - Select the message option</h5>
      <span>
        The message option will allow you to send your teacher an in-app
        message. Type your message and then hit send.
      </span>

      <br />
      <br />
      <img
        src="https://dl.dropbox.com/s/myrxxnl6mv9fm4l/WhatsApp%20Image%202021-01-24%20at%203.55.55%20AM.jpeg?dl=0"
        style={{ width: "100%" }}
      />

      <br />

      <br />
      <br />
      <h5>Add you teacher as a contact</h5>

      <br />
      <span>
        Adding you teacher and classmates as a contact allows you to find them
        easier in your contacts tab. To do this, from{" "}
        <a href="#step-4-click-teachers-name">step 4</a>, select the 'Add
        Contact' option at the bottom of the screen.
      </span>

      <br />
      <br />
      <img src="" style={{ width: "100%" }} />

      <br />
      <br />
    </SupportArticleLayout>
  </SupportLayout>
)

export default Page
