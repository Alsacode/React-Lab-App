import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import {useStateValue} from './StateProvider'
import ProductCart from './ProductCart';



function Checkout() {
     const [{basket}] = useStateValue();
    
    return (
          <div className="checkout">
              <div className="checkout_left">
                  {   // checking the length if is equal for checkout.
                      basket.length === 0 ? (
                          
                    <div>
                        <h2 className="checkout_title">Your shopping basket is empty.</h2>
                        <p>You have no items in you basket. Buy one.</p>
                   </div>
                      ) : (
                            <div>
                                <h2 className="shoppingbasket_title" >Items in the Shoppig Basket</h2>
                                {  // Using basket with map for adding and bring the items,title,price,ratin,image from Product and with help useStateprovider.
                                    basket.map(item => (
                                       <ProductCart
                                         id={item.id}
                                         title={item.title}
                                         price={item.price}
                                         rating={item.rating}
                                         image={item.image}
                                        

                                         /> 

                                  ))
                                 }
                            </div>

                      )
                  }  



                   
              </div>
              {    // checkout the cart if there not any product it's mean there is not checkout
                  basket.length > 0  &&  (
                    <div className="checkout_right">
                       <Subtotal />
                    </div>
                  )
              }
              
          </div>
    );
}


export default Checkout;