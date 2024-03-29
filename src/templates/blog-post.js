import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

// trying to add comment section
import { DiscussionEmbed } from "disqus-react";

const BlogPostTemplate = ({ data: { previous,next,site, markdownRemark: post }, location, }) => {
  
  
  const siteTitle = site.siteMetadata?.title || `Title`
  

  const disqusConfig = { 
    shortname: `rd8`,
    config: {identifier: post.fields.slug || post.id },
  }

  return (
    <>
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    <DiscussionEmbed 
       {...disqusConfig}
    />
    </Layout>
     
    </>
  )
}

export const Head = ({ data: { markdownRemark: post } }) => {
  return (
    <SEO title={post.frontmatter.title} 
     description={post.frontmatter.description || post.excerpt }
    />
  )
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
    ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark( id : { eq: $id }) {
      id
      fields {
        slug 
      }
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description        
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: {eq: $nextPostId}) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`