import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'

const About = () => {
  return (
    <>
    <Meta title={"About"} />
    <Header />
    <BreadCrumb title = "About" />
    <Footer />
    </>
  )
}

export default About