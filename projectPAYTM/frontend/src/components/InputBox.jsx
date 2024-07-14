import React from 'react'

function InputBox({label,placeholder,onChange}) {
  return (
    <div className=''>
         <div className='text-left pb-1 font-medium py-2'>
            {label}
         </div>
        <input onChange={onChange} type="text" placeholder={placeholder} className='w-full p-2 rounded border-slate-200'/>
      
    </div>
  )
}

export default InputBox
