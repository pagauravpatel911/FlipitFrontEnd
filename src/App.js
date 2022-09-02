import './App.css';
import Loginpage from './components/LoginPage/LoginPage';
import Loginpage1 from './components/LoginPage/LoginPage1';
import HomePage from "./components/HomePage/HomePage";
import Header from './components/Header/Header';
import{BrowserRouter,Routes,Route} from "react-router-dom"

import NavBar from './components/Header/Navbar/Navbar';
import Dashboard from './components/DashBoard/DashBoard';
import UploadedDocs from './components/UploadDocs/UploadDocs';

import UploadDocumentForm from './components/UploadDocumentForm/UploadDocumentForm';
import PieChart from './components/PieChart/PieChart';

import GInfoElement from './components/GInfoElement/GInfoElemet';

function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Routes>
     <Route path="/" element={<Loginpage1/>} />
     <Route path="/home" element={<HomePage/>} />
     <Route path="/header" element={<Header/>} />

     <Route path="/navbar" element={<NavBar/>}  />
     <Route path="/dashboard" element={<Dashboard/>}   />
     <Route path="/uploadDocs" element={<UploadedDocs/>}   />

     <Route path="/uploadDoc" element={<UploadDocumentForm/>}/>
     <Route path="/allDocs" element={<Loginpage/>} />
     <Route path="/pie" element={<PieChart/>} />
     <Route path="/Info_element" element={<GInfoElement/>} />

   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
