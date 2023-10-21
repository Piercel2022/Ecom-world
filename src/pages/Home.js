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
           <div className="main-banner position-relative p-1">
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
            <div className='d-flex flex-wrap justify-content-between'>
              <div className="small-banner position-relative py-2">
            <img src='./images/catbanner-01.jpg'
            className='img-fluid rounded' alt="main-banner" />
            <div className="small-banner-content position-absolute">
              <h4>SUPERCHARGED FOR PROS.</h4>
              <h5>iPad S13+ Pro.</h5>
              <p>From $9.999 <br /> $41.62/mo</p>
             
            </div>
           </div>
           <div className="small-banner position-relative py-2">
            <img src='./images/catbanner-02.jpg'
            className='img-fluid rounded' alt="main-banner" />
            <div className="small-banner-content position-absolute">
              <h4>SUPERCHARGED FOR PROS.</h4>
              <h5>iPad S13+ Pro.</h5>
              <p>From $9.999 <br /> $41.62/mo</p>
             
            </div>
           </div>
           <div className="small-banner position-relative py-2">
            <img src='./images/catbanner-03.jpg'
            className='img-fluid rounded' alt="main-banner" />
            <div className="small-banner-content position-absolute">
              <h4>Best Sale.</h4>
              <h5>iPad S13+ Pro.</h5>
              <p>From $9.999 <br /> $41.62/mo</p>
             
            </div>
           </div>
           <div className="small-banner position-relative py-2">
            <img src='./images/catbanner-04.jpg'
            className='img-fluid rounded' alt="main-banner" />
            <div className="small-banner-content position-absolute">
              <h4>New Arrival.</h4>
              <h5>Buy iPad Air.</h5>
              <p>From $9.999 <br /> $41.62/mo</p>
             
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