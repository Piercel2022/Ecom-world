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
    <Container class1="laptop-wrapper home-wrapper-2 py-5">
      <div className="row">
      <div className="col-12">
        
      </div>
      </div>

    </Container>
    <Footer />
        
    </>
  )
}

export default Laptops