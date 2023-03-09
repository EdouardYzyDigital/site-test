// Step 1: Import React
import * as React from 'react'

//import the layout
import Layout from '../components/layout'

//import composent seo
import Seo from '../components/seo'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
    <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
  </Layout>
  )
}

//Add a page title to your page
export const Head = () => <Seo title="About Me" />

// Step 3: Export your component
export default AboutPage
