

import "./hero.css";
import Rectangle6 from "../Assets/Rectangle6.png";

export const  Hero=()=>{
  return(
    
      <section id="home">
     
        <div className="navbar">
        <a className="menu-option-I">Home </a>
        <a className="menu-option-II">About Us</a>
        <h1 className="title">Univerz University</h1>
        <a className="menu-option-III">Course </a>
        <a className="menu-option-IV">Blog</a>
                
           
                    
        </div>
        <div className="Slogan">

        <h1>Shaping the Future <br/>Through Education  <br/> and Innovation</h1>
        </div >
        <div className="smallslogan">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at massa sit amet <br/>
nisi blandit vehicula. Donec sollicitudin luctus fermentum. </p>
        </div>
        <div className="button">
          <button className="getstarted" >Get Started</button>
          <button className="learnmore">Learn More</button>
        </div>
        
        </section>
    

  );
}
