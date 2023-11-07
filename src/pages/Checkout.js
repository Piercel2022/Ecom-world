import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
const Checkout = () => {
  return (
    <>
    <Meta title={"checkout"} />
    <Header />
    <BreadCrumb title = "Your Checkout" />
      <div className="checkout-wrapper home-wrapper-2">
        <div className="container-xxl">
            <div className="row">
                <div className="col-7">
                    <div className="checkout-left-data">
                        
                    </div>
                </div>
                <div className="col-5"></div>
            </div>
        </div>
      </div>
    <Footer />
    </>
  )
}

export default Checkout
