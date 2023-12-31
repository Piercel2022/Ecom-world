
import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import {BiGitCompare} from 'react-icons/bi'
import view from './view.svg'
import wish from './wish.svg'
import addcart from './add-cart.svg'



const ratingChanged = (newRating) => {
    console.log(newRating);
  };
const ProductCard = (props) => {
  let location = useLocation();
 const {grid} = props;
  return (
    <>
    <div className={ `${
      location.pathname === "/product" ? `gr-${grid}`  : "col-3" }`}>
        <Link to={`${
      location.pathname === "/"
      ? "product/:id"
      : location.pathname === "/product/:id"
      ? ":product/1"
      : ":id"}`}
        className="product-card position-relative">
             <div className="wishlist-icon position-absolute">
              <button className='border-0 bg-transparent'>
               <img src={wish} alt="wishlist" />
              </button>
             </div>
            <div className="product-image">
                <img src="../images/laptop.jpg"className='img-fluid' alt="" />
                <img src="../images/speaker.jpg" className='img-fluid' alt="" />
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
                  <button className='border-0 bg-transparent'>  
                    <img src={view} alt="view" />
                    </button>
                    <button className='border-0 bg-transparent'>    
                    <BiGitCompare className='compare' />
                    </button>
                    <button className='border-0 bg-transparent'>   
                    <img src={addcart} alt="addcart" />
                    </button>
                  </div>
                </div>
            </div>
        </Link>

    </div>

    <div className={ `${location.pathname === "/product" ? `gr-${grid}`  : "col-3" }`}>
     <Link to={`${
      location.pathname === "/"
      ? "product/:id"
      : location.pathname === "/product/:id"
      ? ":product/1"
      : ":id"}`}
      className="product-card position-relative">
     <div className="wishlist-icon position-absolute">
     <button className='border-0 bg-transparent'>
      <img src={wish} alt="wishlist" />
      </button>
     </div>
    <div className="product-image">
        <img src="../images/laptop.jpg"className='img-fluid' alt="" />
        <img src="../images/speaker.jpg" className='img-fluid' alt="" />
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
            <Link to='/product/:id'>    
            <img src={view} alt="view" />
            </Link>
            <Link to='/compare-products' >    
            <BiGitCompare className='compare'/>
            </Link>
            <Link to='/payment'>    
            <img src={addcart} alt="addcart" />
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