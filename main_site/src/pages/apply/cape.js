import React, { useEffect } from "react"
import Layout from "../../components/layout"

function Page() {
  useEffect(() => {
    window.location.href =
      "https://forms.zohopublic.com/csglearninginstitute/form/SixthFormApplicationForm/formperma/KzS0owBdPzi9_ukGpWYg6qshaeDOa3xT7rMkQjf3q24"
  }, [])

  return (
    <Layout hideAlert>
      <div className="container">
        <br />
        <h3>You're being redirected. Please wait...</h3>
      </div>
    </Layout>
  )
}

export default Page
