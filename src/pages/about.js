import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="about" />
      <h1>about me</h1>
        <p>Originally from Burnaby, British Columbia, I grew up in Southern California. I love to write short stories, take sunset photos, hike, stargaze, and find good places for food!</p>
        <p>Currently, I study computer science and geography at UCLA, where I'm an almost-sophomore.</p>
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
