import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'

const PrivacyPolicy = () => {
  return (
    <>
    <Meta title={"privacy policy"} />
    <Header />
    <BreadCrumb title = "Privacy Policy" />
    <Footer />
    </>
  )
}

export default PrivacyPolicy