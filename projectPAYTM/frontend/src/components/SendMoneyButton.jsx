
import { useNavigate } from "react-router-dom"
 

export function SendMoneyButton({users}) {
    const Navigate= useNavigate()
    // console.log(users._id);
    return <button  onClick={()=>{
               Navigate(`/send?id=${users._id}&firstname=${users.firstname}&lastname=${users.lastname}`)
    }} type="button" className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Send</button>
}
  




