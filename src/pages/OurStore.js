
import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import {Helmet} from "react-helmet";
import Header from '../components/Header'
import Footer from '../components/Footer'
const OurStore = () => {
  return (
    <>
    <Header />
    <Helmet>
                <meta charSet="utf-8" />
                <title>Our Store</title>
            </Helmet>
    <BreadCrumb title = "Our Store"/>
    <Footer />
    </>
  )
}

export default OurStore