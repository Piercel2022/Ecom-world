import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'

const ShippingPolicy = () => {
  return (
    <>
    <Meta title={"shipping policy"} />
    <Header />
    <BreadCrumb title = "Shipping Policy" />
    <section className="policy-wrapper py-5 home-wrapper-2">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="policy">
              
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  )
}

export default ShippingPolicy