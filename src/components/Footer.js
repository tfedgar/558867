import React from "react"
import styled from "styled-components"
import ContainerStyled from "components/ContainerStyled"

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
      <ContainerStyled>
        © {new Date().getFullYear()}, Built with test
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </ContainerStyled>
    </StyledFooter>
  )
}

export default Footer
