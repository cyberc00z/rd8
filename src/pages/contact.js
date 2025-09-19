import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";

const Contact = ({ data, location }) => {

  const siteTitle =  `Contact Me`

  return (
    <Layout location={location} title={siteTitle}>
      <Link to="/contact" />

      <div className="about_page">

        <p>
        <a className="mail_banner" href="mailto:xadhrit@gmail.com"> xadhrit@gmail.com</a>
        </p>

        <p>
          <h4>Socials: </h4>
          1. <a className="mail_banner" href="https://x.com/xadhrit/">X/@xadhrit</a>
          <br />

          2. <a className="mail_banner" href="https://instagram.com/xadhrit/">Instagram/@xadhrit</a>
          <br />

        </p>

      </div>
    </Layout>
  )

}

export default Contact;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

