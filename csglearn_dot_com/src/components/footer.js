import React from "react"
import { isMobile } from "react-device-detect"

const Footer = () => (
  <>
    <br />
    <div>
      <footer className="page-footer font-small stylish-color-dark pt-4">
        <div className="container text-center text-md-left">
          <div className="row">
            <div className="col-md-4 mx-auto">
              <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
                Our Mission
              </h5>
              <span>
                CSG Learning Institute is dedicated to revolutionising education
                in Jamaica, and by extension, the Caribbean, and foster a new
                and improved alternative to the already established education
                standard.
              </span>
            </div>

            <hr className="clearfix w-100 d-md-none" />

            <div className="col-md-2 mx-auto">
              <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
                Programmes
              </h5>

              <ul className="list-unstyled">
                <li className="pb-2">
                  <a href="/diplomas/dele">Diploma in Spanish</a>
                </li>
                <li className="pb-2">
                  <a href="/diplomas/delf">Diploma in French</a>
                </li>
                <li className="pb-2">
                  <a href="/programes/sixth-form">Associate Sixth Form</a>
                </li>
                <li>
                  <a href="/professional-certifications">
                    Professional Certifications
                  </a>
                </li>
              </ul>
            </div>

            <hr className="clearfix w-100 d-md-none" />

            <div className="col-md-2 mx-auto">
              <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
                Resources
              </h5>

              <ul className="list-unstyled">
                <li className="pb-2">
                  <a href="/store">Store</a>
                </li>
                <li className="pb-2">
                  <a target="_blank" href="https://www.hub.csglearn.com">
                    Learning Hub
                  </a>
                </li>
                <li className="pb-2">
                  <a href="https://www.jobs.csglearn.com/" target="_blank">
                    Student Employment
                  </a>
                </li>
                <li className="pb-2">
                  <a href="/scholarships" target="_blank">
                    Scholarships
                  </a>
                </li>
                <li>
                  <a href="https://moey.gov.jm/" target="_blank">
                    Ministry of Education
                  </a>
                </li>
              </ul>
            </div>

            <hr className="clearfix w-100 d-md-none" />

            <div className="col-md-2 mx-auto">
              <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
                Legal
              </h5>

              <ul className="list-unstyled">
                <li className="pb-2">
                  <a href="/terms-of-use">Terms of Use</a>
                </li>
                <li className="pb-2">
                  <a href="/privacy-policy">Privacy Policy</a>
                </li>
                <li className="pb-2">
                  <a href="/">Sales and Support</a>
                </li>
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr />

        <ul className="list-unstyled list-inline text-center py-2">
          <li className="list-inline-item">
            <h5 className="mb-1">Need help? </h5>
          </li>
          <li className="list-inline-item">
            <a href="/placement" className="btn btn-danger btn-rounded">
              Apply for Placement
            </a>
          </li>
        </ul>

        <hr />

        <ul className="list-unstyled list-inline text-center">
          <li className="list-inline-item">
            <a className="btn-floating btn-fb mx-1">
              <i className="fab fa-facebook-f"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-tw mx-1">
              <i className="fab fa-twitter"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-gplus mx-1">
              <i className="fab fa-google-plus-g"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-li mx-1">
              <i className="fab fa-linkedin-in"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-dribbble mx-1">
              <i className="fab fa-dribbble"> </i>
            </a>
          </li>
        </ul>
        <div className="footer-copyright text-center py-3">
          © 2020 Copyright:
          <a href="/"> CSG Learning Institute</a>
        </div>
      </footer>
    </div>
    <br />
  </>
)

export default Footer
