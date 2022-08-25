


const Loginpage = () => {
    const data = {}
    function readValue(property,value) {
        data[property] = value
        console.log(data)
    }

return(
   
    <div className="container">
      <input type="email" className="form-control" placeholder="Email" onChange={(event)=>{
        readValue("email",event.target.value)
      }} />
      <input type="password" className="form-control" placeholder="password" onChange={(event)=>{
        readValue("password",event.target.value)
      }} />
      <button className="btn  btn-danger" onClick={()=>{}}>Login</button>
    </div>
)
}
export default Loginpage;