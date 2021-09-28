module.exports = {
  siteMetadata: {
    title: `558867`,
    description: `A directory for mental health resources and services in the swansea area.`,
    author: `tfedgar`,
    siteUrl: `https://main.d2mtk3eeyqjwn8.amplifyapp.com/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-resolve-src`,
		`gatsby-plugin-styled-components`,
		{
			resolve: `gatsby-plugin-sass`,
			sassOptions: {
				precision: 8
			}
		},
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `s588ct3shxk1`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: "t4tocUxAtthJY-JQ5_qoMp1__AAzEOv7ETVaUFcQvtw", 
      },
    },
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
