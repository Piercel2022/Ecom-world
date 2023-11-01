
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'

const Blog = () => {
  return (
    <>
    <Meta title={"Blogs"} />
    <Header />
    <BreadCrumb title = "Blogs" />
    
    <div className="blog-wrapper home-wrapper-2 py-5">


    </div>
    <Footer />
    </>
  )
}

export default Blog