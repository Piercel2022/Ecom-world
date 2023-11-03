import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import ProductCard from '../components/ProductCard'


const SingleProduct = () => {
  return (
    <>
    <Meta title={"single product"} />
    <Header />
    <BreadCrumb title = "Single Product" />
    <div className="main-product-wrapper  py-5 home-wrapper-2">
     <div className="container-xxl">
        <div className="row">
            <div className="col-6">

            </div>
            <div className="col-6">
                
            </div>
        </div>

        <div className="description-wrapper py-5 home-wrapper-2">
           <div className="container-xxl">
            <div className="row">
              
            </div>
           </div>
        </div>
        
        <section className="review-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                <div className="col-12">

                </div>
                </div>
            </div>
        </section>
    <section className="popular-wrapper py-5 home-wrapper-2">
    <div className="container-xxl">
      <div className="row">
        <div className="col-12">
          <h3 className="section-heading">
            You may like
          </h3>
        </div>
        <div className="row">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        </div>
      </div>
    </div>
    </section>
     </div>
    </div>

    <Footer />
    </>
  )
}

export default SingleProduct