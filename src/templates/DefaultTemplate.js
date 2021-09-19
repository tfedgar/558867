import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Layout from "components/layout"
import Seo from "components/seo"

const DefaultTemplate = (props) =>  {
    const data = props.data.contentfulPage
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
    contentfulPage(id: {eq: $id}) {
        id
        title
        text {
            raw
        }
    }
}
`

export default DefaultTemplate