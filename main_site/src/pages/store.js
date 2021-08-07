import * as React from "react"
import { Link } from "gatsby"

import StoreLayout from "../layouts/storeLayout"
import SEO from "../components/seo"

// View Components
import MobileView from "../common/mobileView"
import BrowserView from "../common/browserView"
import { PayPalButton } from "react-paypal-button-v2"
import { Carousel } from "react-bootstrap"

import ICanCountBookCover from "../images/textbooks/i-can-count-book-cover.png"

// Store item preview
import StoreItemPreview from "../store/storeItemPreview"

import {
  Container,
  Breadcrumb,
  BreadcrumbItem,
  Row,
  Col,
  Button,
  Form,
  FormInput,
  FormGroup,
  Alert,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  FormSelect,
  DropdownItem
} from "shards-react"
import Modal from "react-bootstrap/Modal"
import Swal from "sweetalert2"

class Store extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <StoreLayout title="Online Store" description="" hideAlert>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src="" alt="" />
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="" alt="" />

            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="" alt="" />

            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <br />
        <br />
        <Container>
          <Row>
            <StoreItemPreview
              itemName="CSEC Revision - Mathematics"
              imgSrc={ICanCountBookCover}
              amount={25}
              href="english-a"
              priceID=""
            />

            <StoreItemPreview
              itemName="CSEC Revision - Mathematics"
              imgSrc={ICanCountBookCover}
              amount={25}
              href="math"
            />
            <StoreItemPreview
              itemName="CSEC Revision - Mathematics"
              imgSrc={ICanCountBookCover}
              amount={25}
              href=""
            />
            <StoreItemPreview
              itemName="CSEC Revision - Mathematics"
              imgSrc={ICanCountBookCover}
              amount={25}
              href=""
            />
            <StoreItemPreview
              itemName="CSEC Revision - Mathematics"
              imgSrc={ICanCountBookCover}
              amount={25}
              href=""
            />
            <StoreItemPreview
              itemName="CSEC Revision - Mathematics"
              imgSrc={ICanCountBookCover}
              amount={25}
              href=""
            />
            <StoreItemPreview
              itemName="CSEC Revision - Mathematics"
              imgSrc={ICanCountBookCover}
              amount={25}
              href=""
            />
            <StoreItemPreview
              itemName="CSEC Revision - Mathematics"
              imgSrc={ICanCountBookCover}
              amount={25}
              href=""
            />
            <StoreItemPreview
              itemName="CSEC Revision - Mathematics"
              imgSrc={ICanCountBookCover}
              amount={25}
              href=""
            />
          </Row>
        </Container>
      </StoreLayout>
    )
  }
}

export default Store
