import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'

const Login = () => {
  return (
    <>
    <Meta title={"login"} />
    <Header />
    <BreadCrumb title = "login" />
    <div className="login-wrapper home-wrapper-2 py-3">

    </div>
    <Footer />
    </>
  )
}

export default Login