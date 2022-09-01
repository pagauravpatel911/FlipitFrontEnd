
import './App.css';
import Loginpage from './components/LoginPage/LoginPage';
import HomePage from "./components/HomePage/HomePage";
import Header from './components/Header/Header';
import{BrowserRouter,Routes,Route} from "react-router-dom"
import NavBar from './components/Header/Navbar/Navbar';
import Dashboard from './components/DashBoard/DashBoard';
import UploadedDocs from './components/UploadDocs/UploadDocs';

function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Routes>
     <Route path="/" element={<Loginpage/>} />
     <Route path="/home" element={<HomePage/>} />
     <Route path="/header" element={<Header/>} />
     <Route path="/navbar" element={<NavBar/>}  />
     <Route path="/dashboard" element={<Dashboard/>}   />
     <Route path="/uploadDocs" element={<UploadedDocs/>}   />
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
