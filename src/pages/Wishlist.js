
import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Wishlist = () => {
  return (
    <>
    <Meta title={"wishlist"} />
    <Header />
    <BreadCrumb title = "wishlist" />
      <div className="wishlist-wrapper home-wrapper-2 py-3">
        <div className="container-xxl">
            <div className="row">
                <div className="col-3">
                    <div className="wishlist-card  position-relative">
                    <img src="images/cross.svg" alt="cross" className="position-absolute cross" />
                        <div className="wishlist-card-image">
                         <img src="images/watch.jpg" className='img-fluid w-100' alt="" />
                        </div>
                        <h5 className='title'></h5>
                        <h6 className='price'>$ 100</h6>
                    </div>
                </div>
            </div>
        </div>
      </div>
    <Footer />
    </>
  )
}

export default Wishlist