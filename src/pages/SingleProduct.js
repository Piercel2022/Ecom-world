import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'


const SingleProduct = () => {
  return (
    <>
    <Meta title={"single product"} />
    <Header />
    <BreadCrumb title = "Single Product" />

    <Footer />
    </>
  )
}

export default SingleProduct