import "./Header.css"
import Logo from "../../icons/logo.svg"

const Header = (props) => {
  

    return(
        <header className="header">   
         <img src={Logo} alt="Asmadgiya Logo" className="logo" />
         <div className="profile"></div>
        </header>
    )
    
}

export default Header;