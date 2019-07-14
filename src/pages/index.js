import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 class="text-red-900">Product leader, designer, life-long learner.</h1>
    <p>I’m a product leader with over 4 years of experience in developing and improving products. I started my product career at Mimi in 2014, when the company still had to officially incorporate. Especially in the first two years I gained practical experience in a lot of fields. From product marketing, to cultural and organizational development, hiring and interviewing, strategy setting and leadership. Since then my focus has been on Product Management/Leadership..</p>
    <h2>Product</h2>
    <p>I officially started at Mimi as a user experience designer, but quickly took on more responsibilities around the product as we grew. In those years I’ve worked both on B2C products, as well as B2B solutions.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
