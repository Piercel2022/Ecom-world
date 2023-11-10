import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import Container from './Container'

const RefundPolicy = () => {
  return (
    <>
    <Meta title={"refund policy"} />
    <Header />
    <BreadCrumb title = "Refund Policy" />
    <Container class1="policy-wrapper py-5 home-wrapper-2">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="policy">
              
            </div>
          </div>
        </div>
      </div>
    </Container>
    <Footer />
        
    </>
  )
}

export default RefundPolicy