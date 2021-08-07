import React, { useEffect } from "react"
import Layout from "../components/layout"

function Page() {
  useEffect(() => {
    window.location.href =
      "https://api.whatsapp.com/send/?phone=18767073443&text&app_absent=0"
  }, [])

  return (
    <Layout>
      <div className="container">
        <br />
        <p>Opening WhatsApp</p>
      </div>
    </Layout>
  )
}

export default Page
