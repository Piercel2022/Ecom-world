import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'

const ShippingPolicy = () => {
  return (
    <>
    <Meta title={"shipping policy"} />
    <Header />
    <BreadCrumb title = "Shipping Policy" />
    <Footer />
    </>
  )
}

export default ShippingPolicy