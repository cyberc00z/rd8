import React, { useState, useEffect } from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";
import './style.css';
import { Link, graphql } from "gatsby";
import Bio from "../components/bio";




const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
		    <Link to="/blog" />
        <Bio />
        <p>
          WILL WRITE A BLOG SOMEDAY!
        </p>
      </Layout>
    )
  }


  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="RD8" />
       {posts.map(post => {
              const title = post.frontmatter.title || post.fields.slug
              return (
                <article
                  key={post.fields.slug}
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article">
                  <header>
                    <h2>
                      <Link to={post.fields.slug} itemProp="url">
                        <span itemProp="headline">{title}</span>
                      </Link>
                    </h2>
                    <small>{post.frontmatter.date}</small>
                  </header>
                  <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                    />
                  </section>
                </article>
              )
            })}


    </Layout>
  )

}

export default Index;

export const pageQuery =graphql`
query {
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(sort: { frontmatter: {date: DESC }}) {
    nodes {
      excerpt
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
}
`