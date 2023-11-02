
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb'

const TVHome = () => {
  return (
    <>
    <Meta title={"tv home"} />
    <Header />
    <BreadCrumb title = "TV Home" />
    <Footer />
    </>
  )
}

export default TVHome