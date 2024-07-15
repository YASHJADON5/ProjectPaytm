import React, { useEffect, useState } from 'react'
import Appbar from '../../src/components/Appbar'
import Balance from '../../src/components/Balance'
import User from '../../src/components/User'
import axios from 'axios'
import { Base_Url } from '../../src/assets/Base_Url'









function Dashboard() {
  const [balance,setBalance] =useState(0)
  const [id,setId] =useState(null)

  const formatNumber = (num) => {
  
    return num.toFixed(2);
};

  


  useEffect(()=>{
    const token= localStorage.getItem("token")
       const response= axios.get(`${Base_Url}/api/v1/account/balance`,{
        headers:{
          "authorization":`Bearer ${token}`
        }
       })
       .then((response)=>{
        setBalance(response.data.balance)
        console.log('Balance:', response.data.balance);
        // console.log(balance)
        setId(response.data.Id)
        // console.log(id)


       })
  },[balance])

  return (
    <div>
     <Appbar></Appbar>
      
      <div className='m-8'>
        <Balance amount={formatNumber(balance)} Id={id}></Balance>
        <User></User>

      </div>
       
    </div>
  )
}

export default Dashboard
