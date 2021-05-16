import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  let header1 = (
      <Link className="header-link-home" to="/">
        {title}
      </Link> 
      )
  let header2 = (
        <Link className="header-link-home" to="/about">
            about
        </Link> 
        )
        let header3 = (
          <Link className="header-link-home" to="/experience">
              experience 
          </Link>)
  let header4 = (<a className = "header-link-home" href="/Hu_Catherine.pdf">resume</a>)

  return (
    <div className="global-wrapper" data-is-root-path={"/"}>
      <header className="global-header">{header1} 
      {header2}
      {header3}
      {header4}
      </header>
      <main>{children}</main>
      <footer>
      <a href = "https://github.com/catherinehhu"><img src="/githublogo.png" alt="GitHub logo" width="30vh" height="30vh"></img></a>
        <a href = "https://www.linkedin.com/in/catherinehhu/"><img src="/linkedinlogo.png" alt="LinkedIn logo" width="30vh" height="30vh"></img></a>
        <a href = "mailto:catherinehuihu@gmail.com"><img src="/gmaillogo.png" alt="Gmail logo" width="30vh" height="30vh"></img></a>
        <br></br> 
        <hr></hr>
        <br></br>
        © {new Date().getFullYear()} | built with 🤍 by catherine and
        {` `}
        <a href="https://www.gatsbyjs.com">gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
