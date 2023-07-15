import React from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";
import {Link, graphql} from "gatsby"
import './style.css';


const About = ({data, location}) => {

	const siteTitle = data.site.siteMetadata?.title || `Title`;
	
	return (
	
		<Layout location={location} title={siteTitle}>
		  <SEO title="About" />
		  <Link to="/about" />
          <div className="about_page">
		    <h4>My name is Adhrit. It's my online residence here at rd8 complex. I aspire to live on lunar city, Moon or Build rd8 complex on Mars base. I'm 20 and want to leave asap.</h4>
			<br />
			<h4>I write poems and tell fortunes. </h4>
			<p className="mail_banner"> Mail me if you want to assign me some work :  <a href="Mailto:">adhirt77@gmail.com</a> </p>
			<div className="personal__info">
			<p> Contact :  </p>
			</div>
			
		<p>
		   1. <a href="https://github.com/xadhrit/">Github</a>
		   <br />
		   2. <a href="https://twitter.com/xadhrit/">Twitter</a>
		   <br />
		   3. <a href="https://instagram.com/xadhrit/">Instagram</a>
           <br />
           4. <a rel="me" href="https://mastodon.social/@xadhrit">Mastodon</a>
		   <br />   
		   5. <a href="https://threads.net/@xadhrit" >Threads</a>
		   <br />
       </p>
	   {/* <p>
		<img src={require("../../content/assets/download.png")} height={200} width={500} />
		</p>		 */}
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

