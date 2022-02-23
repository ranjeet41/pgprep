//import useState hook to create menu collapse state
import React, { useState } from "react";
import smalllogo from "../../Images/smalllogo.png";
import { Link } from 'react-router-dom';

//import react pro sidebar components
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
   
    SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaRegHeart } from "react-icons/fa";
import { FiBookOpen } from "react-icons/fi";
import { FiHome} from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { SiLivechat } from "react-icons/si";
import { CgMenuRight } from "react-icons/cg";
import { VscChromeClose } from "react-icons/vsc"




//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./header.css"


const Header = (props) => {
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false);
    
    
    //create a custom function that will change menucollapse state from false to true and true to false
    const menuIconClick = (props) => {
        //condition checking to change state from true to false and vice versa
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
        
       
    };
    return (
        <>
       
            <div id="header" >
                {/* collapsed props to change menu size using menucollapse state */}
                <ProSidebar collapsed={menuCollapse}>
                    <SidebarHeader>
                        <div className="logotext">
                            {/* small and big change using menucollapse state */}
                            <p>{menuCollapse ? <img src={smalllogo} alt="img1"/> : <span ><img src={smalllogo} alt="img1"/>MEDWHIZ</span>}</p>
                        </div>
                        <div className="closemenu" onClick={menuIconClick}>
                           
                            {menuCollapse ? (
                              
                                <VscChromeClose />
                            ) : (
                                <CgMenuRight />
                            )}
                        </div>
                    </SidebarHeader>
                    <SidebarContent>
                        <Menu iconShape="square">
                            <MenuItem className="hover"   icon={<FiHome />}>Subject
                                <Link to="/"/>
                            </MenuItem>
                            <MenuItem className="hover "  icon={<FiBookOpen />}>Lecture Files
                                <Link to="Lecture_file"/>
                            </MenuItem>
                            <MenuItem className="hover"  icon={<FaRegHeart />}>Live class
                                <Link to="Live"  />
                            </MenuItem>
                            <MenuItem className="hover" icon={<RiPencilLine />}>Attendance
                                <Link to="Attendance"   />
                            </MenuItem>
                            <MenuItem className="hover" icon={<SiLivechat />}>Groups
                                <Link to="Groups" />
                            </MenuItem>
                            <MenuItem className="hover" icon={<SiLivechat />}>Announcement
                                <Link to="Announcement"/>
                            </MenuItem>
                            <MenuItem className="hover" icon={<SiLivechat />}>Forum
                                <Link to="Forum" exact  />
                            </MenuItem>

                            <MenuItem className="hover"  icon={<SiLivechat />}>Log Book
                                <Link to="Log_Book" exact  />
                            </MenuItem>
                            <MenuItem className="hover" icon={<SiLivechat />}>Assessment
                                <Link to="Assessment" exact  />
                            </MenuItem>
                        </Menu>
                    </SidebarContent>
                   
                </ProSidebar>


            </div>
           

        </>
    );
};

export default Header;