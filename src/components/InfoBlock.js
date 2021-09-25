import React from "react"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { GatsbyImage } from "gatsby-plugin-image"

const InfoBlock = (props) => {
  const {
    title,
    image,
    text
  } = props.block

  return (
    <div>
      <h3>{title}</h3>

      <GatsbyImage
        image={image.gatsbyImageData}
        alt={image.title}
      />

      {text &&
          <div>
            { documentToReactComponents( JSON.parse(text.raw) ) }
          </div>
      }
    </div>
  )
}

export default InfoBlock