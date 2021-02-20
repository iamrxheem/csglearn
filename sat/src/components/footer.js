import React from "react"

const Footer = props => {
  return (
    <>
      <>
        <br />
        <br />
        <br />
        <footer>
          <div class="container is-fluid">
            © {new Date().getFullYear()},{` `}
            <a href="https://www.csglearn.com">CSG Learning Institute</a>
          </div>
        </footer>
        <br />
        <br />
        <br />
      </>
    </>
  )
}

export default Footer
