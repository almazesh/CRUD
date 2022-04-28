import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import {GoSignOut} from 'react-icons/go'
import {MdAdminPanelSettings} from 'react-icons/md'
import {RiMenu3Line} from 'react-icons/ri'
import { useState } from 'react'
import { getOut } from '../../API/index';

const Header = () => {
  const [toggle , setToggle] = useState(false)
  const user = localStorage.getItem('accessToken')
  const refreshToken = localStorage.getItem('refreshToken')
  const dropDown = () => setToggle(!toggle)

  const signOut = () => {
    getOut({refreshToken})
    .then(() => {
      localStorage.clear()
      window.location.reload()
    })
  }

  return (
    <nav className={toggle && 'toggle'}>
      <div className='navbar'>
        <div>
          <Link to=''>TODO API</Link>
        </div>

       <div className={toggle ? 'buttons active' : 'buttons'}>
        <Link onClick={() => setToggle(false)} to='/admin' className='btn_success'><MdAdminPanelSettings /> Admin </Link>
        <Link to className='btn_danger' onClick={signOut}><GoSignOut/> Sign out</Link>
       </div>

       {
         user && (
          <div className='burger'>
            <RiMenu3Line onClick={dropDown}/>
          </div>
         )
       }
      </div>
    </nav>
  )
}

export default Header