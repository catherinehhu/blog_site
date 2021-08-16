import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="about" />
      <h2>who (hu) i am</h2>
        <p>hey there! my name is catherine hu, and i'm a computer science and geography student @ ucla. welcome to my <i>always-a-work-in-progress</i> site!</p>
        {/* <img src = "profile.jpeg" className = "profile" alt = "catherine profile"></img> */}
      {/* <h5 style = {{textAlign: 'center', marginTop: `1rem`}}>wow, look, it's me!</h5> */}
        <p>i first got into tech near the end of my senior year of high school (right around the beginning of quarantine) because i was drawn to its 
          potential to build communities and bring people together. i'm excited to use my education and experiences to explore my creativity and passions for product and social impact.</p>
        <p>check out the projects + work i've done <a href = "experience">here</a>!</p>
        <ul><h2>hobbies + interests</h2> 
          <li>writing short stories</li>
          <li>hiking</li>
          <li>stargazing</li>
          <li>making puns</li>
          <li>coming up with exciting spotify playlist names</li>
          <li>trying new recipes</li>
          <li>talking about + eating food</li>
          <li>watching the sunrises + sunsets</li>
          <li>taking photos (mostly of stars, sunsets, + flowers)</li>
          <li>reading memoirs, fantasy, poetry, + sci-fi</li>
          <li>embroidering</li>
          <li>practicing calligraphy</li>
          <li>using the Oxford comma</li>
        </ul>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
