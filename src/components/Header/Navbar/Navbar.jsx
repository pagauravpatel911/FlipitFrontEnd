
import "./Navbar.css"
import dashboard from "../../../icons/dashboard.svg"
import uploadedDocs from "../../../icons/computer-folder-open-icon 1.svg"
import userManagement from "../../../icons/user-management.svg"
import arrowDown from "../../../icons/arrow-down-white.svg"


const NavBar = (props) => {
  

    return(
        <div className="navbar">
            <div className="dashboard">
            <img src={dashboard} alt="Vector" className="dashboard_img"></img>
            <span className="dashboard_text">Dashboard</span>
            </div>
            <div className="document_m">
                <img src={uploadedDocs} alt="" className="document_img" />
                <span className="document_text">Document Management</span>
                <img src={arrowDown} alt="" className="down_arrow" />

            </div>
            <div className="user_m">
            <img src={userManagement} alt="" className="user_img" />
            <span className="User_text">User Management</span>
            <img src={arrowDown} alt="" className="down_arrow" />

            </div>
       
        </div>
       
        
    )
    
}

export default NavBar;