import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {StaticImage} from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: " /image.jpg/" }) {
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
          src="https://avatars.githubusercontent.com/u/60598818?v=4"
          width={50}
          height={50}
          quality={95}
        />
      )}
      {author?.name && (
        <p>
          Written by <strong>{author.name}</strong> {author?.summary || null}
          {` `}
          <br />
          <a style={{ backgroundColor:"Gray", color:"black" }} href="/about">
           	About -- Hire Me!
          </a>
        </p>
      )}
    </div>
  )
}

export default Bio;
