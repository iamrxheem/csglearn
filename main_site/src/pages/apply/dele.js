import React, { useEffect } from "react"
import Layout from "../../components/layout"

function Page() {
  useEffect(() => {
    window.location.href =
      "https://forms.zohopublic.com/csglearninginstitute/form/DiplomainSpanishRegistrationForm/formperma/hzPuluNSrQgm_4HrsSVPXm1_lo1tVOd0wGWXU6i8g8M"
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
