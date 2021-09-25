import React from "react"
import { Container } from "reactstrap"
import styled from "styled-components"

const StyledFooter = styled.footer`
  margin-top: 2rem;
  background-color: #333;
  color: white;
  padding: 5rem 1rem;
  a {
    color: white;

    &:hover {
      text-decoration: underline;
      color: white;
    }
  }
`

const Footer = () => {
  return(
    <StyledFooter>
      <Container>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </Container>
    </StyledFooter>
  )
}

export default Footer