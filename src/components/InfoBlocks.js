import React from "react"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Row, Col, Button } from "reactstrap"
import ContainerStyled from "components/ContainerStyled"
import styled from "styled-components"

const StyledInfoBlock = styled.div`
  box-shadow: 0 0 2em rgba(0, 0, 0, 0.1);
  height: 100%;
  padding-bottom: 3rem;
  position: relative;
  display: block;
  color: black;
  text-decoration: none;
  
  h3 {
    font-size: 1.5rem;
  }

  .content {
    padding: 1rem;
  }

  .btn {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    background-color: black;
  }

  &:hover {
    color: black;
    text-decoration: none;
  }
`

const InfoBlocks = (props) => {
  return (
    <ContainerStyled>
      <Row>
        {props.blocks && props.blocks.map((block, i) => {
          const {
            title,
            image,
            text,
            link
          } = block

          return(
            <Col xs={12} md={4} key={i} className="mb-4">
              <StyledInfoBlock as={link ? Link : 'div'} to={link ? link : ''}>
                <GatsbyImage
                  image={image.gatsbyImageData}
                  alt={image.title}
                /> 
                <div className="content">
                  <h4>{title}</h4>
                  {text &&
                      <div>
                        { documentToReactComponents( JSON.parse(text.raw) ) }
                      </div>
                  }
                  {link &&
                    <Button className="btn btn-primary">
                      Read more
                    </Button>
                  }
                </div>
              </StyledInfoBlock>
            </Col>
          )
        })}
      </Row>
    </ContainerStyled>
  )
}

export default InfoBlocks