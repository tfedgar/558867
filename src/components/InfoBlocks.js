import React from "react"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { GatsbyImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "reactstrap"

const InfoBlocks = (props) => {
  return (
    <Container>
      <Row>
        {props.blocks && props.blocks.map((block, i) => {
          const {
            title,
            image,
            text,
            link
          } = block

          const TitleImage = ({title, image}) => {
            return(
              <>
                  <h3>{title}</h3>
                  <GatsbyImage
                    image={image.gatsbyImageData}
                    alt={image.title}
                  />
              </>
            )
          }

          return(
            <Col xs={12} md={4} key={i}>
              {link ? (
                <a href={link}>
                  <TitleImage title={title} image={image} />
                </a>
              ) : (
                <TitleImage title={title} image={image} />
              )}  
            
              {text &&
                  <div>
                    { documentToReactComponents( JSON.parse(text.raw) ) }
                  </div>
              }
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default InfoBlocks