/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import Seo from "components/seo"
import Header from "./Header"
import Footer from "./Footer"
import "./layout.css"
import "bootstrap/dist/css/bootstrap.min.css"

const Layout = ({ title, children }) => {
  return (
    <>
    	<Seo title="Home" />
      <Header siteTitle={title} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
