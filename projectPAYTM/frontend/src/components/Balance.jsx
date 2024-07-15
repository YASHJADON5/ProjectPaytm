import React from 'react'
import { useNavigate } from 'react-router-dom'


function Balance({amount,Id}) {
  const navigate =useNavigate()
  return (
    <div className='flex justify-between'>


                <div className='text-xl font-bold'>

                  Your balance <span className="font-semibold pl-2"> Rs {amount}</span>
                  
                </div>

                <div>
               <button onClick={()=>{

                                          navigate(`/addmoney?id=${Id}&amount=${amount}`)
                                      }} className='bg-gray-700 p-1.5 rounded-lg text-gray-300 font-medium hover:bg-alzari-crimson transition duration-300 ease-in-out py-2'>
                                        Add Money
                                      </button>

                </div>


    
     </div>
  )
}

export default Balance
