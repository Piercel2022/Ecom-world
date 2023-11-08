import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'

const Shipping = () => {
  return (
    <>
    <Meta title={"shipping"} />
    <Header />
    <BreadCrumb title = "Your delivery is on its way" />

    <Footer />
    </>
  )
}

export default Shipping
