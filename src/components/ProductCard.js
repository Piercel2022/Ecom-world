
import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';


const ratingChanged = (newRating) => {
    console.log(newRating);
  };
const ProductCard = (props) => {
  let location = useLocation();
 const {grid} = props;
  return (
    <>
    <div className={ `${location.pathname === "/store" ? `gr-${grid}`  : "col-3" }`}>
        <Link to='/product/:id' className="product-card position-relative">
             <div className="wishlist-icon position-absolute">
              <Link><img src="images/wish.svg" alt="wishlist" /></Link>
             </div>
            <div className="product-image">
                <img src="./images/laptop.jpg"className='img-fluid' alt="" />
                <img src="./images/speaker.jpg" className='img-fluid' alt="" />
            </div>
            <div className="product-details">
                <h6 className="brand">
                    Ecom World
                </h6>
                <h5 className="product-title">
                    Kids headphones bulk 10 pack multicolored for students
                </h5>
                <ReactStars
                 count={5}
                 onChange={ratingChanged}
                 size={24}
                 value={3}
                 edit="false"               
                activeColor="#ffd700"
                />
                <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                text ever since the 1500s, 
                when an unknown printer took a galley of type 
                and scrambled it to make a type specimen book. 
                </p>
                <p className="price">$100.00</p>
                <div className="action-bar position-absolute">
                  <div className='d-flex flex-column gap-15'>
                    <Link>    
                    <img src="images/view.svg" alt="view" />
                    </Link>
                    <Link>    
                    <img src="images/prodcompare.svg" alt="compare" />
                    </Link>
                    <Link>    
                    <img src="images/add-cart.svg" alt="addcart" />
                    </Link>
                  </div>
                </div>
            </div>
        </Link>

    </div>

    <div className={ `${location.pathname === "/store" ? `gr-${grid}`  : "col-3" }`}>
<Link className="product-card position-relative">
     <div className="wishlist-icon position-absolute">
      <Link><img src="images/wish.svg" alt="wishlist" /></Link>
     </div>
    <div className="product-image">
        <img src="./images/laptop.jpg"className='img-fluid' alt="" />
        <img src="./images/speaker.jpg" className='img-fluid' alt="" />
    </div>
    <div className="product-details">
        <h6 className="brand">
            Ecom World
        </h6>
        <h5 className="product-title">
            Kids headphones bulk 10 pack multicolored for students
        </h5>
        <ReactStars
         count={5}
         onChange={ratingChanged}
         size={24}
         value={3}
         edit="false"               
        activeColor="#ffd700"
        />
        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                text ever since the 1500s, 
                when an unknown printer took a galley of type 
                and scrambled it to make a type specimen book. 
        </p>
        <p className="price">$100.00</p>
        <div className="action-bar position-absolute">
          <div className='d-flex flex-column gap-15'>
            <Link>    
            <img src="images/view.svg" alt="view" />
            </Link>
            <Link>    
            <img src="images/prodcompare.svg" alt="compare" />
            </Link>
            <Link>    
            <img src="images/add-cart.svg" alt="addcart" />
            </Link>
          </div>
        </div>
    </div>
</Link>

   </div>
   </>
  )
}

export default ProductCard