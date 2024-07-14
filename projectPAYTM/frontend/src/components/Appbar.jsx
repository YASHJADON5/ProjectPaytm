import React from 'react'
import imagePath from '../pages/zicon.png'
import { useNavigate } from 'react-router-dom'
function Appbar() {
  const navigate= useNavigate()
  return (
    <div className=' shadow flex justify-between border-b  border-gray-300'>
     
                 <div className='grid grid-cols-3 p-4'>

                                     <div className='w-6 col-span-1'>
                                         <img src={imagePath} alt="" />
                                     </div >
                                     <div className='col-span-2 pl-1 font-semibold'>
                                       ZPay
                                    </div>

                 </div>
                  <div className='p-4 grid grid-cols-3'>
                                   <div className='col-span-2'>
                                    <div className='flex justify-end mr-2 pt-0.5'>
                                      <div className=' pr-1 pt-1 font-semibold  '>
                                      Hello
                                      </div>

                                      <div className=' flex justify-center'>
                                        <div className='rounded-full bg-slate-500 text-center h-8 w-8  text-lg'>
                                        U
                                        </div>
                                      </div>
                                      </div>
                                    </div>

                                      <div className='col-span-1  '>
                                      <button onClick={()=>{
                                          
                                          localStorage.removeItem("token");

                                          navigate("/signin")
                                      }} className='bg-gray-700 p-1.5 rounded-lg text-gray-300 font-medium hover:bg-alzari-crimson transition duration-300 ease-in-out py-2'>
                                        Sign Out
                                      </button>


                                      </div>



                  </div>
                


      
    </div>
  )
}

export default Appbar
