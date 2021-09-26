import React from "react"
import { graphql } from "gatsby"
import Layout from "components/Layout"
import PageContent from "components/PageContent"

const DefaultTemplate = (props) =>  {
	const data = props.data.contentfulPage
	return (
		<Layout title={data.title}>
			<PageContent data={data} />
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
		infoBlocks {
			title
			image {
				title
				gatsbyImageData(width: 770, quality: 95, placeholder: NONE, layout: CONSTRAINED)
			}
			text {
				raw
			}
			link
		}
	}
}
`

export default DefaultTemplate