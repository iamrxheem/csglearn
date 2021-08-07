import React, { useEffect } from "react"
import Layout from "../../components/layout"

function Page() {
  useEffect(() => {
    window.location.href = "https://amzn.to/370uawa"
  }, [])

  return (
    <Layout hideAlert>
      <div className="container">
        <br />
        <h3>Taking you to Amazon. Please wait...</h3>
      </div>
    </Layout>
  )
}

export default Page
