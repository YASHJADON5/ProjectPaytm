import React, { useState } from 'react'
import MainHeading from '../components/MainHeading'
import InputBox from '../components/InputBox'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../assets/Base_Url'




function SendMoney() {
  const [searchParams] = useSearchParams()

  const firstname= searchParams.get("firstname");
  const lastname= searchParams.get("lastname");
  const Id= searchParams.get("id");


  const [amount,setAmount] = useState(0)





  


  return (
    <div className='bg-alzari-crimson h-screen w-full flex justify-center items-center shadow'>
                 
                 <div className='shadow w-1/3 bg-slate-100 rounded md p-8 text-center'>
                   <MainHeading label={"Send Money"}></MainHeading>
                 

                 <div className='flex pt-6'>
                                    <div className='rounded-full h-12 w-12 bg-green-500 text-3xl pt-1 '>
                                        <div className='text-gray-300'>
                                          {firstname[0]}
                                          </div> 

                                    </div>
                                    
                                    <div className='pt-2  ml-5 text-2xl font-semibold'>
                                          {firstname} {lastname}   
                                    </div>
                                    
                   
                 </div>
                 <div class="space-y-2">
                    <label
                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        for="amount"
                    >
                        Amount (in Rs)
                    </label>
                    <input
                        onChange={(e) => {
                            setAmount(e.target.value);
                        }}
                        value={amount}
                        type="number"
                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        id="amount"
                        placeholder="Enter amount"
                    />
                    </div>


                  <div className='pt-4 pb-6' >

                  
                 <button onClick={()=>{
                     axios.post(`${Base_Url}/api/v1/account/transfer`,{
                       to:Id,
                      amount
                     },{
                      headers:{
                        "authorization":`Bearer ${localStorage.getItem("token")}`
                      }
                     })
                     .then((response) => {
                      console.log("Transfer successful:", response);
                      setAmount(0);
                    })
                     
                 }} className=" justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white">                
                 Initiate Transfer
                 </button>

                 </div>
              
              
              </div>

      
    </div>
  )
}

export default SendMoney
