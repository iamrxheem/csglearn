import React from "react"
import {
  Breadcrumb,
  BreadcrumbItem,
  Alert,
  Container,
  Row,
  Col,
  Button
} from "shards-react"

const AppPromo = () => (
  <>
    <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
      <div class="col-md-5 p-lg-5 mx-auto my-5">
        <h1 class="display-4 font-weight-normal">Do more with the app</h1>
        <p class="lead font-weight-normal">
          Ease and convenience - take your online learning experience offline.
        </p>
        <a class="btn btn-outline-secondary" href="/app">
          Download Now
        </a>
      </div>
      <div class="product-device box-shadow d-none d-md-block"></div>
      <div class="product-device product-device-2 box-shadow d-none d-md-block"></div>
    </div>

    <div class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
      <div class="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
        <div class="my-3 py-3">
          <h2 class="display-5">Learn on the go</h2>
          <p class="lead">
            Join your classes, upload assignments and access course materials
            offline
          </p>
        </div>
        <div
          class="bg-light box-shadow mx-auto"
          style={{
            width: "80%",
            height: "300px",
            borderRadius: "21px 21px 0 0"
          }}
        >
          <img
            src="https://i.imgur.com/seTgnIj.jpg"
            style={{ width: "100%" }}
          />
        </div>
      </div>
      <div class="bg-light mr-md-3 px-md-5 pt-3 px-3 pt-md-5 text-center overflow-hidden">
        <div class="my-3 p-3">
          <h2 class="display-5">In-app Messaging</h2>
          <p class="lead">
            Ask questions and communicate with your teachers and peers instantly
          </p>
        </div>
        <div
          class="bg-dark  mx-auto"
          style={{
            width: "80%",
            height: "300px",
            borderRadius: "21px 21px 0 0"
          }}
        >
          <img
            className="rounded"
            src="https://i.imgur.com/c1RvZUa.jpg"
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </div>
  </>
)

export default AppPromo
