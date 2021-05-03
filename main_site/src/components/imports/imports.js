import React from "react"
import { Helmet } from "react-helmet"

// Local CSS imports
import "../../assets/css/animate.css"
import "../../assets/css/normalize.css"
import "../../assets/css/bootstrap.css"
import "../../assets/css/bootswatch-bootstrap.css"
import "../../assets/css/gradients.css"
import "../../assets/css/style.css"
import "../../assets/css/form.css"

// Local JavaScript files
import "../../assets/js/push-engage.js"
import "../../assets/js/service-worker.js"

function ImportPage() {
  return (
    <>
      <Helmet>
        <script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        ></script>

        <script
          src="https://chimpstatic.com/mcjs-connected/js/users/1880f88152f522fd6aedd65fc/0e4346c7faec550c871b59266.js"
          async
        ></script>
        <script
          src="https://clientcdn.pushengage.com/core/2683fabf-7ac4-4024-abae-12e01deae933.js"
          async
        ></script>
        <script
          src="https://csglearn.pushengage.com/service-worker.js?ver=2.3.0"
          async
        ></script>
        <script
          src="https://embed.tawk.to/60561c51067c2605c0ba8e34/1f185t7po"
          async
        ></script>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap"
          rel="stylesheet"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          src="https://kit.fontawesome.com/3b83e0293b.js"
          crossOrigin="anonymous"
        />
        <meta
          name="copyright"
          content="CSG Learning Institute Jamaica Limited"
        />
        <meta name="robots" content="index,follow" />
        <meta name="Classification" content="Education" />
        <meta name="author" content="Raheem McDonald, info@csglearn.com" />
        <meta name="category" content="Education" />
        <meta name="target" content="all" />
        <meta name="audience" content="all" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="og:type" content="website" />
        <meta name="rating" content="safe for kids" />
        <meta name="twitter:site" content="@csglearn" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@iamrxheem" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="CSG Learning Institute, Ltd." />
        <meta
          name="keywords"
          content="cxc, csec, cxcguide, csglearn, Raheem McDonald, CSG Learning Institute, CSG Learning, Kerwin Springer, DELE, diplomas de espanol, jamaica, education, online, online learning, accredited university, accredited, exam, CAPE, cape exam, csec past papers, cxc past peprs, paperbin, paperbin xyz, cxc textbooks, accredited, university, online university, dele, SAT, college board, sat exam, SAT jamaica, past papers, cxc past papers, cape past papers, csec past papers, the student hub, diplomas in french, sixth form"
        />
      </Helmet>
    </>
  )
}

export default ImportPage
