import React, { useEffect } from "react"

function Page() {
  useEffect(() => {
    window.location.href = ""
  }, [])

  return (
    <div className="container">
      <br />
      <p>Redirecting you to our registration form</p>
    </div>
  )
}

export default Page
