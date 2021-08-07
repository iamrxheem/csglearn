import React, { useEffect } from "react"
import Layout from "../../components/layout"

function Page() {
  useEffect(() => {
    window.location.href =
      "https://forms.zohopublic.com/csglearninginstitute/form/DiplomainFrenchRegistrationForm/formperma/7LKz5bXmcfhTBbPpMrCoxYfRqEAhpIyq5AKB6Ba7eNk"
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
