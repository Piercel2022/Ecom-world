import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'

const ForgotPassword = () => {
  return (
    <>
    <Meta title={"forgot password"} />
    <Header />
    <BreadCrumb title = "Forgot Password" />

    <Footer />
    </>
  )
}

export default ForgotPassword