import React from 'react'

function Balance({amount}) {
  return (
    <div className='text-xl font-bold'>

       Your balance <span className="font-semibold pl-2"> Rs {amount}</span>
      
    </div>
  )
}

export default Balance
