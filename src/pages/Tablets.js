import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'

const Tablets = () => {
  return (
    <>
    <Meta title={"tablets"} />
    <Header />
    <BreadCrumb title = "Tablets" />
    <div className="tablet-wrapper home-wrapper-2 py-5">
    <div className="container-xxl">
     <div className="row">
     <div className="col-12">
     <div className="single-tablet-card">
     <h3 className="title">
                    A Beautiful tablet FOR SALE
        </h3>
        <img src="/images/ipad-147.png"className="img-fluid w-25 my-4" alt="tablet" />
        <p>Some description of the beautiful tablet</p>
     </div>
     </div>
      
     </div>

    </div>

    </div>
    
    <Footer />
        
    </>
  )
}

export default Tablets