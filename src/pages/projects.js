import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="experience" />
      <h2>things i've made</h2>
      <ul>in progress: 
        <li>this website? (shoutout to gatsby's incredible documentation for guiding me through this)</li>
        <li>a clean tech web app, working on design and dev</li>
      </ul>
      <ul>previously: 
        <li>a firebase web app for coordinating wildfire evacuations @ pennapps 2020</li>
        <li>a covid-19 inspired game @ sbhacks 2021</li>
        <li>ghostracer, a c++ game that explored OOP and inheritance @ ucla</li>
        <li>basic versions instagram, twitter, and imdb @ ios codepath course fall 2020</li>
        <li><a href = "https://covalent.app/">covalent</a>, a web app for remote team bonding, contributed to front end dev</li>
        <li>a functional <a href = "https://www.beckman-foundation.org/people/catherine-hu/">spectrophotometer</a> out of legos @ arnold & mabel beckman foundation</li>
      </ul>
      <h2>work i've done</h2>
      <ul>
        <li>content writing, sustainability research, and lots and lots of outreach and marketing :)</li>
      </ul>
      <h2>school orgs i'm in</h2>
      <ul>
        <li>LA Hacks</li>
        <li>Nova, Tech for Good</li>
        <li>Innovate@UCLA</li>
        <li>DevX</li>
        <li>Creative Labs</li>
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
