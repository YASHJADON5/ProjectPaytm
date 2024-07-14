import React, { useEffect, useState } from 'react'

import UserList from '../components/UsersList'
import axios from 'axios';

function User() {
  const [users, setUsers] =useState([])
  const [filter,setFilter] =useState("");

  useEffect(()=>{
    const token= localStorage.getItem("token")
    
      axios.get("http://localhost:5242/api/v1/users/bulk?filter=" + filter,{
      headers:{
        "authorization":`Bearer ${token}`
      }
    })
    .then((response)=>{
      setUsers(response.data.user)
    })
  
  
  },[filter])

  return (
    <div className='mt-4'>
        <div className='font-bold text-lg pb-2'>
        Users
        </div>

        <div>
            <input onChange={(e)=>{
                  setFilter(e.target.value)
            }} type="text" placeholder='Search Users' className='shadow w-full p-2 rounded-md border  border-gray-300'/>
        </div>
        <div>

          {users.map(users=>{ return <UserList Users={users} /> })}       
        </div>
        
    </div>
  )
}

export default User
