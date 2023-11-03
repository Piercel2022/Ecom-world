import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'

const TermAndConditions = () => {
  return (
    <>
    <Meta title={"terms and conditions"} />
    <Header />
    <BreadCrumb title = "Terms and conditions" />
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

export default TermAndConditions