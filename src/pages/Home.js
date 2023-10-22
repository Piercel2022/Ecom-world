import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
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
          <div className='d-flex align-items-center gap-15'>
            <img src="/images/service.png" alt="services" />
            <div>
              <h6>Free Shipping</h6>
              <p className='mb-0'>From all orders over $5</p>
            </div>
          </div>
          <div className='d-flex align-items-center gap-15'>
          <img src="images/service-02.png" alt="services" />
          <div>
          <h6>Daily Surprise Offers</h6>
          <p className='mb-0'>Save upto 25% Off</p>
          </div>
          </div>
          <div className='d-flex align-items-center gap-15'>
          <img src="images/service-03.png" alt="services" />
          <div>
          <h6>Support 24/7</h6>
          <p className='mb-0'>Shop with an expert</p>
          </div>
          </div>
          <div className='d-flex align-items-center gap-15'>
          <img src="images/service-04.png" alt="services" />
          <div>
          <h6>Affordable Prices</h6>
          <p className='mb-0'>Get Factory default prices</p>
          </div>
          </div>
          <div className='d-flex align-items-center gap-15'>
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
    <section className="home-wrapper-2 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex  flex-wrap justify-content-between  align-items-center">
              <div className='d-flex g-30 align-items-center'>
                <div>
                  <h6>Cameras</h6>
                  <p>10 items</p>
                </div>
                <img src="images/camera.jpg" alt="" />
              </div>
              <div className='d-flex g-30 align-items-center'>
                <div>
                  <h6>Cameras</h6>
                  <p>10 items</p>
                </div>
                <img src="images/camera.jpg" alt="" />
              </div>
              <div className='d-flex g-30 align-items-center'>
                <div>
                  <h6>Smart Tvs</h6>
                  <p>10 items</p>
                </div>
                <img src="images/tv.jpg" alt="" />
              </div>
              <div className='d-flex g-30 align-items-center'>
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 items</p>
                </div>
                <img src="images/headphone.jpg" alt="" />
              </div>
              <div className='d-flex g-30 align-items-center'>
                <div>
                  <h6>Cameras</h6>
                  <p>10 items</p>
                </div>
                <img src="images/camera.jpg" alt="" />
              </div>
              <div className='d-flex g-30 align-items-center'>
                <div>
                  <h6>Cameras</h6>
                  <p>10 items</p>
                </div>
                <img src="images/camera.jpg" alt="" />
              </div>
              <div className='d-flex g-30 align-items-center'>
                <div>
                  <h6>Smart Tvs</h6>
                  <p>10 items</p>
                </div>
                <img src="images/tv.jpg" alt="" />
              </div>
              <div className='d-flex g-30 align-items-center'>
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 items</p>
                </div>
                <img src="images/headphone.jpg" alt="" />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section className="featured-wrapper py-5 home-wrapper-2">
    <div className="container-xxl">
      <div className="row">
        <div className="col-12">
          <h3 className="section-heading">
            Featured Collections
          </h3>
        </div>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
    </section>

    <section className="special-wrapper py-5 home-wrapper-2">
      <div className="container-xxl">
        <div className="row">
        <div className="col-12">
          <h3 className="section-heading">
            Special Products
          </h3>
        </div>
        </div>
        <div className="row">
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
      </div>


    </section>
    <section className="popular-wrapper py-5 home-wrapper-2">
    <div className="container-xxl">
      <div className="row">
        <div className="col-12">
          <h3 className="section-heading">
            Our Popular Products
          </h3>
        </div>
        <div className="row">
         <div className="col-2" >
           <div className='card'></div>
         </div>
         <div className="col-2">
         <div className='card'></div>
         </div>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        </div>
      </div>
    </div>
    </section>

    <section className="marquee-wrapper py-5">
     <div className="container-xxl">
      <div className="row">
        <div className="col-12">
          <div className="marquee-inner-wrapper card-wrapper">
          <Marquee className='d-flex'>
         <div className='mx-4 w-25'>
          <img src="images/brand-01.png" alt="brand" />
         </div>
         <div className='mx-4 w-25'>
          <img src="images/brand-02.png" alt="brand" />
         </div>
         <div className='mx-4 w-25'>
          <img src="images/brand-03.png" alt="brand" />
         </div>
         <div className='mx-4 w-25'>
          <img src="images/brand-04.png" alt="brand" />
         </div>
         <div className='mx-4 w-25'>
          <img src="images/brand-05.png" alt="brand" />
         </div>
         <div className='mx-4 w-25'>
          <img src="images/brand-06.png" alt="brand" />
         </div>
         <div className='mx-4 w-25'>
          <img src="images/brand-07.png" alt="brand" />
         </div>
         <div className='mx-4 w-25'>
          <img src="images/brand-08.png" alt="brand" />
         </div>
          </Marquee>
          </div>
        </div>
      </div>
     </div>
    </section>
    <section className="blog-wrapper py-5 home-wrapper-2">
    <div className="container-xxl">
      <div className="row">
        <div className="col-12">
          <h3 className="section-heading">
            Our Latest Blogs
          </h3>
        </div>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
    </section>
    <Footer />
    </>
  )
}

export default Home