import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import Container from './Container'

const About = () => {
  return (
    <>
    <Meta title={"About"} />
    <Header />
    <BreadCrumb title = "About" />
    <Container class1="about-wrapper home-wrapper-2 py-5">
      <div className="row">

      </div>

    </Container>
    <Footer />
    </>
  )
}

export default About