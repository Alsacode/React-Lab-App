import Product from './Product.js';
import './Home.css';

function Home() {
    return(
        <div className="home">
            <img className="home_img" src="/images/labMain.png"  alt="vaccine" />
            
            <div className="home_row">
              <Product
              id="1213930"
              title="The Covid-19 Vaccine"
              price={11}
              rating={4}
              image="/images/PvaccineImg.png" alt=""
               />
                <Product
              id="12133225"
              title="The Covid-19 Vaccine"
              price={16}
              rating={5}
              image="/images/Vaccine2.jpg" alt=""
               />  
              
                <Product
              id="12131644"
              title="The Covid-19 Vaccine"
              price={21}
              rating={6}
              image="/images/Vaccine3.png" alt=""
               />    
                <Product
              id="12133443"
              title="Everyone need this!"
              price={0.00}
              rating={5}
              image="/images/world.jpg" alt=""
               />   
              
            </div>

            <div className="home_row">
            <Product
              id="12131654"
              title="Tools of Labrador"
              price={18}
              rating={3}
              image="/images/resLab.png" alt=""
               />
              <Product
              id="121365"
              title="Tools of Labrador"
              price={7.99}
              rating={3}
              image="/images/lab.jpg" alt=""
               />
                <Product
              id="12131843"
              title="Chemistry Tools"
              price={4.99}
              rating={6}
              image="/images/kemiaLab.png" alt=""
               />  
                <Product
              id="121398"
              title="Biotechnology Tomato"
              price={0.99}
              rating={3}
              image="/images/tomatoBio.jpg" alt=""
               />    
                 <Product
              id="121316"
              title="Hygiene Stuff"
              price={1.99}
              rating={5}
              image="/images/covid-mask.png" alt=""
               />    
                
               
            </div>
            <div className="home_row">
              <Product
              id="121317"
              title="Tools of Labrador"
              price={7.99}
              rating={3}
              image="/images/1.png" alt=""
               />
                <Product
              id="121318"
              title="Bird of biotech"
              price={4.99}
              rating={6}
              image="/images/2.png" alt=""
               />  
                <Product
              id="121366"
              title="Biotechnology Monkey"
              price={0.99}
              rating={3}
              image="/images/3.png" alt=""
               />    
                 <Product
              id="12138986"
              title="Biotech Mose"
              price={1.99}
              rating={5}
              image="/images/4.png" alt=""
               />   

                 <Product
              id="1213432"
              title="Biotechnology Bird"
              price={0.99}
              rating={3}
              image="/images/5.png" alt=""
               />    
                 <Product
              id="121313987"
              title="Biotech Pupu"
              price={1.99}
              rating={5}
              image="/images/6.png" alt=""
               />    
            </div>
            <div className="home_row">
                <Product
              id="121398"
              title="The Covid-19 Vaccine"
              price={21}
              rating={6}
              image="/images/Vaccine3.png" alt=""
               />    
                <Product
              id="121876"
              title="Everyone need this!"
              price={0.00}
              rating={10}
              image="/images/world.jpg" alt=""
               />   
               </div>
        </div>
    );
}

export default Home;