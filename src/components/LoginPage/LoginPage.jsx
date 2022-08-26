import axios from "axios"
import { useRef } from "react"
import Button from "../button/Button"
import "./LoginPage.css"


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

  }

return(
   
    <form className="container" ref={form}>
      <input type="email" className="form-control" placeholder="Email" onChange={(event)=>{
        readValue("email",event.target.value)
      }} />
      <input type="password" className="form-control" placeholder="password" onChange={(event)=>{
        readValue("password",event.target.value)
      }} />
     <Button  text = "click" onSubmitForm={LoginUser}></Button>
    </form>
)
}

export default Loginpage;