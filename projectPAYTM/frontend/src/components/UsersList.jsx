import React, { useState } from 'react'
import { SendMoneyButton } from './SendMoneyButton'


function UsersList({Users}) {
   



  return (
    <div className='flex justify-between pt-4'>
                    
                    <div className='flex justify-between'>
                                <div className='rounded-full bg-gray-400 h-8 w-8 text-center  text-xl font-medium'>
                                  {Users.firstname[0]}
                                </div>

                                <div className='pt-1 pl-1'>
                                  {Users.firstname} {Users.lastname} 

                                </div>

                         
                    </div>

                    <div>
                      
                    <SendMoneyButton users={Users}></SendMoneyButton>
                    </div>


                </div>

  )
}

export default UsersList
