import "./EditIcons.css";
import Edit from "../../icons/edit.svg"
import Download from "../../icons/download.svg"
import Share from "../../icons/share.svg"
import Delete from "../../icons/delete.svg"


const EditIcons = (props) => {

    return(
        <div className="parentContainer">
        <div className="triangle">

        </div>
        <div className="EditIcons_div">
            <div className="E_icons">
                <img src={Edit} alt="" srcset="" />
            </div>
            <div className="E_icons">
            <img src={Download} alt="" srcset="" />
            </div>
            <div className="E_icons">
            <img src={Share} alt="" srcset="" />
            </div>
            <div className="E_icons delete_icons">
            <img src={Delete} alt="" srcset="" />
            </div>
          
        </div>
        </div>
    )
}


export default EditIcons;