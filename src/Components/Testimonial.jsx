import './Testimonial.css';
import imgperson from "../Assets/Ellipse5.svg";
export const Testimonial = ()=>{
    return(
        <section id="testimonial">
        <div className="FULL_WIDTH">
          <div className="DEFINED_WIDTH">
            <div className="FULL_WIDTH bg_blue">
                <div className="testimonial-des">
                    <h1 className="large-font">What our student say about us</h1>
                    <p className="small-font">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta <br/>voluptatum possimus id deserunt expedita vel saepe,</p>
                    <div className="display_flex flex_direction">
                        <img
                            className="round_image"
                            src={imgperson}
                            alt=""
                        />
                        <h1 className="person_name">Carmen Hedkiwiz</h1>
                        <h3 className="person_name">Global markets engineer</h3>
                    </div>
                    <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptatum possimus id deserunt expedita vel saepe,</p>
                </div>
            </div>
        </div>
    </div>
        </section>
    );
};