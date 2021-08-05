import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Card from "../components/card"
import Container from "../components/container"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="experience" />
      <h2>projects</h2>
      {/* <Container>
      </Container> */}
      {/* <Card> */}
      <ul><h4>in progress:</h4>
        <li>this everything-about-me site built with gatsby</li>
        <li>chrome extension for sustainable shopping</li>
      </ul>
      {/* </Card>
      <Card> */}
      <ul><h4>previously:</h4> 
        <li><a href = "https://www.figma.com/proto/B0L3QPXrUq8pMyfb5mPHQI/Prototypes?node-id=0%3A1">terra</a>, a composting web app prototyped @ innovate@ucla</li>
        <li>the 2020 experience, a social distancing inspired game @ sbhacks 2021</li>
        <li><a href = "https://github.com/catherinehhu/GhostRacer">ghostracer</a>, a c++ game exploring OOP and inheritance @ ucla</li>
        <li>basic versions of instagram, twitter, and imdb @ ios codepath course fall 2020</li>
        <li><a href = "https://covalent.app/">covalent</a>, a web app for remote team bonding, contributed to front end dev</li>
        <li>fireride, a firebase web app for coordinating wildfire evacuations @ pennapps 2020</li>
        <li><a href = "https://xd.adobe.com/view/908b75b8-9f91-48ae-8ef2-04fcd102081f-c5d8/">designerth</a>, a prototype of a design-education tablet app @ adobe x amazon creative jam</li>
        <li>a functional <a href = "https://www.beckman-foundation.org/people/catherine-hu/">spectrophotometer</a> out of legos @ arnold & mabel beckman foundation</li>
      </ul>
      {/* </Card> */}
      <h2>work</h2>
      {/* <Card> */}
      <ul><h4>internships:</h4>
      <li>product management @ urx</li>
      <li>product marketing @ hoamsy</li>
      <li>sustainability research + analysis @ voiz</li>
      <li>content writing @ city flavor</li>
      </ul>
      {/* </Card> */}
      <h2>school</h2>
      {/* <Card> */}
      <ul><h4>orgs i'm in:</h4>
        <li>LA Hacks (sponsorships)</li>
        <li>Daily Bruin (data journalism @ the stack, science + health @ news)</li>
        <li>Nova, Tech for Good (product + outreach)</li>
        <li>Innovate@UCLA (pm + dev)</li>
        <li>DevX (marketing)</li>
        <li>Creative Labs (story writing)</li>
        <li>BruinLabs (pm)</li>      
        </ul>
      {/* </Card> */}

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
