
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'

const Blog = () => {
  return (
    <>
    <Meta title={"Blogs"} />
    <BreadCrumb title = "Blogs" />
    <Header />
    Blog
    <Footer />
    </>
  )
}

export default Blog