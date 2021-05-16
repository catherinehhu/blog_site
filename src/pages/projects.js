import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="projects + work" />
      <h2>things i've made (tech + non tech projects)</h2>
      <ul>in progress: 
        <li>this website? (shoutout to gatsby's incredible documentation for guiding me through this)</li>
        <li>a clean tech web app</li>
      </ul>
      <ul>previously: 
        <li>a firebase web app for coordinating wildfire evacuations @ pennapps 2020</li>
        <li>a covid-19 inspired game @ sbhacks 2021</li>
        <li>ghostracer, a c++ game that explored OOP and inheritance @ ucla</li>
        <li>basic app versions of instagram, twitter, and imdb @ the fall 2020 ios codepath course</li>
        <li>contributed to <a href = "https://covalent.app/">covalent</a>'s front end dev</li>
        <li>a functional <a href = "https://www.beckman-foundation.org/people/catherine-hu/">spectrophotometer</a>! out of legos! mind-boggling @ arnold & mabel beckman foundation</li>
      </ul>
      <h2>work i've done</h2>
      <ul>
        <li>content writing, sustainability research, and lots and lots of outreach and marketing :)</li>
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
