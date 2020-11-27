import React, { Component } from "react"
import { Link } from "gatsby"

import PlacementLayout from "../../layouts/placementLayout"
import SEO from "../../components/seo"
import { Breadcrumb, BreadcrumbItem } from "shards-react"
import { useForm, useField, splitFormProps } from "react-form"

class Page extends Component {
  render() {
    return (
      <>
        <SEO title="Job Resources" description="" lang="en" />

        <PlacementLayout>
          <Breadcrumb>
            <BreadcrumbItem>
              <a href="/">Home</a>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <a href="/placement">Placement</a>
            </BreadcrumbItem>
            <BreadcrumbItem active>Job Resources</BreadcrumbItem>
          </Breadcrumb>
          <>
            <span>This is job resources</span>
          </>
        </PlacementLayout>

        <br />
      </>
    )
  }
}

export default Page
