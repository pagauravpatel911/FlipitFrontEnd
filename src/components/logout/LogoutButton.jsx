import logout from "../../icons/logout-icon.svg"
import "./logoutButton.css"

const LogoutButton = (props) => {
    return (
        <button className="logout-button"><span>Logout</span> <span>{<img src={logout} alt="Asmadgiya Logo" className="logout-icon" />}</span></button>
    )
}

export default LogoutButton;