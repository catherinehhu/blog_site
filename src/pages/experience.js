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
      <h2 style={{ marginTop: `1rem` }}>[insert creative title here]</h2>
      <h3>projects</h3>

      <Container
        title="currently:"
        desc="writing a collection of short stories inspired by my life (to be finished in 2022) + organizing my life on notion"
        imgLocation="/experiences/notion.png"
        link="https://catherinehhu.com/"
      ></Container>

      <Container
        title="symbia"
        desc="a prototype of an iOS app that incentivizes people to recycle (top 10 finalist) made @ adobe x target creative jam"
        imgLocation="/experiences/symbia.png"
        link="https://xd.adobe.com/view/81e42596-b424-47e5-81c6-44f31bdb664b-d4b7/"
      ></Container>

      <Container
        title="covalent"
        desc="a web app for remote team bonding launched on product hunt"
        imgLocation="/experiences/covalent.png"
        link="https://covalent.app/"
      ></Container>

      <Container
        title="terra"
        desc="a composting web app prototyped @ innovate@ucla"
        imgLocation="/experiences/terra.png"
        link="https://www.figma.com/proto/B0L3QPXrUq8pMyfb5mPHQI/Prototypes?node-id=277%3A80&starting-point-node-id=277%3A80"
      ></Container>

      <Container
        title="ghostracer"
        desc="a c++ game that explores OOP and inheritance developed @ ucla"
        imgLocation="/experiences/ghostracer.png"
        link="https://github.com/catherinehhu/GhostRacer"
      ></Container>

      <Container
        title="ios apps"
        desc="modified versions of instagram, twitter, and imdb built @ ios codepath course fall 2020"
        imgLocation="/experiences/flix.png"
        link="https://github.com/catherinehhu/flix"
      ></Container>

      <Container
        title="designerth"
        desc="a prototype of a design-education tablet app (top 25) @ adobe x amazon creative jam"
        imgLocation="/experiences/designerth.png"
        link="https://xd.adobe.com/view/908b75b8-9f91-48ae-8ef2-04fcd102081f-c5d8/"
      ></Container>

      <Container
        title="beckman spectrophotometer"
        desc="a functional spectrophotometer built @ the arnold & mabel beckman foundation"
        imgLocation="/experiences/beckman.png"
        link="https://www.beckman-foundation.org/people/catherine-hu/"
      ></Container>

      <h3>school orgs</h3>

      <Container
        title="LA Hacks"
        // imgLocation="/experiences/ucla.png"
        desc="director of sponsorships for one of the largest collegiate hackathons in the united states"
        link="https://lahacks.com/"
      ></Container>

      <Container
        title="Nova For Good"
        // imgLocation="/experiences/ucla.png"
        desc="working on business development and outreach efforts for our mentorship project, as well as recruitment and projects lead"
        link="https://www.novaforgood.org/"
      ></Container>

    <Container
        title="Daily Bruin"
        // imgLocation="/experiences/ucla.png"
        desc="data journalist for the stack and writer for the news page (science & health)"
        link="https://dailybruin.com/author/catherine-hu"
      ></Container>

      <h3>work</h3>
      <ul>
        <li>product management @ rising academies</li>
        <li>product marketing @ hoamsy</li>
        <li>sustainability analyst @ voiz</li>
        <li>content writer @ city flavor</li>
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
