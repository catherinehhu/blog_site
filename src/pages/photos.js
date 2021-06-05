import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="photos" />

        <h2>photos</h2>
      <i>la jolla, california: december 2020</i>
    <img src = "/photos/lajolla.jpeg" class = "gallery"></img>
    <br></br>
    <i>irvine, california: january 2020</i>
    <img src = "/photos/trail.jpeg" class = "gallery"></img>
    <br></br>
    <i>cabo san lucas, baja california: december 2019</i>
    <img src = "/photos/cabo.jpeg" class = "gallery"></img>
    <br></br>
    <i>峨眉山 (emeishan), sichuan: august 2019</i>
    <img src = "/photos/emeishan.jpeg" class = "gallery"></img>
    <br></br>
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
