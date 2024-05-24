import React, { useEffect } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import './style.css'

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  useEffect(() => {
    if (typeof window !== 'undefined'){
      document.body.classList.add('body-404')
    }
    return () => {
      if (typeof window !== 'undefined') {
        document.body.classList.remove('body-404');
      }
    };
  },[]);

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <div className="not_found">
      <h1>404: Not Found</h1>          
      <p> I think you are searching for something else May be for... the madness. </p>
    </div>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
