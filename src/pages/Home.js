import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
    <Header />
    <section className="home-wrapper-1 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-6">
           <div className="main-banner position-relative">
            <img src='./images/main-banner1.jpg'
            className='img-fluid rounded' alt="main-banner" />
            <div className="main-banner-content position-absolute">
              <h4>SUPERCHARGED FOR PROS.</h4>
              <h5>iPad S13+ Pro.</h5>
              <p>From $9.999 or $41.62/mo</p>
              <Link className='button'>Buy Now</Link>
            </div>
           </div>
          </div>

          <div className="col-6">
            <div className='d-flex gap-10 flex-wrap justify-content-between'>
              <div className="small-banner position-relative">
            <img src='./images/catbanner-01.jpg'
            className='img-fluid rounded' alt="main-banner" />
            <div className="small-banner-content position-absolute">
              <h4>SUPERCHARGED FOR PROS.</h4>
              <h5>Mac Book Pro.</h5>
              <p>From $1559.999 <br />or $78.62/mo</p>
             
            </div>
           </div>
           <div className="small-banner position-relative">
            <img src='./images/catbanner-02.jpg'
            className='img-fluid rounded' alt="main-banner" />
            <div className="small-banner-content position-absolute">
              <h4>SUPERCHARGED FOR PROS.</h4>
              <h5>Smartwatch 7.</h5>
              <p>From $29.99 <br />or $4.62/mo</p>
             
            </div>
           </div>
           <div className="small-banner position-relative">
            <img src='./images/catbanner-03.jpg'
            className='img-fluid rounded' alt="main-banner" />
            <div className="small-banner-content position-absolute">
              <h4>Best Sale.</h4>
              <h5>iPad S13+ Pro.</h5>
              <p>From $9.999 <br />or $41.62/mo</p>
             
            </div>
           </div>
           <div className="small-banner position-relative">
            <img src='./images/catbanner-04.jpg'
            className='img-fluid rounded' alt="main-banner" />
            <div className="small-banner-content position-absolute">
              <h4>New Arrival.</h4>
              <h5>Buy iPad Air.</h5>
              <p>From $9.999 <br />or $41.62/mo</p>
             
            </div>
           </div>
          </div>

          </div>

           </div>
          </div>

    </section>
    <section className="home-wrapper-2 py-5">
    <div className="container-xxl">
     <div className="row">
      <div className="col-12">
        <div className="services d-flex align-items-center justify-content-between">
          <div className='d-flex align-items-center gap-10'>
            <img src="/images/service.png" alt="services" />
            <div>
              <h6>Free Shipping</h6>
              <p className='mb-0'>From all orders over $5</p>
            </div>
          </div>
          <div className='d-flex align-items-center gap-10'>
          <img src="images/service-02.png" alt="services" />
          <div>
          <h6>Daily Surprise Offers</h6>
          <p className='mb-0'>Save upto 25% Off</p>
          </div>
          </div>
          <div className='d-flex align-items-center gap-10'>
          <img src="images/service-03.png" alt="services" />
          <div>
          <h6>Support 24/7</h6>
          <p className='mb-0'>Shop with an expert</p>
          </div>
          </div>
          <div className='d-flex align-items-center gap-10'>
          <img src="images/service-04.png" alt="services" />
          <div>
          <h6>Affordable Prices</h6>
          <p className='mb-0'>Get Factory default prices</p>
          </div>
          </div>
          <div className='d-flex align-items-center gap-10'>
          <img src="images/service-05.png" alt="services" />
          <div>
          <h6>Secure Payments</h6>
          <p className='mb-0'>100% protected payments</p>
          </div>
          </div>

        </div>
      </div>
     </div>
    </div>

    </section>
    <Footer />
    </>
  )
}

export default Home