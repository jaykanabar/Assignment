import "./Admission.css"
import Admissionimg from "../Assets/Admission.png";
export const Admission=()=>{
    return(
        <section id="admission">
    <div className="FULL_WIDTH">
        <div className="DEFINED_WIDTH">
            <div className="FULL_WIDTH">
                <h1 className="large-fonts">Student admission process and <br/>Assistance from us</h1>
                <p className="small-fonts">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta<br/> voluptatum possimus id deserunt expedita vel saepe,</p>
                    <div className="Admission-images">
                        <div className="Admission-img">
                            <img  src={Admissionimg}/>
                        </div>
                        <div className="display_flex">
                            <div className="check-pointflex">
                            <img
                                className="check_point_list"
                                src="https://imgs.search.brave.com/QZlvR8BK52fHoRLfvgbTlHjzvxY6gHg1NU2wmvthEKY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4w/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvc29jaWFsLW1l/c3NhZ2luZy11aS1j/b2xvci1zaGFwZXMt/My8zLzM2LTUxMi5w/bmc"
                                alt=""
                            />
                            <p className="list_font">Complete everything as ordered</p>
                        </div>
                        <div className="check-pointflex">
                            <img
                                className="check_point_list"
                                src="https://imgs.search.brave.com/QZlvR8BK52fHoRLfvgbTlHjzvxY6gHg1NU2wmvthEKY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4w/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvc29jaWFsLW1l/c3NhZ2luZy11aS1j/b2xvci1zaGFwZXMt/My8zLzM2LTUxMi5w/bmc"
                                alt=""
                            />
                            <p className="list_font">Provide your last exam result</p>
                        </div>
                        <div className="check-pointflex">
                            <img
                                className="check_point_list"
                                src="https://imgs.search.brave.com/QZlvR8BK52fHoRLfvgbTlHjzvxY6gHg1NU2wmvthEKY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4w/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvc29jaWFsLW1l/c3NhZ2luZy11aS1j/b2xvci1zaGFwZXMt/My8zLzM2LTUxMi5w/bmc"
                                
                            />
                            <p className="list_font">Choose your desired program</p>
                        </div>
                        <div className="check-pointflex">
                            <img
                                className="check_point_list"
                                src="https://imgs.search.brave.com/QZlvR8BK52fHoRLfvgbTlHjzvxY6gHg1NU2wmvthEKY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4w/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvc29jaWFsLW1l/c3NhZ2luZy11aS1j/b2xvci1zaGFwZXMt/My8zLzM2LTUxMi5w/bmc"
                                alt=""
                            />
                            <p className="list_font">Get contact with the instructor</p>
                        </div>
                        <div className="check-pointflex">
                            <img
                                className="check_point_list"
                                src="https://imgs.search.brave.com/QZlvR8BK52fHoRLfvgbTlHjzvxY6gHg1NU2wmvthEKY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4w/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvc29jaWFsLW1l/c3NhZ2luZy11aS1j/b2xvci1zaGFwZXMt/My8zLzM2LTUxMi5w/bmc"
                                alt=""
                            />
                            <p className="list_font">Finally get started your program</p>
                        </div>
                        <button className="button_div">See all our admissions</button>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</section>



    )
};