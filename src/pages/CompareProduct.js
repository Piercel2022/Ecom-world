
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import Color from '../components/Color'
import Container from './Container'

const CompareProduct = () => {
  return (
    <>
    <Meta title={"Compare products"} />
    <Header />
    <BreadCrumb title = "Compare products" />
      <Container class1="compare-product-wrapper home-wrapper-2 py-5">
            <div className="row">
                <div className="col-3">
                    <div className="compare-product-card position-relative">
                    <button type="button" class="btn-close" aria-label="Close"></button>
                        <div className="product-card-image">
                            <img src="images/tab.jpg" className='img-fluid' alt="tablet" />
                        </div>
                        <div className="compare-product-card">
                            <h5 className="title">
                              Honor T1 7.0.3 GB Ram 8  7-inch with Wi-Fi + 3G Tablet
                            </h5>
                            <h6 className="price mb-3 mt-3">$ 100</h6>
                            <div>
                              <div className='product-detail'>
                                <h5>Brand: </h5>
                                <p>Ecom world</p>
                              </div>
                              <div className='product-detail'>
                                <h5>Type: </h5>
                                <p>Tablet </p>
                              </div>
                              <div className='product-detail'>
                                <h5>SKU: </h5>
                                <p> TAB2670</p>
                              </div>
                              <div className='product-detail'>
                                <h5>Availability: </h5>
                                <p>In Stock </p>
                              </div>
                              <div className='product-detail'>
                                <h5>Color: </h5>
                                <Color />
                              </div>
                              <div className='product-detail'>
                                <h5>Size: </h5>
                                <div className='d-flex gap-10'> 
                                 <p>L</p>
                                 <p>M</p>
                                 </div>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="compare-product-card position-relative">
                    <button type="button" class="btn-close" aria-label="Close"></button>
                        <div className="product-card-image">
                            <img src="images/sony.jpg" className='img-fluid' alt="sound" />
                        </div>
                        <div className="compare-product-card">
                            <h5 className="title">
                            Sony Ultraportable speaker, Bluetooth, One Size
                            </h5>
                            <h6 className="price mb-3 mt-3">$ 150</h6>
                            <div>
                              <div className='product-detail'>
                                <h5>Brand: </h5>
                                <p>Sony</p>
                              </div>
                              <div className='product-detail'>
                                <h5>Type: </h5>
                                <p>Home sound </p>
                              </div>
                              <div className='product-detail'>
                                <h5>SKU: </h5>
                                <p> HSO2670</p>
                              </div>
                              <div className='product-detail'>
                                <h5>Availability: </h5>
                                <p>In Stock </p>
                              </div>
                              <div className='product-detail'>
                                <h5>Color: </h5>
                                <Color />
                              </div>
                              <div className='product-detail'>
                                <h5>Size: </h5>
                                <div className='d-flex gap-10'> 
                                 <p>L</p>
                                 <p>M</p>
                                 </div>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="compare-product-card position-relative">
                    <button type="button" class="btn-close" aria-label="Close"></button>
                        <div className="product-card-image">
                            <img src="images/tab.jpg" className='img-fluid' alt="tablet" />
                        </div>
                        <div className="compare-product-card">
                            <h5 className="title">
                              Honor T1 7.0.3 GB Ram 8  7-inch with Wi-Fi + 3G Tablet
                            </h5>
                            <h6 className="price mb-3 mt-3">$ 100</h6>
                            <div>
                              <div className='product-detail'>
                                <h5>Brand: </h5>
                                <p>Ecom world</p>
                              </div>
                              <div className='product-detail'>
                                <h5>Type: </h5>
                                <p>Tablet </p>
                              </div>
                              <div className='product-detail'>
                                <h5>SKU: </h5>
                                <p> TAB2670</p>
                              </div>
                              <div className='product-detail'>
                                <h5>Availability: </h5>
                                <p>In Stock </p>
                              </div>
                              <div className='product-detail'>
                                <h5>Color: </h5>
                                <Color />
                              </div>
                              <div className='product-detail'>
                                <h5>Size: </h5>
                                <div className='d-flex gap-10'> 
                                 <p>L</p>
                                 <p>M</p>
                                 </div>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="compare-product-card position-relative">
                    <button type="button" class="btn-close" aria-label="Close"></button>
                        <div className="product-card-image">
                            <img src="images/watch.jpg" className='img-fluid' alt="watch" />
                        </div>
                        <div className="compare-product-card">
                            <h5 className="title">
                              Apple T1 7.0.3 GB Ram 8  7-inch with Wi-Fi + 3G  Watch
                            </h5>
                            <h6 className="price mb-3 mt-3">$ 100</h6>
                            <div>
                              <div className='product-detail'>
                                <h5>Brand: </h5>
                                <p>Apple</p>
                              </div>
                              <div className='product-detail'>
                                <h5>Type: </h5>
                                <p>Watch </p>
                              </div>
                              <div className='product-detail'>
                                <h5>SKU: </h5>
                                <p> WAT2670</p>
                              </div>
                              <div className='product-detail'>
                                <h5>Availability: </h5>
                                <p>In Stock </p>
                              </div>
                              <div className='product-detail'>
                                <h5>Color: </h5>
                                <Color />
                              </div>
                              <div className='product-detail'>
                                <h5>Size: </h5>
                                <div className='d-flex gap-10'> 
                                 <p>L</p>
                                 <p>M</p>
                                 </div>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </Container>
    <Footer />
    </>
  )
}

export default CompareProduct;