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
        <p>Hi there! My name is Catherine Hu, and I'm a computer science and geography student @ UCLA. Originally from Burnaby, British Columbia, I've lived in Southern California for the past ten years.</p>
        <p>I first got into tech near the end of my senior year of high school (right around the beginning of quarantine) because I was drawn to its potential to build communities and bring people together. I'm excited to use my education and experiences to exploring my interests in social impact.</p>
        <ul><h2>hobbies + interests</h2> 
        <li>writing short stories</li>
          <li>hiking</li>
          <li>stargazing</li>
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
