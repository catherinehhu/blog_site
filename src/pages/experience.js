import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Card from "../components/card"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="experience" />
      <h2>things i've made</h2>
      <Card>
      <ul><h4>in progress:</h4>
        <li>this website! (shoutout to <a href="https://www.gatsbyjs.com">gatsby</a>{`'s`} incredible documentation)</li>
        <li>a clean tech web app, working on design and dev</li>
      </ul>
      </Card>
      <Card>
      <ul><h4>previously:</h4> 
        <li>a covid-19 inspired game @ sbhacks 2021</li>
        <li>ghostracer, a c++ game exploring OOP and inheritance @ ucla</li>
        <li>basic versions of instagram, twitter, and imdb @ ios codepath course fall 2020</li>
        <li><a href = "https://covalent.app/">covalent</a>, a web app for remote team bonding, contributed to front end dev</li>
        <li>a firebase web app for coordinating wildfire evacuations @ pennapps 2020</li>
        <li><a href = "https://xd.adobe.com/view/908b75b8-9f91-48ae-8ef2-04fcd102081f-c5d8/">designearth</a>, a prototype of a design-education tablet app @ adobe x amazon creative jam</li>
        <li>a functional <a href = "https://www.beckman-foundation.org/people/catherine-hu/">spectrophotometer</a> out of legos @ arnold & mabel beckman foundation</li>
      </ul>
      </Card>
      <h2>work i've done</h2>
      <Card>
      <ul><h4>internships:</h4>
        <li>content writing, sustainability research, and lots and lots of outreach and marketing @ a couple of startups :)</li>
      </ul>
      </Card>
      <Card><h4>school orgs i'm in:</h4>
      <ul>
        <li>LA Hacks (sponsorships)</li>
        <li>Daily Bruin (data journalism)</li>
        <li>Nova, Tech for Good (product + outreach)</li>
        <li>Innovate@UCLA (pm + dev)</li>
        <li>DevX (marketing)</li>
        <li>Creative Labs (story writing)</li>
      </ul>
      </Card>

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
