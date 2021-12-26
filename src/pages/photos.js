import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="photos" />
      <h2>[photos i've taken]</h2>
      <p>
        i'm not the best photographer, but here are some of my
        favorite nature shots!
      </p>
      <div class="img-wrap">
        <img
          src="/photos/lajolla.jpeg"
          class="gallery"
          alt="la jolla, california, beach"
        ></img>
        <p class="img-description"><i>la jolla, california: december 2020</i></p>
      </div>
      <br></br>
      <div class="img-wrap">
        <img
          src="/photos/trail.jpeg"
          class="gallery"
          alt="irvine, california, trail at sunset"
        ></img>
        <p class="img-description"><i>irvine, california: january 2020</i></p>
      </div>

      <br></br>
      <div class="img-wrap">
        <img
          src="/photos/cabo.jpeg"
          class="gallery"
          alt="cabo san lucas, harbor"
        ></img>
        <p class="img-description"><i>cabo san lucas, baja california: december 2019</i></p>
      </div>
      <br></br>
      <div class="img-wrap">
        <img
          src="/photos/emeishan.jpeg"
          class="gallery"
          alt="emeishan, view at peak"
        ></img>
        <p class="img-description"><i>峨眉山 (emeishan), sichuan: august 2019</i></p>
      </div>
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
