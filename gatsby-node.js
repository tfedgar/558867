const path = require(`path`)

exports.createPages = async gatsbyUtilities => {
    // Query our posts from the GraphQL server
    const posts = await getNodes(gatsbyUtilities)
  
    // If there are no pages in Contentful, don't do anything
    if (!posts.length) {
      return
    }
  
    // If there are pages, create Gatsby pages for them
    await createSinglePages({ posts, gatsbyUtilities })
}

const createSinglePages = async ({ posts, gatsbyUtilities }) => {
    const createAllPages = Promise.all(
            posts.map(({ post }) => {
                // createPage is an action passed to createPages
                // See https://www.gatsbyjs.com/docs/actions#createPage for more info
                switch (post.__typename) {
                    case "ContentfulPage": 
                        const slug = post.slug === '/' ?  `/` : `/${post.slug}/`
                        gatsbyUtilities.actions.createPage({
                            path: slug,
                            component: path.resolve(`./src/templates/DefaultTemplate.js`),
                            context: {
                                id: post.id,
                            },
                        })

                        if (post.childPages) {
                            for (const childPage of post.childPages) {
                                const childSlug = `${slug}${childPage.slug}/`
                                gatsbyUtilities.actions.createPage({
                                    path: childSlug,
                                    component: path.resolve(`./src/templates/DefaultChildTemplate.js`),
                                    context: {
                                        id: childPage.id,
                                    },
                                })
                            }
                        }

                        break;
                    default:
                        break;
                }
            }
        )
    )

    if (createAllPages.errors) {
        gatsbyUtilities.reporter.panicOnBuild(
            `There was an error creating pages`,
            createAllPages.errors
        )
    }
}

/**
 * This function queries Gatsby's GraphQL server and asks for
 * All Contenful pages. If there are any GraphQL error it throws an error
 * Otherwise it will return the pages 🙌
 *
 * We're passing in the utilities we got from createPages.
 * So see https://www.gatsbyjs.com/docs/node-apis/#createPages for more info!
 */
async function getNodes({ graphql, reporter }) {
    const graphqlResult = await graphql(/* GraphQL */ `
        query {
            # Query all Contenful pages
            allContentfulPage {
                edges {
                    # note: this is a GraphQL alias. It renames "node" to "post" for this query
                    # We're doing this because this "node" is a post! It makes our code more readable further down the line.
                    post: node {
                        __typename
                        id
                        slug
                        childPages {
                            id
                            slug
                        }
                    }
                }
            }
        }
    `)
  
    if (graphqlResult.errors) {
        reporter.panicOnBuild(
            `There was an error loading your blog posts`,
            graphqlResult.errors
        )
        return
    }
  
    return [
        ...graphqlResult.data.allContentfulPage.edges,
    ]
}