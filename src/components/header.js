import React, {useState} from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import {
  Container,
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

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <header>
      <Navbar color="light" light expand="md">
        <Container>
          <NavbarBrand href="/">558867</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              {props.pages.edges && props.pages.edges.map((page, i) => {
                const slug = page.node.slug === "/" ? "/" : `/${page.node.slug}/`
                return(
                  <NavItem className="mb-0">
                    <Link className="nav-link" to={slug}>{page.node.title}</Link>
                  </NavItem>
                )
              })}
              <UncontrolledDropdown nav inNavbar className="mb-0">
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
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