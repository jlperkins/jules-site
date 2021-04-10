import PropTypes from "prop-types"
import React from "react"
import { Container } from "react-bootstrap"
import Nav from "../components/nav"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `teal`,
      marginBottom: `1.45rem`,
    }}
  >
    <Nav/>
  {/* <Container fluid className="px=0">
    <Navbar/>
  </Container> */}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
