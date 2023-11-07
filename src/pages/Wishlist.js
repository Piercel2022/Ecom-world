
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
                    <button type="button" class="btn-close" aria-label="Close"></button>
                        <div className="wishlist-card-image">
                         <img src="images/tab.jpg" className='img-fluid w-100' alt="" />
                        </div>
                        <div className=' py-3 px-3'>
                        <h5 className='title'> Honor T1 7.0.3 GB Ram 8  7-inch with Wi-Fi + 3G Tablet</h5>
                        <h6 className='price'>$ 100</h6>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="wishlist-card  position-relative">
                    <button type="button" class="btn-close" aria-label="Close"></button>
                        <div className="wishlist-card-image">
                         <img src="images/tab.jpg" className='img-fluid w-100' alt="" />
                        </div>
                        <div className=' py-3 px-3'>
                        <h5 className='title'> Honor T1 7.0.3 GB Ram 8  7-inch with Wi-Fi + 3G Tablet</h5>
                        <h6 className='price'>$ 100</h6>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="wishlist-card  position-relative">
                    <button type="button" class="btn-close" aria-label="Close"></button>
                        <div className="wishlist-card-image">
                         <img src="images/tab.jpg" className='img-fluid w-100' alt="" />
                        </div>
                        <div className=' py-3 px-3'>
                        <h5 className='title'> Honor T1 7.0.3 GB Ram 8  7-inch with Wi-Fi + 3G Tablet</h5>
                        <h6 className='price'>$ 100</h6>
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

export default Wishlist