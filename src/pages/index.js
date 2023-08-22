import React from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";
import {graphql} from "gatsby"
import './style.css';


const index = ({data, location}) => {

	const siteTitle = data.site.siteMetadata?.title || `Title`;
	
	return (
		<Layout location={location} title={siteTitle}>
		  <SEO title="RD8" />
		  
          <div className="about_page">
		    <h4>Adhrit's online residence here at rd8 complex. I aspire to live on lunar city, Moon or Build rd8 complex on Mars base.</h4>
			<br />
			<h4>I write <a className="mail_banner" href="/blog"> poem and tell fortunes</a></h4>
			<br />
			<div className="personal__info">
			<p> Contact :  </p>
			</div>
			
		<p>
		   1. <a href="https://github.com/xadhrit/">Github</a>
		   <br />
		   2. <a href="https://x.com/xadhrit/">Twitter</a>
		   <br />
		   3. <a href="https://instagram.com/xadhrit/">Instagram</a>
           <br />
		   4. <a href="mailto:adhirt77@gmail.com">adhirt77@gmail.com</a>
       </p>
		  </div>		  
		</Layout>
	)

}

export default index;

export const pageQuery = graphql`
  query {
	  site{
		  siteMetadata {
			  title
		  }
	  }
  }
`