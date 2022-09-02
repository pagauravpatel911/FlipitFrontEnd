
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
            <div className="document_m dropdown" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src={uploadedDocs} alt="" className="document_img" />
                <span className="document_text">Document Management</span>
                <img src={arrowDown} alt="" className="dropdown-toggle"  id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"/>
                <div class="dropdown-menu dropdown_external" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Add Documents</a>
                    <a class="dropdown-item" href="#">All Documents</a>
                   
                </div>

            </div>
            {/* <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="#">Action</a>
    <a className="dropdown-item" href="#">Another action</a>
    <a className="dropdown-item" href="#">Something else here</a>
  </div>
</div> */}
{/* <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div> */}
            <div className="user_m">
            <img src={userManagement} alt="" className="user_img" />
            <span className="User_text">User Management</span>
            <img src={arrowDown} alt="" className="down_arrow" />

            </div>
       
        </div>
       
        
    )
    
}

export default NavBar;