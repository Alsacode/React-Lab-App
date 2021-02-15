
import { Link } from 'react-router-dom';
import React from 'react';
import './NavLink.css';

function NavLink() {
    return(
        
     <div className="navlinks">
        <div className="navlinks_out" >
            <div className="navlinks_inner">
            <Link>Subject</Link> 
            <Link>More Content</Link> 
            <Link>Submit</Link> 
            <Link>Purchase</Link> 
            <Link>Advertise</Link> 
            <Link>About</Link> 
            <Link>Open Access</Link> 
            <Link>Contact Us</Link> 
            </div>
            
        </div>
     </div>
  
    )
}

export default NavLink;