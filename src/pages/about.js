import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="about" />
      <h2>about me</h2>
        <p>Originally from Burnaby, British Columbia, I've lived in Southern California for the past ten years. Currently, I study computer science and geography at UCLA, where I'm an almost-sophomore.</p>
        <ul><h2>hobbies + interests</h2> 
          <li>writing short stories</li>
          <li>hiking</li>
          <li>stargazing</li>
          <li>coming up with exciting spotify playlist names</li>
          <li>trying new recipes</li>
          <li>watching the sunrise + sunset</li>
          <li>taking photos (exclusively of stars, sunsets, and flowers)</li>
          <li>reading memoirs, fantasy, poetry, and sci-fi</li>
          <li>embroidering</li>
          <li>practicing calligraphy</li>
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
