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
           <div className="main-banner-content position-relative p-3">
            <img src='./images/main-banner1.jpg'
            className='img-fluid rounded' alt="main-banner" />
            <div className="main-banner-content position-absolute">
              <h4>SUPERCHARGED FOR PROS.</h4>
              <h5>iPad S13+ Pro.</h5>
              <p>From $9.999 or $41.62/mo</p>
              <Link>Buy Now</Link>
            </div>
           </div>
          </div>
          <div className="col-6">

          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  )
}

export default Home