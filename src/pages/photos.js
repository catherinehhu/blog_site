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
        <p>i'm definitely not the best photographer, but here are some of my favorite nature shots!</p>
      <i>la jolla, california: december 2020</i>
    <img src = "/photos/lajolla.jpeg" class = "gallery" alt = "la jolla, california, beach"></img>
    <br></br>
    <i>irvine, california: january 2020</i>
    <img src = "/photos/trail.jpeg" class = "gallery" alt = "irvine, california, trail at sunset"></img>
    <br></br>
    <i>cabo san lucas, baja california: december 2019</i>
    <img src = "/photos/cabo.jpeg" class = "gallery" alt = "cabo san lucas, harbor"></img>
    <br></br>
    <i>峨眉山 (emeishan), sichuan: august 2019</i>
    <img src = "/photos/emeishan.jpeg" class = "gallery" alt = "emeishan, view at peak"></img>
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
