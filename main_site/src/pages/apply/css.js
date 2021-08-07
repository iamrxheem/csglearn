import React, { useEffect } from "react"
import Layout from "../../components/layout"

function Page() {
  useEffect(() => {
    window.location.href =
      "https://forms.zohopublic.com/csglearninginstitute/form/CustomerServiceSalesApplicationForm/formperma/eqYhQ439DJ73i27Mfmzr1vxbi97MdOS-OfMTphp7YUs"
  }, [])

  return (
    <Layout hideAlert>
      <div className="container">
        <br />
        <p>Redirecting you to our registration form</p>
      </div>
    </Layout>
  )
}

export default Page
