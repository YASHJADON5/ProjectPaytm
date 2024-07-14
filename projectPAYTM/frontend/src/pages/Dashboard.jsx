import React, { useEffect, useState } from 'react'
import Appbar from '../components/Appbar'
import Balance from '../components/Balance'
import User from '../components/User'
import axios from 'axios'









function Dashboard() {
  const [balance,setBalance] =useState(0)

  const formatNumber = (num) => {
  
    return num.toFixed(2);
};

  


  useEffect(()=>{
    const token= localStorage.getItem("token")
       const response= axios.get("http://localhost:5242/api/v1/account/balance",{
        headers:{
          "authorization":`Bearer ${token}`
        }
       })
       .then((response)=>{
        setBalance(response.data.balance)
       })
  },[balance])

  return (
    <div>
     <Appbar></Appbar>
      
      <div className='m-8'>
        <Balance amount={formatNumber(balance)}></Balance>
        <User></User>

      </div>
       
    </div>
  )
}

export default Dashboard
