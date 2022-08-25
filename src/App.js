
import './App.css';
import Loginpage from './components/LoginPage';
import HomePage from './components/HomePage';
import{BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Routes>
     <Route path="/" element={<Loginpage/>} />
     <Route path="/home" element={<HomePage/>} />
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
