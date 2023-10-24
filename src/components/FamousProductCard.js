
import React from 'react'
import Famous1 from "../images/famous.jpg"
import Famous2 from "../images/famous-2.jpeg"
const FamousProductCard = () => {
  return (
    <>
    <div className='col-3'>
        <div className="product-card position-relative">
        
            <div className="product-image">
                <img src={Famous1} className='img-fluid' alt="" />
                <img src={Famous2} className='img-fluid' alt="" />
            </div>
            <div className="product-details">
                <h6 className="brand">
                    Ecom World
                </h6>
                <h5 className="product-title">
                    Kids headphones bulk 10 pack multicolored for students
                </h5>
        
                <p className="price">$100.00</p>
                
            </div>
        </div>

    </div>
    
    </>
  )
}

export default FamousProductCard