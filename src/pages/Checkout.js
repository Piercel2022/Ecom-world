import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
const Checkout = () => {
  return (
    <>
    <Meta title={"checkout"} />
    <Header />
    <BreadCrumb title = "Your Checkout" />

    <Footer />
    </>
  )
}

export default Checkout
