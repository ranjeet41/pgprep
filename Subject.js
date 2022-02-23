
import "../Css/Subject.css";
import { AiOutlineRightCircle } from "react-icons/ai";
import { MdLiveTv } from "react-icons/md";
import { GrAdd } from "react-icons/gr";
import { FaPlay } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";

import Image1 from "../Images/Image1.png";
import Image2 from "../Images/Image2.png";
import Image3 from "../Images/Image3.png";

const Subject = () => {
    
    return (
        <>
            <div className="Main">
                <div class="row ">
                    <div class="col-md card1">
                        <div className="row mt-3">
                            <div className="col-6 text-left"><img src={Image1}  alt="img1"/></div>
                            <div className="col-6">178</div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-6 text-left">Total assignment</div>
                            <div className="col-6"><div className="btn"><AiOutlineRightCircle /></div></div>
                        </div>
                    </div>
                    <div class="col-md card1">
                        <div className="row mt-3">
                            <div className="col-6 text-left"><img src={Image2} alt="img1"/></div>
                            <div className="col-6">178</div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-6 text-left">Total Videos</div>
                            <div className="col-6"><div className="btn"><AiOutlineRightCircle /></div></div>
                        </div>
                    </div>
                    <div class="col-md card1">
                        <div className="row mt-3">
                            <div className="col-6 text-left"><img src={Image3} alt="img1"/></div>
                            <div className="col-6">178</div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-6 text-left">Total Notes</div>
                            <div className="col-6"><div className="btn"><AiOutlineRightCircle /></div></div>
                        </div>
                    </div>
                    <div class="col-md card1">
                        <div className="row mt-3">
                            <div className="col-6 text-left"><img src={Image1} alt="img1"/></div>
                            <div className="col-6">178</div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-8 text-left">Total Presentation</div>
                            <div className="col-4"><div className="btn"><AiOutlineRightCircle /></div></div>
                        </div>
                    </div>
                </div>


                <div class="row pr-4">
                    <div class="col-md-12 card2">
                        <div className="row mt-2">
                            <div className="col-12 text-left"> <MdLiveTv />  Upcomming Live class</div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-xl-8 col-md-6 text-left">Class Name</div>
                            <div className="col-xl-2 col-md-2">Dec 20 2021</div>
                            <div className="col-xl-1 col-md-2">4:50pm</div>
                            <div className="col-xl-1 col-md-2"><button className="btn-sm btn-block btn-info">Start</button></div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 text-left text-secondary"> MBBS 2nd YEAR subject </div>
                        </div>
                    </div>
                </div>

                <div class="row ">
                    <div class="col-md card3 p-2">
                        <div className="row p-1">
                            <div className="col-3 "><div className="icon_back"><GrAdd /></div></div>
                            <div className="col-8">Create assignment</div>
                        </div>
                    </div>
                    <div class="col-md card3 p-2">
                        <div className="row p-1">
                            <div className="col-3"><div className="icon_back"><FaPlay /></div>
                            </div>
                            <div className="col-8">uploade video</div>
                        </div>
                    </div>
                    <div class="col-md card3 p-2">
                        <div className="row p-1 ">
                            <div className="col-3 ">

                                <div className="icon_back"><GrNotes /></div>
                            </div>
                            <div className="col-8">uploade notes</div>
                        </div>
                    </div>

                </div>




                <div class="row ">
                    <div className="col card4">
                        <div className="row m-2">Subject you teach</div>
                        <div className="row">
                            <div className="col-4">
                            <div className="col-6 m-2">dd</div>
                            <div className="col-6">dd</div>
                            </div>
                           
                        </div>
                        
                    </div>
                </div>






                <div class="row ">
                    <div class="col card5 p-0">
                        <div className="card-header bg-primary">cxzczxcz</div>
                        <div className="row mt-3">
                            <div className="col-6"><img src={Image1} alt="img1"/></div>
                            <div className="col-6">178</div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-6">Total assignment</div>
                            <div className="col-6"><AiOutlineRightCircle href="" /></div>
                        </div>
                    </div>
                    <div class="col card5  p-0">
                        <div className="card-header bg-primary">cxzczxcz</div>
                        <div className="row mt-3">
                            <div className="col-6"><img src={Image1} alt="img1"/></div>
                            <div className="col-6">178</div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-6">Total assignment</div>
                            <div className="col-6"><AiOutlineRightCircle href="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Subject;