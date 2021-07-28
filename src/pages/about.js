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
		    <h4>My name is Adhrit. It's my online residence here at rd8 complex x00ms.  </h4>
			<div className="personal__info">
			<p>I love to hear from you... </p>
			</div>
		<p>
		   1. <a href="https://github.com/xadhrit/">Github</a>
		   <br />
		   2. <a href="https://twitter.com/xadhrit/">Twitter</a>
		   <br />
		   3. <a href="https://instagram.com/xadhrit/">Instagram</a>
       <br />
       </p>
       <p>
       ------------------- or ----------------------
       you can mail me :
       
       adhirt77@gmail.com 
		</p>
	   <p>
		<img src={require("../../content/assets/download.png")}  />
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

