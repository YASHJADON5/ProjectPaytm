import React from 'react'
import { Link } from 'react-router-dom'

function BottomWarning({label,buttontxt,to}) {
  return (

    <div className='pt-3'>
        <div>
        {label}
        </div>
        <Link className='underline text-blue-700' to={to}>
         {buttontxt}
        </Link>
    </div>
  )
}

export default BottomWarning
