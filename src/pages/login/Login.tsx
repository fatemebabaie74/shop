import React, {  useState } from "react"
import Button from "../../components/button/Button"
import Container from "../../components/container/Container"
import { useShoppingCartContext } from "../../context/ShoppingCartContext"


function Login() {

const {handleLogin}= useShoppingCartContext()
const [user , setUser]= useState(
  {
    username: "",
    password: "",
  }
)
const changeHadler =(e: React.ChangeEvent<HTMLInputElement>)=>{
const {name , value} = e.target;
setUser({
  ...user ,
  [name] : value
})
}

  return (
    <div>
      <Container>
        <div className="bg-slate-300  rounded p-10">
          <div className="">
             <input className="m-5 flex flex-col rounded" onChange={changeHadler} type="text" placeholder="username" name="username" value={user.username}/>
            <input className="m-5 rounded" onChange={changeHadler} type="password" placeholder="password" name="password" value={user.password}/>
            <Button className="m-5 flex flex-col bg-slate-400  w-44 items-center " onClick={()=>handleLogin(user.username , user.password)}>Login</Button>
          </div>
           
            </div>
      </Container>
    </div>
  )
}

export default Login
