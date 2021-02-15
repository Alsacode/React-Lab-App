import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './Header.css';
import { Link } from "react-router-dom";
import ShoppingBasketIcon  from '@material-ui/icons/ShoppingBasket';
import { useStateValue} from './StateProvider';
import { auth } from './firebase';

function Header() {
    // This is layer data about the item
    const [{basket, loggedinuser}, dispatch] = useStateValue();

   // console.log("My basket",basket);
   const logoutUser = () => {
       if(loggedinuser) {
           auth.signOut();
       }
   }

    return(

        //Nav and logo going to Search.
        <nav className="header">
           <img className="header_logo" src="/images/logoVaccine.png"  alt="Logo" />
           <div className="header_search">
               <input type="text" className="header_searchInput" />
               <Link to="/Search" >
               <SearchIcon className="header_searchIcon" />
               </Link>
           </div>
           <div className="header_nav">
           {/* This is first link */}
           <Link to={!loggedinuser && "/login"} className="header_link">
          <div onClick={logoutUser} className="header_option">
               <span className="header_optionLineOne">Hey, {loggedinuser?.email}</span>
               <span className="header_optionLineTwo">{loggedinuser ? 'Signout' : 'Sign In'}</span>
            </div>
          </Link>
             {/* This is second link */}
             <Link to="/" className="header_link">
          <div className="header_option">
               <span className="header_optionLineOne">Returns</span>
               <span className="header_optionLineTwo">Orders</span>
            </div>
          </Link>
           
          </div>
           {/* Basket icon with number */}
          <Link to="/checkout" className="header_link">
              <div className="header_optionBasket">
                  <ShoppingBasketIcon />
                  {/* Number of items in the basket */}
                  <span className="header_optionLionTwo header_productCount">{basket?.length}</span>

              </div>
          </Link>
        </nav>
    )
}

export default Header;