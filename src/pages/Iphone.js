
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb'

const Iphone = () => {
  return (
    <>
    <Meta title={"iphones"} />
    <Header />
    <BreadCrumb title = "Iphones" />
     <Footer />
    </>
  )
}

export default Iphone