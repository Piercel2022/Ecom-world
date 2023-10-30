
import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Meta from '../components/Meta';
const OurStore = () => {
  return (
    <>
    <Meta title={"Our Store"} />
    <Header />
    <BreadCrumb title = "Our Store" />
    <div className="store-wrapper home-wrapper-2 py-5">
      <div className="row">
        <div className="col-3">
        <div className='filter-card mb-3'>
          <h3 className="filter-title">
           Shop By Categories
           </h3>
           <div>
            <ul className='ps-0'>
              <li>Watch</li>
              <li>Tv</li>
              <li>Camera</li>
              <li>Laptop</li>
            </ul>
           </div>
        </div>
        <div className='filter-card mb-3'>
        <h3 className="filter-title">
        Filter By 
        </h3>
        <div>
          <h5 className="sub-title">
            Availability
          </h5>
          <div className="form-check">
            <input type="checkbox" value="" id="" class="form-check-input" />
            <label htmlFor="" class="form-check-label">
              In stock(1)
            </label>
          </div>
          <div className="form-check">
            <input type="checkbox" value="" id="" class="form-check-input" />
            <label htmlFor="" class="form-check-label">
              Out of stock(0)
            </label>
          </div>
          <div>
          <h5 className="sub-title">
            Price
          </h5>
          <div className='d-flex align-items-center gap-10'>
          <div className="form-floating">
         <input type="email" className="form-control py-1" id="floatingInput" placeholder="From"/>
         <label htmlFor="floatingInput">From</label>
          </div> 
          <div className="form-floating">
         <input type="email" className="form-control py-1" id="floatingInput1" placeholder="To"/>
         <label htmlFor="floatingInput1">To</label>
          </div>

          </div>
          
          <h5 className="sub-title">
            Colors
          </h5>
          <div>
            <div>
              <ul className='colors ps-0'>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>

            </div>
          </div>
          <h5 className="sub-title">
            Size
          </h5>
          <div>
          <div className="form-check">
            <input type="checkbox" value="" id="color-1" class="form-check-input" />
            <label htmlFor="color-1" class="form-check-label">
              S (2)
            </label>
          </div>
          <div className="form-check">
            <input type="checkbox" value="" id="color-2" class="form-check-input" />
            <label htmlFor="color-2" class="form-check-label">
              M (2)
            </label>
          </div>
          <div className="form-check">
            <input type="checkbox" value="" id="color-2" class="form-check-input" />
            <label htmlFor="color-2" class="form-check-label">
              L (2)
            </label>
          </div>
          </div>
          </div>
        </div>
        </div>
        <div className='filter-card'>
        <h3 className="filter-title">
        Products Tags
            </h3>
            <div>
              <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                <span className="badge bg-secondary"></span>

              </div>
            </div>
        </div>
        <div className='filter-card mb-3'>
        <h3 className="filter-title">
        Random Product
            </h3>
        </div>
        </div>
        <div className="col-9">

        </div>
      </div>

    </div>
    <Footer />
    </>
  )
}

export default OurStore