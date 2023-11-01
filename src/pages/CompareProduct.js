
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'

const CompareProduct = () => {
  return (
    <>
    <Meta title={"Compare products"} />
    <Header />
    <BreadCrumb title = "Compare products" />
      <div className="compare-product-wrapper home-wrapper-2 py-5">
         <div className="container-xxl">
            <div className="row">
                <div className="col-3">
                    <div className="compare-product-card">
                        <div className="product-card-image">
                            <img src="images/watch.jpg" alt="watch" />
                        </div>
                    </div>
                </div>
            </div>
         </div>
      </div>
    <Footer />
    </>
  )
}

export default CompareProduct