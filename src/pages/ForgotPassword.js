import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'

const ForgotPassword = () => {
  return (
    <>
    <Meta title={"login"} />
    <Header />
    <BreadCrumb title = "login" />
    
    <Footer />
    </>
  )
}

export default ForgotPassword