import React from "react"
import PageIntro from "components/PageIntro"
import InfoBlocks from "components/InfoBlocks"

const PageContent = ({data}) => {
  return(
    <>
      <PageIntro 
        text={data.text}
      />

      <InfoBlocks blocks={data.infoBlocks} />
    </>
  )
}

export default PageContent