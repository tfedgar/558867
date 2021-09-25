import React from "react"
import { graphql } from "gatsby"
import Layout from "components/Layout"
import PageIntro from "components/PageIntro"
import InfoBlocks from "components/InfoBlocks"

const DefaultTemplate = (props) =>  {
	const data = props.data.contentfulPage
	return (
		<Layout title={data.title}>

			<PageIntro 
				text={data.text}
			/>

			<InfoBlocks blocks={data.infoBlocks} />
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