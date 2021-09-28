import React from "react"
import { graphql } from "gatsby"
import Layout from "components/Layout"
import PageContent from "components/PageContent"

const DefaultChildTemplate = (props) =>  {
	const data = props.data.contentfulChildPage
	return (
		<Layout title={data.title}>
			<PageContent data={data} />
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

export default DefaultChildTemplate