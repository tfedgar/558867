import React, {useState} from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'
import ContainerStyled from "components/ContainerStyled"

const NavbarStyled = styled(Navbar)`
  .nav-link {
    color: black !important;
  }
`

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <header>
      <NavbarStyled color="light" light expand="md">
        <ContainerStyled>
          <NavbarBrand href="/">558867</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem className="mb-0">
                <Link className="nav-link" to="/">Home</Link>
              </NavItem>
              {props.pages.edges && props.pages.edges.map((page, i) => {
                const slug = page.node.slug === "/" ? "/" : `/${page.node.slug}/`
                if (slug !== "/") {
                  if (page.node.childPages) {
                    return(
                      <UncontrolledDropdown nav inNavbar className="mb-0" key={i}>
                        <DropdownToggle nav caret>
                          {page.node.title}
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>
                              <Link className="nav-link" to={slug}>Overview</Link>
                          </DropdownItem>
                          {page.node.childPages.map((child, ci) => {
                            return(
                              <DropdownItem key={ci}>
                                <Link className="nav-link" to={`${slug}${child.slug}/`}>{child.title}</Link>
                              </DropdownItem>
                            )
                          })}
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    )
                  } else {
                    return(
                      <NavItem className="mb-0" key={i}>
                        <Link className="nav-link" to={slug}>{page.node.title}</Link>
                      </NavItem>
                    )
                  }
                } else return ""

              })}
            </Nav>
          </Collapse>
        </ContainerStyled>
      </NavbarStyled>
    </header>    
  )
}

const HeaderExport = (props) => {
  return(
    <StaticQuery
      query={graphql`
        query {
          allContentfulPage {
            edges {
              node {
                slug
                title
                childPages {
                  id
                  slug
                  title
                }
              }
            }
          }
        }
      `}
      render={data => {
        if (data.allContentfulPage.edges) {
          return (
            <Header pages={data.allContentfulPage} />
          )
        } else return ""
      }}
    />
  )
}

export default HeaderExport