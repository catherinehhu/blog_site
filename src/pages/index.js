import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="about" />
      <h2>hu i am: the abridged edition</h2>
      <p>
        hey there! my name is catherine hu, and i'm a computer science and
        geography student @ ucla. welcome to my <i>always-a-work-in-progress</i>{" "}
        site!
      </p>
      <p>
        i first got into tech near the end of my senior year of high school
        (right around the beginning of quarantine) because i was drawn to its
        potential to build communities and bring people together. i'm excited to
        use my education and experiences to explore my creativity and passions
        for product and social impact.
      </p>
      <p>
        check out the projects + work i've done <a href="experience">here</a>!
      </p>
      <ul>
        <h2>hobbies</h2>
        <li>writing short stories</li>
        <li>hiking</li>
        <li>making bad puns</li>
        <li>developing recipes</li>
        <li>taking blurry photos of the sky and the ocean</li>
        <li>reading memoirs, fantasy, + poetry</li>
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
