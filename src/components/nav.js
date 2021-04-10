import React from 'react'
import { Link } from "gatsby"

const Nav = () => {
  return <div className="nav_ul">
    <Link className="nav_li"
      to="/"
      style={{
        float: 'left',
      }}
    >
      home
    </Link>
    <Link className="nav_li"
      to="/resume"
      style={{
        float: 'right',
      }}
    >
      resume
    </Link>
    <Link className="nav_li"
      to="/projects"
      style={{
        float: 'right',
      }}
    >
      projects
    </Link>
    <Link className="nav_li"
      to="/about"
      style={{
        float: 'right',
      }}
    >
      about
    </Link>
    <Link className="nav_li"
      to="/blog"
      style={{
        float: 'right',
      }}
    >
      blog
    </Link>
</div>
}

export default Nav