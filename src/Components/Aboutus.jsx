import  "./Aboutus.css";
import Rectangle12 from "../Assets/Rectangle12.png";
import Rectangle13 from "../Assets/Rectangle13.png";
import img1 from "../Assets/Ellipse1.svg";
import img2 from "../Assets/Ellipse3.svg";
import img3 from "../Assets/Ellipse4.svg";
export const Aboutus=()=>{
    return (
        <>
        <section id="aboutus">
            <div className="aboutus">
            <div className="aboutslogan">
            <div className="aboutusnote"> 
            <h1>Univerz's Commitment to<br/> Academic Excellence</h1>
            </div>
            <div className="smallnote">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br/>elit. Aenean tristique, tortor nec consequat vulputate.</p>
            </div>
            </div>
            <div className="about-image">
                <div className="rectangle12">
                    <img src={Rectangle12}/>
                </div>
                <div className="rectangle13-sub">
                    <h1 style={{ textAlign: 'center', color: '#0540F2', fontSize: 32, fontFamily: 'Belanosima', fontWeight: '400', wordWrap: 'break-word'}}>50K+</h1>
                    <p style={{textAlign: 'center', color: '#222222', fontSize: 20, fontFamily: 'Montserrat', fontWeight: '400', wordWrap: 'break-word'}}>Students</p>
                    <span className="imaging">
                    <img style={{width: '100%', height: '100%', borderRadius: 9999, marginLeft:'21', marginRight:'21'}} src={img1} />
                    <img style={{width: '100%', height: '100%', borderRadius: 9999, marginLeft:'42'}} src={img2}  />
                    <img style={{width: '100%', height: '100%', borderRadius: 9999,  marginRight:'42'}} src={img3}  />
                    </span>
                </div>
                <div className="rectangle13-main">
                  <div className="rectangle13">
                  <img src={Rectangle13}/>
                  </div>
                  <div className="content-13">  
                    <p>Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit. Aenean tristique, tor nec<br/> consequat vulputate, lorem ar congue. </p>
                  </div>
                   
                   <button className="button-13">Read More</button>
                </div>
                <div className="blocks-info ">
                    <div className="blocks">
                    <h1 className="blocks-heading">35+</h1>
                    <p className="blocks-para">Course</p>
                    </div>
                    <div className="blocks">
                    <h1 className="blocks-heading">56+</h1>
                    <p className="blocks-para">Startups</p>
                    </div>
                    <div className="blocks">
                    <h1 className="blocks-heading">100+</h1>
                    <p className="blocks-para">Languages</p>
                    </div>
                    <div className="blocks">
                    <h1 className="blocks-heading">150+</h1>
                    <p className="blocks-para">Professors</p>
                    </div>
                </div>

            </div>
            </div>
            
        
        </section>
        </>
    );
}