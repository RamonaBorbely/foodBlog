import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { GiCakeSlice, GiSteak, GiFullPizza } from 'react-icons/gi'
import { TbSalad } from 'react-icons/tb'
import { MdOutlineSoupKitchen } from 'react-icons/md'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { AuthContext } from '../context/authContext'

const Header = () => {
  const { currentUser, logout } = useContext(AuthContext)

  return (
    <div className='header' >
        <Link to='/'>
            <div className='logo'>
                <h1 className='one'>Food</h1>
                <h1 className='two'>Blog</h1>
            </div>
        </Link>

        <div className='search'>
            <label htmlFor='search-recipe'>Search for recipe</label>
            <input 
                type='text'
                placeholder='search...'
            />
            <div className='filters' >
                <div className='dessert'>
                    <GiCakeSlice />
                </div>
               
               <div className='main'>
                    <GiSteak />
               </div>

               <div className='salad'>
                    <TbSalad />
               </div>
              
                <div className='soup'>
                    <MdOutlineSoupKitchen />
                </div>

                <div className='pizza'>
                    <GiFullPizza />
                </div>
             
               
            </div>
        </div>

        <div className='links'>
           <Link to='/post' className='link'> 
                <AiOutlinePlusCircle />
                Post a recipes
            </Link>
        </div>
        <div className='user'>
        <p>Hello,{currentUser?.username}</p>
        {currentUser ? <p onClick={logout}>Logout</p> : <Link to='login'>Login</Link>}

        </div>
      
    </div>
  )
}

export default Header
