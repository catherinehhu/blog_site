import * as React from "react"
import { Link } from "gatsby"


const Layout = ({ location, title, children }) => {
  let home_header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link> 
      )
  let stories_header = (
        <Link className="header-link-home" to="/stories">
            stories
        </Link> 
        )
        let experience_header = (
          <Link className="header-link-home" to="/experience">
              experience 
          </Link>)
  let resume_header = (<a className = "header-link-home" href="/Hu_Catherine.pdf">resume</a>)

  return (
    <div className="global-wrapper" data-is-root-path={"/"}>
      <header className="global-header">{home_header} 
      {experience_header}
      {stories_header}
      {resume_header}
      </header>
      <main>{children}</main>
      <footer>
      <a href = "https://github.com/catherinehhu"><img src="/githublogo.png" alt="GitHub logo" width="30vh" height="30vh"></img></a>
        <a href = "https://www.linkedin.com/in/catherinehhu/"><img src="/linkedinlogo.png" alt="LinkedIn logo" width="30vh" height="30vh"></img></a>
        <a href = "mailto:catherinehuihu@gmail.com"><img src="/gmaillogo.png" alt="Gmail logo" width="30vh" height="30vh"></img></a>
        <br></br> 
        <hr></hr>
        <br></br>
        © {new Date().getFullYear()} | made with 🤍 by catherine
      </footer>
    </div>
  )
}

export default Layout
