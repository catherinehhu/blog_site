import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
// import Card from "../components/card"
import Container from "../components/container"
// import Carousel from "../components/carousel"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="experience" />
      {/* <h5 style={{ textAlign: "center", marginTop: `1rem` }}>
        scroll thru to see my dev/design projects, work, and student org involvement!
      </h5> */}
      {/* <Container
        title="la "
        desc="hello this is where the description will be lets add more words lad jadhfl cjadshfjadhf"
        imgLocation="/photos/lajolla.jpeg"
        link="https://www.w3schools.com/css/css_margin.asp"
      ></Container>

      <Container
        title="cabo"
        desc="hello this is where the description will be lets add more words lad jadhfl cjadshfjadhf second one"
        imgLocation="/photos/cabo.jpeg"
        link="https://www.w3schools.com/css/css_margin.asp"
      ></Container> */}

      <h2>projects</h2>
      <ul><h4>in progress:</h4>
        <li>this everything-about-me site built with gatsby</li>
        <li>chrome extension for sustainable shopping</li>
      </ul>
      <ul><h4>previously:</h4> 
        <li><a href = "https://www.figma.com/proto/B0L3QPXrUq8pMyfb5mPHQI/Prototypes?node-id=0%3A1">terra</a>, a composting web app prototyped @ innovate@ucla</li>
        <li>the 2020 experience, a social distancing inspired game @ sbhacks 2021</li>
        <li><a href = "https://github.com/catherinehhu/GhostRacer">ghostracer</a>, a c++ game exploring OOP and inheritance @ ucla</li>
        <li>basic versions of instagram, twitter, and imdb @ ios codepath course fall 2020</li>
        <li><a href = "https://covalent.app/">covalent</a>, a web app for remote team bonding, contributed to front end dev</li>
        <li>fireride, a firebase web app for coordinating wildfire evacuations @ pennapps 2020</li>
        <li><a href = "https://xd.adobe.com/view/908b75b8-9f91-48ae-8ef2-04fcd102081f-c5d8/">designerth</a>, a prototype of a design-education tablet app @ adobe x amazon creative jam</li>
        <li><a href = "https://dailybruin.com/author/catherine-hu">writing + data</a> @ the daily bruin</li>
        <li>a functional <a href = "https://www.beckman-foundation.org/people/catherine-hu/">spectrophotometer</a> out of legos @ arnold & mabel beckman foundation</li>
      </ul>
      <h2>work</h2>
      <ul><h4>internships:</h4>
      <li>product @ rising academy network — fall 2021</li>
      <li>product management @ urx — summer 2021</li>
      <li>product marketing @ hoamsy — summer 2021</li>
      <li>sustainability research + analysis @ voiz — spring 2021</li>
      <li>content writing @ city flavor — summer 2020</li>
      </ul>
      <h2>school</h2>
      <ul><h4>orgs i'm in:</h4>
        <li>LA Hacks (director of sponsorships)</li>
        <li>Daily Bruin (data journalism @ the stack, science + health @ news)</li>
        <li>Nova, Tech for Good (product + outreach manager)</li>
        <li>Innovate@UCLA (pm + dev)</li>
        <li>DevX (marketing)</li>
        <li>Creative Labs (story writing)</li>
        <li>BruinLabs (pm)</li>      
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
