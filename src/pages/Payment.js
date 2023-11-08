import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'

const Payment = () => {
  return (
    <>
    <Meta title={"payment"} />
    <Header />
    <BreadCrumb title = "Your Payment" />

    <Footer />
    </>
  )
}

export default Payment