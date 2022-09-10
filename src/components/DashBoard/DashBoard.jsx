import "./DashBoard.css";
import { useState } from "react";
import downArrow from "../../icons/Vector.svg";
import infoBlue from "../../icons/info-blue.svg";
import hyperLink from "../../icons/copy-hyperlink.svg";
import threeDots from "../../icons/three-dots.svg";
import {useEffect } from "react";
import axios from "axios";
import Pagination from "../Pagination/Pagination";
import { useRef } from "react";
import EditIcons from "../EditIcons/EditIcons";
import MetaResponce from "../Responce/MetaResponce/MetaResponce";



const Dashboard = (props) => {
   const [docList, setDocList] = useState([]);
  const document = useRef([])
  const [page, setPage] = useState(0);
  const [showMeta,setShowMeta] = useState(false);
  const docData = useRef(null)



  const pageChangeHandler = (data) => {
    setPage(data);
    setDocList(document.current[page])
  
  };
  function partitionInN(arr, n){
    const res = []
    for(let i = 0; i < arr.length; i++){
        const a = []
        let cur = i
        for(let j = cur; j < (cur + n) && j < arr.length; j++){
            a.push(arr[j])
            i = j
        }
        res.push(a)
      }
      return res
  }

  useEffect(() => {
    const fetchData = async() => {
      let url = `http://localhost:4200/document`

      const docs = await axios.get(url)
      const resData = docs.data.data;
      const data = partitionInN(resData,7)
      console.log(data)
      if(document.current.length  === 0){
        document.current = data
      }else{
        document.current.push(data)
      }
    
     setDocList(document.current[page])
     console.log(document.current.length)
  
     
     
    }
    fetchData()
    console.log('fetchData')
  }, [])

  function displayMeta(doc){
    docData.current = doc
    setShowMeta(true)
    console.log('displayMeta')
  }
  function closeMeta(){
    setShowMeta(false)
    console.log('closeMeta')
  }


  // setDocList(document.current[page])

  return (
    <>
      {showMeta && <MetaResponce closeTab={closeMeta} displayData={docData} />}
      <table className="dashboard_table">
        <thead>
          <tr className="dashboard_head">
            <th>S.No</th>
            <th>
              <img src={downArrow} /> Document Name
            </th>
            <th className="dashboard__url">URL</th>
            <th>Meta Informartion</th>
            <th>File Owner</th>
            <th>Date Added</th>
            <th>Date Modified</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {docList?.map((doc, idx) => (
          //  showMeta?<MetaResponce/>:false,
            <tr className="dashboard_data">
              <td>{(page) * 7 + (idx + 1)}</td> 
              <td>{doc.name}</td>
              <td className="link_info">
                {
                  <div className="info-scroll">
                    <p className="link_text">
                    {`http://localhost:${doc.unique_code}`} 
                    </p>
                  </div>
                }
                <img src={hyperLink}></img>
              </td>
              <td>
                <button  onClick={() => displayMeta(doc)} className="info_button">
                  <img src={infoBlue}></img>Get Info
                </button>
              </td>
              <td>{doc.creater}</td>
              <td>{doc.created_at}</td>
              <td>{doc.updated_at}</td>
              <td>
                <img src={threeDots} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
       <Pagination onChangePage={pageChangeHandler} /> 
    </>
  );
};

export default Dashboard;


// (page - 1) * 7 + (idx + 1)