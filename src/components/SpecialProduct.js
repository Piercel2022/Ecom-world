
import React from 'react'
import ReactStars from "react-rating-stars-component";
import {Link} from 'react-router-dom'


const ratingChanged = (newRating) => {
    console.log(newRating);
  };

const SpecialProduct = () => {
  return (
    <div className='col-6 mb-3'>
        <div className="special-product-card">
            <div className='d-flex justify-content-between'>
                <div>
                    <img src="images/airpods-max.png" className='img-fluid' alt="" />
                </div>
                <div className="special-product-content">
                 <h5 className="brand">Ecom World</h5>
                 <h6 className="title">AirPods max</h6>
                 <ReactStars
                 count={5}
                 onChange={ratingChanged}
                 size={24}
                 value={3}
                 edit="false"               
                activeColor="#ffd700"
                />
                <p className="price">
                    <span className="red-p">$ 1499</span>&nbsp;
                    <strike>$ 1799</strike>
                </p>
                <div className='discount-till d-flex align-items-center gap-10'>
                    <p className='mb-0'><b>5</b>Days  </p>

                    <div className='d-flex gap-10 align-items-center'>
                        <span className='badge rounded-circle p-3 bg-danger'>1</span>:
                        <span className='badge rounded-circle p-3 bg-danger'>1</span>:
                        <span className='badge rounded-circle p-3 bg-danger'>1</span>
                    </div>
                    </div>
                    <div className="product-count my-3">
                        <p>Products : 5</p>
                        <div className="progress">
                        <div className="progress-bar" 
                        role="progressbar" 
                        style={{width: "55%"}}
                        aria-valuenow="25"
                        aria-valuemin="0" 
                        aria-valuemax="100">

                        </div>
                    </div>
                </div>
                <Link className="button">Add to Cart</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SpecialProduct