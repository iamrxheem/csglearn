import React, { Component } from "react"
import { Link } from "gatsby"

import PlacementLayout from "../layouts/placementLayout"
import SEO from "../components/seo"
import { Breadcrumb, BreadcrumbItem } from "shards-react"
import { useForm, useField, splitFormProps } from "react-form"

class Page extends Component {
  render() {
    return (
      <>
        <SEO title="Placement and Career Services" description="" lang="en" />

        <PlacementLayout>
          <Breadcrumb>
            <BreadcrumbItem>
              <a href="/">Home</a>
            </BreadcrumbItem>
            <BreadcrumbItem active>Placement</BreadcrumbItem>
          </Breadcrumb>
          <>
            <span>From within</span>
          </>
        </PlacementLayout>

        <br />
      </>
    )
  }
}

export default Page
