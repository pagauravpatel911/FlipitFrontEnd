import "./DashBoard.css"
import downArrow  from "../../icons/Vector.svg"
import infoBlue from "../../icons/info-blue.svg"
import hyperLink from "../../icons/copy-hyperlink.svg"
import threeDots from "../../icons/three-dots.svg"

const Dashboard = (props) => {
  

    return(
   
        <table className="dashboard_table">
  <tr className="dashboard_head">
    <th>S.No</th>
    <th><img src={downArrow}/> Document Name</th>
    <th>URL</th>
    <th>Meta Informartion</th>
    <th>File Owner</th>
    <th>Date Added</th>
    <th>Date Modified</th>
    <th>    </th>
  </tr>

  <tr>
    <td>1</td>
    <td>Project Report - May 2022</td>
    <td className="link_info">https://asmadiyatech-my.sharepoint.com/:x:/g/personal/ro <img src={hyperLink}></img></td>
    <td><button className="info_button"><img src={infoBlue}></img>Get Info</button></td>
    <td>Sagar Choudary</td>
    <td>01 June, 2022</td>
    <td>01 June, 2022</td>
    <td><img src={threeDots}/></td>

  
  </tr>

 
</table>
    

            

    )
    
}

export default Dashboard;