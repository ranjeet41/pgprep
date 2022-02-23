import React from "react";
import logo from "../Images/logo.png";
import "../Css/Topbar.css";

const Topbar = () => {
    return (
        <>
            <header className="navbar shadow">
                <a className="navbar-brand"></a>
                <div className="form-inline mr-5">
                    <div className="mr-sm-2"><img className="profile_img mr-2" src={logo}></img></div>
                    <p className="my-2 my-sm-0">John DoeEducator</p>
                </div>
            </header>
        </>
    )
}
export default Topbar;







