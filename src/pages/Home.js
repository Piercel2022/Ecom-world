import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
import Meta from '../components/Meta'


const Home = () => {
  return (
    <>
    <Meta title={"Home"} />
    <Header />
    <section className="home-wrapper-1 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-6">
           <div className="main-banner position-relative">
           <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./images/main-banner.jpg" class="d-block w-100" alt="banner"/>
    </div>
    <div class="carousel-item">
      <img src="./images/main-banner1.jpg" class="d-block w-100" alt="banner1"/>
    </div>
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
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
<section className="famous-wrapper py-5 home-wrapper-2">
<div className="container-xxl">
      <div className="row">
      <h3 className="section-heading">
            Famous Products
        </h3>
        <div className="col-3">
       
        <div className="famous-card position-relative">
        <img src='images/famous.jpg' className='famous img-fluid' alt='famous'/>
          <div className="famous-content position-absolute">
            <h5>Big screen</h5>
            <h6>Smart Watches <br /> Series 7</h6>
            <p>From $399 <br />or $16.64/mo.<br /> for 24 mo.</p>

          </div>
        
          </div>
        </div>
        <div className="col-3">
        <div className="famous-card position-relative">
        <img src='images/home-speakers.jpg' className='famous img-fluid' alt='famous'/>
          <div className="famous-content position-absolute">
            <h5 className='text-dark'>Home Speaker.</h5>
            <h6 className='text-dark'>Room filling sound.</h6>
            <p className='text-dark'>From $1999 <br />or $126.64/mo.<br /> for 24 mo.</p>

          </div>
        
          </div>
        </div>
        <div className="col-3">
        <div className="famous-card position-relative">
        <img src='images/display.jpg' className='famous img-fluid' alt='famous'/>
          <div className="famous-content position-absolute">
            <h5>Studio Display</h5>
            <h6>600 nits   of brightness </h6>
            <p>27-inch 5k retina display.</p>

          </div>
        
          </div>
        </div>
        <div className="col-3">
        <div className="famous-card position-relative">
        <img src='images/famous-3.jpg' className='famous img-fluid' alt='famous'/>
          <div className="famous-content position-absolute">
            <h5>Iphone Max Pro.</h5>
            <h6>Iphone  <br />max pro </h6>
            <p>From $1999 <br />or $126.64/mo.<br /> for 24 mo.</p>

          </div>
          </div>
          </div>
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
        <div className="row">
          <div className="col-3">
          <BlogCard />
          </div>
          <div className="col-3">
          <BlogCard />
          </div>
          <div className="col-3">
          <BlogCard />
          </div>
          <div className="col-3">
          <BlogCard />
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