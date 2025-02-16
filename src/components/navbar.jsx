import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";
import { LuHeart } from "react-icons/lu";
import { LuShoppingCart } from "react-icons/lu";
import avatarimg from '../assets/avatar.png';
import { useSelector } from 'react-redux';
import { UseAuth } from '../context/AuthContext';



export const Navbar = () => {
const [todropdown,setTodropdown]=useState(false)
const { currentUser, logout}=UseAuth();

const cartItems=useSelector((state)=>state.cart.cartItem);

const handleLogout=()=>{
    logout();
}
const nevigation=[
    {name: "admin", href:"/admin"},
    {name: "Dashboard", href:"/user-dashboard"},
    {name: "Orders", href:"/orders"},
    {name: "Cart Page", href:"/cart"},
    {name: "Check Out", href:"/checkout"},
]

  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
        <div className="flex items-center md:gap-16 gap-4">
                    <Link to="/">
                        <FaBars className="size-6" />
                    </Link>

                    {/* search input */}
                    <div className="relative sm:w-72 w-40 space-x-2">

                        <IoSearchOutline className="absolute inline-block left-3 inset-y-2" />

                        <input type="text" placeholder="Search here" className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none" />
                    </div>
        </div>

        <div  className='relative flex items-center md:space-x-3 space-x-2'>
            {
                currentUser? <><button onClick={()=>setTodropdown(!todropdown)}>
                          <img src={avatarimg} alt="" className={`size-7 rounded-full ${currentUser ? 'ring-2 ring-blue-500' : ''}`}/>
                </button>
                {
                    todropdown && (<div className="absolute top-6 right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                        <ul className='py-2'>
                            {nevigation.map((item)=>(
                                <li>
                                    <Link to={item.href} onClick={()=>setTodropdown(!todropdown)} className="block px-4 py-2 text-sm hover:bg-gray-100">{item.name}</Link>
                                </li>
                            ))}
                            <li>
                                <button onClick={handleLogout} 
                                 className="block px-4 py-2 text-sm hover:bg-gray-100">
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </div>)
                }
                
                 </>  : <Link to='./login'> <FaRegUser className='size-6'/></Link>
            }
               {/* <FaRegUser className='size-6'/> */}
                <button className="hidden sm:block">
                <LuHeart  className='size-6'/>
                </button>
             
                <Link to="/cart"  className='bg-primary sm:px-6 py-2 flex items-center rounded-md'>
                {
                    cartItems.length > 0 ? <span className="mr-2 text-sm">{cartItems.length}</span> : <span className="mr-2 text-sm">0</span> 
                }
               <LuShoppingCart  className=' '/>
               </Link>
        </div> 
        </nav>
    </header>
  )
}

// export default Navbar;