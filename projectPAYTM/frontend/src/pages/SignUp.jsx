import React, { useState } from 'react'
import MainHeading from '../../src/components/MainHeading'
import SubHeading from '../../src/components/SubHeading'
import InputBox from '../../src/components/InputBox'
import Example from '../../src/components/Buttton'
import BottomWarning from '../../src/components/BottomWarning'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Base_Url } from '../../src/assets/Base_Url'


function SignUp() {
   
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const navigate=  useNavigate()


  return (
    <div className='bg-alzari-crimson flex justify-center items-center h-screen w-full'>
      

      <div className='bg-zinc-200 w-1/3  rounded-md  '>

      <div className='text-center m-6  rounded-md'>
      
      <MainHeading label={"Sign Up"}></MainHeading>
      <SubHeading label={"Enter your details to create an account"}></SubHeading>
      <InputBox  onChange={(e)=>{
              setFirstName(e.target.value)
      }}label={"First Name"} placeholder={"John"}></InputBox>
      <InputBox onChange={(e)=>{
              setLastName(e.target.value)
      }} label={"Last Name"} placeholder={"Barr"}></InputBox>
      <InputBox onChange={(e)=>{
              setUsername(e.target.value)
      }} label={"Email"} placeholder={"example123@gmail.com"}></InputBox>
      <InputBox onChange={(e)=>{
              setPassword(e.target.value)
      }} label={"Password"} placeholder={"1234@*car"}></InputBox>
      <Example   onClick={async ()=>{
        const response=await axios.post(`${Base_Url}/api/v1/users/signup`,{
          username:username,
          password:password,
          firstname:firstName,
          lastname:lastName
        })
        localStorage.setItem("token", response.data.token)
        navigate('/dashboard')
        

      }} ></Example>
      <BottomWarning label={"Already have an account?"} buttontxt={"Sign In"} to={"/signin"}></BottomWarning>


        


      </div>

      </div>
     
    </div>
  )
}

export default SignUp
