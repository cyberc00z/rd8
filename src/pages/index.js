import React, { useState, useEffect } from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";
import { graphql } from "gatsby"
import './style.css';


const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;


  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="RD8" />

      <div className="about_page">
        <p>Welcome to adhrit's home on cosmos, the rd8 complex.
          <br />
          You can find my software projects at <a className="mail_banner" href="https://github.com/xadhrit">github</a>
          .</p>
        <br />
        <p>I write <a className="mail_banner" href="/blog">poem, blogs, and tell fortunes. </a>
        </p>
        <p>
          I've also published a poetry collection by the title <a className="mail_banner" href="https://www.amazon.in/VOID-Adhrit-ebook/dp/B0B5HNGZM3">VOID</a>
          .
        </p>
        <br />
        <p>
          Buy my nfts at <a className="mail_banner" href="https://opensea.io/adhrit">opensea/adhrit</a>
          <br />
          <div className="nfts">
            <img
              src="https://i.seadn.io/gae/3QGVodq_M7RY5LMPLddgPWn3qv8uzd-8r1pJKzVVhlD2ht_S4ZM_r71VWT-HJGYFk1FcMaRFmQ6ce93EuoURw7m735JCzqnOLbjd?auto=format&dpr=1&w=828"
              height="100px"
              width="100px"
              alt="adhrit nft"
            />
            <img
              src="https://i.seadn.io/gae/i8lwohh-ysrriKXTKn6K4IhRMK5zKXQ3xG1njAIdGlfcW2H1AVx_CIOEc_28B3plEX1J0jQCru4b1XNtp7C7y3i7JPzsDlFOlHKJ8mI?auto=format&dpr=1&w=828"
              height='100px'
              width='100px'
              alt="adhrit nft"

            />
            <img
              src="https://i.seadn.io/gae/97ujJeziNIcHpv4ESIL5C5p-YaBeW-edWTQz9aG57W8cK6E30ghQOwhj5lJpE9RemjpzZhZMnjCBTEzI8GOyujMqdVr3yKcm_MxqQw?auto=format&dpr=1&w=828"
              height='100px'
              width='100px'
              alt="adhrit nft"
            />
          </div>
        </p>
        <p>
          <h4>Socials: </h4>
          1. <a className="mail_banner" href="https://x.com/xadhrit/">Twitter/X</a>
          <br />

          2. <a className="mail_banner" href="https://instagram.com/xadhrit/">Instagram</a>
          <br />
          3. <a className="mail_banner" href="https://youtube.com/@xadhrit">My Youtube </a>
          <br />
          <br />
          <iframe
            width="350"
            height="250"
            src="https://www.youtube.com/embed/hsiVQ_z8VYY?si=q2_IIkK3sCFFicIE"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>



        </p>
        <p>
          You can mail me at <a className="mail_banner" href="mailto:adhirt77@gmail.com">adhirt77@gmail.com</a>
          <br />
        </p>
        <br />
        <p>Your Location : SV'80 lunar city, Moon.</p>
      </div>

    </Layout>
  )

}

export default Index;

export const pageQuery = graphql`
  query {
	  site{
		  siteMetadata {
			  title
		  }
	  }
  }
`
