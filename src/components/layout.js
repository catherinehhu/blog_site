import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header1 = (
      <Link className="header-link-home" to="/">
        {title}
      </Link> 
      )
  let header2 = (
        <Link className="header-link-home" to="/about">
          {title}
        </Link> 
        )
  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header1} 
      {header2}
      </header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()} | built with 🤍 by catherine and
        {` `}
        <a href="https://www.gatsbyjs.com">gatsby</a>
        <br></br> 
        <br></br> 
        <a href = "https://github.com/catherinehhu">GitHub</a>
        <a href = "https://www.linkedin.com/in/catherinehhu/">LinkedIn</a>
        <a href = "mailto:catherinehuihu@gmail.com">Email</a>
      </footer>
    </div>
  )
}

export default Layout
