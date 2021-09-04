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
      <h5 style={{ textAlign: "center", marginTop: `1rem` }}>
        scroll thru to see my dev/design projects, work, and student org
        involvement!
      </h5>

      <Container
        title="in progress projects"
        desc="this website about me (built with gatsby) and a collection of short stories on love (hoping to publish in 2022)"
        // imgLocation="/experiences/covalent.png"
        link="https://catherinehhu.com/"
      ></Container>

      <Container
        title="symbia"
        desc="a prototype of a gamified app that incentivizes people to recycle properly @ adobe x target creative jam (finalist)"
        imgLocation="/experiences/symbia.png"
        link="https://xd.adobe.com/view/81e42596-b424-47e5-81c6-44f31bdb664b-d4b7/"
      ></Container>

      <Container
        title="covalent"
        desc="a web app for remote team bonding, contributed to front end dev and launched marketing campaigns"
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
        desc="a c++ game exploring OOP and inheritance @ ucla"
        imgLocation="/experiences/ghostracer.png"
        link="https://github.com/catherinehhu/GhostRacer"
      ></Container>

      <Container
        title="ios apps"
        desc="created versions of instagram, twitter, and imdb @ ios codepath course fall 2020"
        imgLocation="/experiences/flix.png"
        link="https://github.com/catherinehhu/flix"
      ></Container>

      <Container
        title="designerth"
        desc="a prototype of a design-education tablet app @ adobe x amazon creative jam"
        imgLocation="/experiences/designerth.png"
        link="https://xd.adobe.com/view/908b75b8-9f91-48ae-8ef2-04fcd102081f-c5d8/"
      ></Container>

      <Container
        title="beckman spectrophotometer"
        desc="built a spectrophotometer out of legos @ arnold & mabel beckman foundation"
        imgLocation="/experiences/beckman.png"
        link="https://www.beckman-foundation.org/people/catherine-hu/"
      ></Container>

      <Container
        title="work + internships"
        // imgLocation="/experiences/ucla.png"
        desc="product development, product marketing, sustainability, content writing"
        link="https://www.linkedin.com/in/catherinehhu/"
      ></Container>

      <Container
        title="ucla organizations"
        imgLocation="/experiences/ucla.png"
        desc="LA Hacks, Daily Bruin, Nova for Good, Innovate@UCLA, DevX, CreativeLabs, BruinLabs"
        link="https://www.ucla.edu/"
      ></Container>

      {/* 
      {/* <h2>projects</h2>
      <ul><h4>previously:</h4> 
        <li>the 2020 experience, a social distancing inspired game @ sbhacks 2021</li>
        <li>fireride, a firebase web app for coordinating wildfire evacuations @ pennapps 2020</li>
        <li><a href = "https://dailybruin.com/author/catherine-hu">writing + data</a> @ the daily bruin</li>
      </ul>
      <h2>work</h2>
      <ul><h4>internships:</h4>
      <li>product @ rising academy network — fall 2021</li>
      <li>product management @ urx — summer 2021</li>
      <li>product marketing @ hoamsy — summer 2021</li>
      <li>sustainability research + analysis @ voiz — spring 2021</li>
      <li>content writing @ city flavor — summer 2020</li>
      </ul>
        </ul> */}
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
