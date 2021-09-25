import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Layout from "components/Layout"
import Seo from "components/seo"

const DefaultTemplate = (props) =>  {
    const data = props.data.contentfulChildPage
    return (
        <Layout>
            <Seo title="Home" />
            <h1>{data.title}</h1>
            { documentToReactComponents( JSON.parse(data.text.raw) ) }
        </Layout>
    )
}

export const pageQuery = graphql`
query($id: String!) {
    contentfulChildPage(id: {eq: $id}) {
        id
        title
        text {
            raw
        }
    }
}
`

export default DefaultTemplate