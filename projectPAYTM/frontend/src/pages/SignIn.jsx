import React, { useState } from 'react'
import MainHeading from '../components/MainHeading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import Example from '../components/Buttton'
import BottomWarning from '../components/BottomWarning'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Base_Url } from '../assets/Base_Url'







function SignIn() {
  const [username, setUsername]=useState("")
  const [password,setPassword] = useState(""); 
  const navigate = useNavigate()
  
  return (
    <div className='bg-alzari-crimson flex justify-center items-center h-screen w-full'>
      

      <div className='bg-zinc-200 w-1/3  rounded-md  '>

      <div className='text-center m-6  rounded-md'>
      
      <MainHeading label={"Sign In"}></MainHeading>
      <SubHeading label={"Enter your credentials to access your account"}></SubHeading>
      <InputBox onChange={(e)=>{
                setUsername(e.target.value)
      }} label={"Email"} placeholder={"example123@gmail.com"}></InputBox>
      <InputBox onChange={(e)=>{
                setPassword(e.target.value)
      }} label={"Password"} placeholder={"1234@*car"}></InputBox>
      

      <button onClick={()=>{
         axios.post(`${Base_Url}/api/v1/users/signin` ,{
          username,
          password
         })
         .then(response => {
          // Handle the successful response here
          
          console.log(response.data);
          localStorage.setItem("token" , response.data.token)
          navigate('/dashboard')
      })
            

      }} type="button" className="mt-7 p-2 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded text-sm px-5 py-2.5 me-2 mb-2">Sign In</button>



      <BottomWarning label={"Don't have an account?"} buttontxt={"Sign Up"} to={"/signup"}></BottomWarning>



          


      </div>

      </div>
     
    </div>
  )
}

export default SignIn
