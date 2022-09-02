import "./Header.css"
import Logo from "../../icons/logo.svg"
import logout from "../../icons/logout-icon.svg"
import NavBar from "./Navbar/Navbar"
import UploadedDocs from "../Upload/UploadDocs/UploadDocs"
import Dashboard from "../DashBoard/DashBoard"

const Header = (props) => {
  

    return(
     <>
        <header className="header">  
        <div className="left_div">
         <img src={Logo} alt="Asmadgiya Logo" className="logo" />
      </div> 

      <div className="right_div">
        <div className="subright_left">
        <div>
            <img src="" alt="" srcset="" className="profile" />
        </div>
        <div className="title_container">
         <h3 className="title">Gaurav@Asmadgiya.com</h3>
         <p className="admin">SuperAdmin</p>
        </div>
        </div>
        <div className="buttons">
           <h3 className="buttons_text">Logout</h3>
           <img src={logout} className="logout_icons"></img>
           </div>

      </div>
       
    
        </header>
        <NavBar/>
          <UploadedDocs/>
          <Dashboard/>
        </>
         

            

    )
    
}

export default Header;