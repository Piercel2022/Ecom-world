import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Meta from './Meta'
import BreadCrumb from './BreadCrumb'
import ProductCard from './ProductCard'
import ReactStars from 'react-rating-stars-component';

const ratingChanged = (newRating) => {
  console.log(newRating);
};
const SingleProduct = () => {
  const [orderedProduct] = useState(true);
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
              <div className="col-12">
                <h4 className=''>Description</h4>
                
                <div className="bg-white p-3">
                   <p>text ever since the 1500s, when an unknown printer took a 
                    galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap 
                    into electronic typesetting, remaining essentially unchanged.</p>
                </div>
              </div>
            </div>
           </div>
        </div>
        
  <section className="review-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                <div className="col-12">
                <div className="review-inner-wrapper">
                  <div className="review-head d-flex justify-content-between align-items-end">
                    <div>
                      <h4>Customer Reviews</h4>
                      <div className='d-flex align-items-center gap-10'>
                      <ReactStars
                       count={5}
                       onChange={ratingChanged}
                       size={24}
                       value={3}
                       edit="false"               
                      activeColor="#ffd700"
                     />
                     <p className='mb-0'>Based on 2 reviews</p>
                     </div>
                    </div>
                    <div>
                      {orderedProduct &&(
                      <div>
                      <a className='text-dark text-decoration-underline' href="http:">{" "}Write a Review</a>
                    </div> )}
                    </div>
                  </div>
                  <div className="review-form py-4">
                    <h4>Write a Review</h4>
                  <form action="" className='d-flex flex-column gap-15'>
                <div>
                <div>
                <ReactStars
                 count={5}
                 onChange={ratingChanged}
                 size={24}
                 value={3}
                 edit="true"               
                activeColor="#ffd700"
                />
                </div>
                
                <div>
                <textarea name="" className="w-100 form-control" placeholder="Message" id="" cols="30" rows="10" />
                </div>
                <div className='d-flex justify-content-end py-3'>
                  <button className="button border-0">Submit a Review</button>
                </div>
                </div>
              </form>
                  </div>
                  <div className='reviews'>
                    <div className="review">
                    <div className='d-flex align-items-center gap-10'>
                    <h6 className='mb-0'>Navdeep</h6>
                    <ReactStars
                     count={5}
                     onChange={ratingChanged}
                     size={24}
                     value={3}
                     edit="true"               
                     activeColor="#ffd700"
                    />
                    </div>
                    <p className='mt-3'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'.</p>
                    </div>
                  </div>
                  </div>
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