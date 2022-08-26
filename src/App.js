
import './App.css';
import Loginpage from './components/LoginPage/LoginPage';
import HomePage from "./components/HomePage/HomePage";
import Header from './components/Header/Header';
import{BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Routes>
     <Route path="/" element={<Loginpage/>} />
     <Route path="/home" element={<HomePage/>} />
     <Route path="/header" element={<Header/>} />
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
