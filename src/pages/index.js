import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Button from "../components/button"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`jules`, `perkins`, `personal website`]} />
    <h2>This is my ~future~ personal site!</h2>
    {/* <Button buttonText="An example button that does nothing" /> */}
    <p>Clearly, this site is under construction.</p>
    <p>Soon, it will be something great!</p>
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    <Link to="/blog/">Head to the blog!</Link> <br />
    <Link to="/tags/">See tags</Link>
    {/* <Link to="/page-2/">Go to page 2</Link> <br /> */}
    {/* <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </Layout>
)

export default IndexPage
