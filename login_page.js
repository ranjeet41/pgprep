import React from "react";
import "../Css/Header.css";
import Group from "../Images/Group.png";
import medwhiz from "../Images/medwhiz.png";
const Header = () => {
    return (
        <>
         <div className="container-fluid">
            <div class="row">
                <div class="col-xl-6 col-md-12 col-sm-12 col-sm-m-3 p-0 m-0 img_Background">
                    <img src={Group} alt="Snow" />
                    <div class="centered"><h2> Welcome to Medwhiz LMS
                    </h2><br />
                        <p>India's leading online learning platform for all medical aspirants. Download the application by clicking on the link below and learn anytime, anywhere.</p></div>
                </div>

                <div class="col-xl-6 col-md-12 col-sm-12 col-sm-m-3">
                    <div class="centered1">
                        <span className="d-flex justify-content-center"><img className="logo" src={medwhiz} alt="logo"></img><h1 className="align-self-center"><b>MEDWHIZ</b></h1></span>
                        <h5 className="text-center text-shadow">Welcome back! Please login to your account</h5>
                        <div className="Log">
                            <form>
                                <div className="Input-cont">
                                    <input type="text" placeholder="Username"/>
                                    <div className="border1"></div>
                                </div>
                                <div className="Input-cont">
                                    <input type="password" placeholder="Password"/>
                                    <div className="border2"></div>
                                </div>
                                <span className="check">
                                    <input type="checkbox" /> <label>Remember me</label>
                                    <a className="float-right text-decoration-none text-dark" href="">Forgot password?</a>
                                </span>
                                <button type="button" class="btn btn-dark btn-lg btn-block mt-5 Login_button">Login</button>
                            </form>
                        </div>
                        <h5 className="Term">Terms and Policy</h5>
                    </div>
                    
                </div>
            </div>

</div>
        </>
    )
}
export default Header;