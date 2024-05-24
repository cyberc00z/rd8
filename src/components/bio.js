import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {StaticImage} from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
  
  query BioQuery {
    avatar: file(absolutePath: { regex: "/content/assets/bio.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50, quality: 95) {
           ...GatsbyImageSharpFixed
         }
    }
  }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            insta
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author

  const avatar = data?.avatar?.childImageSharp?.fixed

  return (
    <div className="bio">
      {avatar && (
        <StaticImage
          
          fixed={avatar}
          alt={author?.name || ``}
          className="bio-avatar"
          layout="fixed"
          formats={["auto","webp","jpg","png"]}
          src="../../content/assets/bio.jpg"
          width={70}
          height={70}
          quality={100}
        />
      )}
      {author?.name && (
        <p>
          Written by <strong>{author.name}</strong> {author?.summary || null}
          {` `}
          <br />
          <a style={{ backgroundColor:"Gray", color:"black" }} href="/">
           	About !
          </a>
        </p>
      )}
    </div>
  )
}

export default Bio;
