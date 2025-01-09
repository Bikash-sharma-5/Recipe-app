import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
   
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
    name: "Foods",
    slug: "/Carousel",
    active: authStatus,
},

  {
      name: "Recipe",
      slug: "/anime",
      active: authStatus,
  },
  {
    name: 'Contact',
    slug: "/movie",
    active: authStatus
  }, 
  ]


  return (
   <div className='w-full flex justify-center py-2'>
     <header className=' w-1/2 flex justify-center py-3 shadow backdrop-blur-sm rounded-full'>
     
     <nav className=' flex'>
       <div className='mr-4'>
         <Link to='/'>
           

           </Link>
       </div>
       <ul className='flex ml-auto'>
         {navItems.map((item) => 
         item.active ? (
           <li key={item.name}>
             <button
             onClick={() => navigate(item.slug)}
             className='inline-bock px-6 py-2 bg-transparent text-white hover:text-black  hover:bg-blue-100 duration-200 rounded-full'
             >{item.name}</button>
           </li>
         ) : null
         )}
         {authStatus && (
           <li>
             <LogoutBtn />
           </li>
         )}
       </ul>
     </nav>
   
 </header>
   </div>
  )
}

export default Header