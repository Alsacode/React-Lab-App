import React from 'react';
import './ProductCart.css';
import { useStateValue} from './StateProvider';

function ProductCart ({id, title,image, price, rating}){
    const [{basket}, dispatch] = useStateValue();

     const removeItem = () => {
        dispatch({ 
            type: 'REMOVE_FROM_CART',
            id: id


        }) 
     }

    return(
        <div className="productcart">
            <img className="productcart_image" src={image} alt="" />
            <div className="productcart_info">
                <p className="productcar_title">{title}</p>
                <p className="productcar_price">€{price}</p> 
        
            <div className="productcar_rating">
              
               {
                   Array(rating)
                   .fill()
                   .map((_) => (
                       <span>*</span>
                   ))
               }

            </div>
             <button onClick={removeItem}> Remove from the Cart</button>
             </div> 
        </div>

        
  
    )
}



export default ProductCart;