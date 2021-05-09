import React from "react";
import SEO from "../components/seo";
import Bio from "../components/bio";
import Layout from "../components/layout";


const About = ({data, location}) => {

	const siteTitle = data.site.siteMetadata?.title || `Title`

	return (
	
		<Layout location={location} title={siteTitle}>
		  <SEO title="About" />
		  <Link to="/about" />
		  <Bio />
		</Layout>
	)

}

export default About;


