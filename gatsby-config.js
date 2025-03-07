/**
 * @type {import ('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `0xecc Blog`,
    author: {
      name: `Adhrit`,
    },
    description: ``,
    siteUrl: `https://0xecc.space`,
    social: {
      insta: `xadhrit`,
    },
  
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/content/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
        {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve :`gatsby-plugin-feed`,
      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
        `,
        feeds: [
          {
            serialize: ({query: {site, allMarkdownRemark }}) => {
              return allMarkdownRemark.nodes.map(node => {
                return Object.assign({}, node.frontmatter,{
                  description: node.excerpt,
                  date: node.frontmatter.data, 
                  url: site.siteMetadata.siteUrl +  node.fields.slug, 
                  guid: site.siteMetadata.siteUrl + node.fields.slug, 
                  custom_elements: [{"content:encoded": node.html}],
                 })
              })
            }, 
            query: `{
              allMarkdownRemark(sort: {frontmatter: {date:  DESC}}) {
                nodes {
                  excerpt
                  html
                  fields {
                    slug
                  }
                  frontmatter {
                    title, 
                    date
                  }
                }
              }
            }`,
            output: "/rss.xml",
            title: "0xecc-blog"
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-PHD2G20BJ9",
      ],
        pluginConfig : {
          head: true,
          // setting this parameter in the head instead of the body
          delayOnRouteUpdate: 0,
        }
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `0xecc-blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `content/assets/bg2.jpg`,
      },
    },
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
