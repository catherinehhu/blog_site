import * as React from "react"
import { Link } from "gatsby"


const Layout = ({ location, title, children }) => {
  let home_header = (
      <Link className="header-link-home" activeclassname = "active-link" to="/">
        {title}
      </Link> 
      )
  // let stories_header = (
  //       <Link className="header-link-home" activeclassname = "active-link" to="/stories">
  //           stories
  //       </Link> 
  //       )
        let experience_header = (
          <Link className="header-link-home" activeclassname = "active-link" to="/experience">
              experience 
          </Link>)
let photos_header = (
  <Link className="header-link-home" activeclassname = "active-link" to="/photos">
      photos
  </Link> 
  )
  // let resume_header = (<a className = "header-link-home" activeclassname = "active-link" href="/CatherineHu.pdf">resume</a>)
  return (
<div className="global-wrapper" data-is-root-path={"/"}>
      <div className = "header-style">
      <header className="global-header">{home_header} 
      {experience_header}
      {/* {resume_header} */}
      {/* {stories_header} */}
      {photos_header}
      </header>
      </div>
      <main style ={{padding:  `5rem 5rem 0rem`}}>{children}</main>
      <footer>
      <a href = "https://github.com/catherinehhu"><img src="/githublogo.png" alt="GitHub logo" width="40vh" height="40vh"></img></a>
        <a href = "https://www.linkedin.com/in/catherinehhu/"><img src="/linkedinlogo.png" alt="LinkedIn logo" width="40vh" height="40vh"></img></a>
        <a href = "mailto:catherinehuihu@gmail.com"><img src="/gmaillogo.png" alt="Gmail logo" width="40vh" height="40vh"></img></a>
        <br></br> 
        <hr></hr>
        <br></br>
        © {new Date().getFullYear()} | made with 🤍 by catherine
      </footer>
    </div>
  )
}

export default Layout
