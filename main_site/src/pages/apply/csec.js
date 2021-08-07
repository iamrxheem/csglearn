import React, { useEffect } from "react"
import Layout from "../../components/layout"

function Page() {
  useEffect(() => {
    window.location.href =
      "https://forms.zohopublic.com/csglearninginstitute/form/CSECSummerProgrammeOnlineApplicationForm/formperma/ITXP9uDz1BFuoXLzZgWT102nyoJ-3uz_fKr8ERHBgJo"
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
