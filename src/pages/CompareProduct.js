
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
                    <div className="compare-product-card position-relative">
                        <img src="images/cross.svg" alt="cross" className="position-absolute cross" />
                        <div className="product-card-image">
                            <img src="images/tab.jpg" className='img-fluid' alt="tablet" />
                        </div>
                        <div className="compare-product-details">
                            <h5 className="title">
                              Honor T1 7.0.3 GB Ram 8  7-inch with Wi-Fi + 3G Tablet
                            </h5>
                            <h6 className="price">$ 100</h6>
                            <div>
                              <div className='product-detail'>
                                <h5>Brand: </h5>
                                <p>Havels</p>
                              </div>
                            </div>
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