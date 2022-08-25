import axios from "axios"
import { useRef } from "react"



const Loginpage = () => {
  let form = useRef()
    const data = {}
    function readValue(property,value) {
        data[property] = value
        console.log(data)
    }
    const LoginUser = async() => {

      try {
        const res = await axios.post('http://localhost:4200/users/login',data)
        console.log(res)
      } catch (error) {
        console.log(error);
      }
    //     fetch("http://localhost:4200/users/login",{
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(data)
    //     }).then((res)=>res.json)
    //     .then((data) => {
    //       console.log(data)
    //       form.current.reset()
        
    // }).catch((err) => {console.log(err)}); 
  }

return(
   
    <form className="container" ref={form}>
      <input type="email" className="form-control" placeholder="Email" onChange={(event)=>{
        readValue("email",event.target.value)
      }} />
      <input type="password" className="form-control" placeholder="password" onChange={(event)=>{
        readValue("password",event.target.value)
      }} />
      <button type="button" className="btn btn-danger" onClick={LoginUser}>Login</button>
    </form>
)
}

export default Loginpage;