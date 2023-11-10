import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import Container from './Container'

const Laptops = () => {
  return (
    <>
    <Meta title={"laptops"} />
    <Header />
    <BreadCrumb title = "Laptops" />
    <Container className="laptop-wrapper home-wrapper-2 py-5">

    </Container>
    <Footer />
        
    </>
  )
}

export default Laptops