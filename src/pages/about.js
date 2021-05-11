import React from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";
import {Link, graphql} from "gatsby"
import './style.css';

const About = ({data, location}) => {

	const siteTitle = data.site.siteMetadata?.title || `Title`

	return (
	
		<Layout location={location} title={siteTitle}>
		  <SEO title="About" />
		  <Link to="/about" />
          <div className="about_page">
		    <h4>My name is Adhrit. It's my online residence here at rd8 complex.   </h4>
		<p>
		   
		</p>
			
		  </div>		  
		</Layout>
	)

}

export default About;

export const pageQuery = graphql`
  query {
	  site{
		  siteMetadata {
			  title
		  }
	  }
  }
`

