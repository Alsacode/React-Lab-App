import { Link } from 'react-router-dom'; 
import React from 'react';
import './Footer.css';


function Footer(){
    return(
            // This is footer area.
        <div className="footer">
             <div className="footer_top">
             <img className="footer_img" src="/images/footerImg.jpg"  alt="Footer-Img" />
            <Link> <p>GO UP</p> </Link> 
             </div> 
             
             <div className="footer_links">
               <div className="footer_linkarea">
                 <Link><span>WORLD Laboratory</span> </Link>
                </div>  
                <div className="footer_linkarea">
               <Link><span>Make things with our Lab</span></Link>  
                </div>    
                <div className="footer_linkarea">
                 <Link><span>Improving quality</span></Link>  
                </div>    
                <div className="footer_linkarea">
                 <Link><span>Recent COVID-19 articles</span></Link>  
                </div>       
            </div> 
           
            <div className="footer_links">
               <div className="footer_linkarea">
                 <Link><span>Editorial Board</span> </Link>
                </div>  
                <div className="footer_linkarea">
               <Link><span>Author Guidelines</span></Link>  
                </div>    
                <div className="footer_linkarea">
                 <Link><span>Recommend to your Library</span></Link>  
                </div>    
                <div className="footer_linkarea">
                 <Link><span>Advertising and Corporate Services</span></Link>  
                </div>    
            </div>      
        </div>
    );

}

export default Footer;