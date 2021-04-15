import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"

const About = () => (
    <Layout>
      <h1>About Jules</h1>
      <p>Here is a video about me!</p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/SoVR88ynJ_w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </Layout>
)

export default About