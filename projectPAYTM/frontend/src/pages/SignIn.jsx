import React from 'react'
import MainHeading from '../components/MainHeading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import Example from '../components/Buttton'
import BottomWarning from '../components/BottomWarning'







function SignIn() {
  return (
    <div className='bg-alzari-crimson flex justify-center items-center h-screen w-full'>
      

      <div className='bg-zinc-200 w-1/3  rounded-md  '>

      <div className='text-center m-6  rounded-md'>
      
      <MainHeading label={"Sign In"}></MainHeading>
      <SubHeading label={"Enter your credentials to access your account"}></SubHeading>
      <InputBox label={"Email"} placeholder={"example123@gmail.com"}></InputBox>
      <InputBox label={"Password"} placeholder={"1234@*car"}></InputBox>
      <Example label={"SIGN IN"}></Example>
      <BottomWarning label={"Don't have an account?"} buttontxt={"Sign Up"} to={"/signup"}></BottomWarning>



          


      </div>

      </div>
     
    </div>
  )
}

export default SignIn
