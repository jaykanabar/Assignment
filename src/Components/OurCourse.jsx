import './OurCourse.css';
import setting from "../Assets/Icon.svg";
import Psychology from "../Assets/Icon_1.svg";
import FineArts from "../Assets/Icon_2.svg";
import Language from "../Assets/Icon_3.svg";
import Accountancy from "../Assets/Icon_4.svg";
import science from "../Assets/Icon_5.svg";
export const OurCourse=()=>{
    return (
        <section id="course">
            
                
        <div class="FULL_WIDTH">
        <div class="DEFINED_WIDTH">
            <div class="FULL_WIDTH">
                <h1 className='courseslog'>Explore our academic offerings<br/> Chart your path to success</h1>
                <p className='coursesmallslog'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta <br/> voluptatum possimus id deserunt expedita vel saepe,</p>
                <div className="flex_dis">
                    <div className="blue_box"><img className='img-course' src={setting}/>
                    <div>
                        <h1 className='title-course'>Engineering</h1>
                    <p className='des-course'>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.</p>
                    </div></div>
                    <div className="blue_box"><img className='img-course' src={Psychology}/>
                    <div>
                        <h1 className='title-course'>Psychology</h1>
                    <p className='des-course'>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.</p>
                    </div></div>
                    <div className="blue_box"><img className='img-course' src={FineArts}/>
                    <div>
                        <h1 className='title-course'>Fine Arts</h1>
                    <p className='des-course'>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.</p>
                    </div></div>
                </div>
                <div className="flex_dis">
                    <div className="blue_box"><img className='img-course' src={Language}/>
                    <div>
                        <h1 className='title-course'>Language</h1>
                    <p className='des-course'>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.</p>
                    </div></div>
                    <div className="blue_box"><img className='img-course' src={Accountancy}/>\<div>
                        <h1 className='title-course'>Accountancy</h1>
                    <p className='des-course'>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.</p>
                    </div></div>
                    <div className="blue_box"><img className='img-course' src={science}/>
                    <div>
                        <h1 className='title-course'>Science</h1>
                    <p className='des-course'>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.</p>
                    </div></div>
                </div>
                <button className="button_div">View All</button>
            </div>
        </div>
    </div>

        </section>

    );

}