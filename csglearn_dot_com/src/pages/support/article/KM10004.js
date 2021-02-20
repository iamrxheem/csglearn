import React from "react"
import SupportLayout from "../../../layouts/supportLayout"
import SupportArticleLayout from "../../../supportComponents/supportArticleLayout"

const Page = () => (
  <SupportLayout>
    <SupportArticleLayout
      title="How to Reset Your Password"
      shortTitle="Password Reset"
      category="Account & Settings"
      description="Having trouble logging in on our online portal? Follow these steps to have your password changed."
      lastModified=""
      href="/"
    >
      <h5>Step 1 - Go to the login page</h5>

      <span>
        Go to the{" "}
        <a href="https://www.hub.csglearn.com/my" target="_blank">
          login page
        </a>
        .
      </span>

      <br />
      <br />
      <br />
      <h5>Step 2 - Click 'forgot password'</h5>

      <span>
        Click the{" "}
        <a
          href="https://www.hub.csglearn.com/login/forgot_password.php"
          target="_blank"
        >
          forgotten your username or password
        </a>{" "}
        option. This will take you to the webpage that will show you a list of
        options to have your password changed.
      </span>

      <br />
      <br />
      <br />
      <h5>Step 3 - Enter your username or email</h5>
      <span>
        If you enrolled after January 1, 2021, your username is mostly the email
        you provided upon registration. If you are unsure of your username,
        please the email option.
      </span>

      <br />
      <br />
      <br />
      <h5>Step 4 - Check your email</h5>
      <span>
        You will receive a password reset link in your email. Click the link
        which will take you to the password reset page.
      </span>

      <br />
      <br />
      <br />
      <h5>Step 5 - Choose a new password</h5>
      <span>
        Enter a new password that you can easily remember. Also, if you're using
        a personal device, save the password in your browser to for easy log in
        next time.
      </span>

      <br />
      <br />
    </SupportArticleLayout>
  </SupportLayout>
)

export default Page
