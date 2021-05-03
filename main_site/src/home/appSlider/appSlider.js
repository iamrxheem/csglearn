import React from "react"
import uuidv4 from "uuid"

import {
  Card,
  CardBody,
  FormRadio,
  CardFooter,
  CardImg,
  Container
} from "shards-react"

// images
import Img1 from "../../images/app-slider-imgs/1.png"
import Img2 from "../../images/app-slider-imgs/2.png"
import Img3 from "../../images/app-slider-imgs/3.png"
import Img4 from "../../images/app-slider-imgs/4.png"
import Img5 from "../../images/app-slider-imgs/5.png"
import Img6 from "../../images/app-slider-imgs/6.png"
import Img7 from "../../images/app-slider-imgs/7.png"

// CSS
import "./appSlider.css"

const slides = []

const AppSlider = () => (
  <>
    <div className="carousel-body">
      <input inline type="radio" name="positionpp" />
      <input inline type="radio" name="position" />
      <input inline type="radio" name="position" checked />
      <input inline type="radio" name="position" />
      <input inline type="radio" name="position" />

      <div id="app-carousel">
        <Card className="item" style={{ backgroundColor: "" }}>
          <CardImg style={{ width: "100%" }} src={Img4} />
        </Card>
        <Card className="item" style={{ backgroundColor: "" }}>
          <CardImg style={{ width: "100%" }} src={Img2} />
        </Card>
        <Card className="item" style={{ backgroundColor: "" }}>
          <CardImg style={{ width: "100%" }} src={Img1} />
        </Card>
        <Card className="item" style={{ backgroundColor: "" }}>
          <CardImg style={{ width: "100%" }} src={Img3} />
        </Card>
        <Card className="item" style={{ backgroundColor: "" }}>
          <CardImg style={{ width: "100%" }} src={Img5} />
        </Card>
      </div>
    </div>
  </>
)

export default AppSlider
