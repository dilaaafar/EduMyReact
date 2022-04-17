/* import { Link } from 'react-router-dom' */
import { useLogout } from '../hooks/useLogout'

//syles
import './Navbar.css'


import React from 'react'

export default function Navbar() {
  const { logout, isPending } = useLogout()

  return (
    <div className='navbar'>
      {!isPending && <button className='btn' onClick={logout}>Logout</button>}
      {isPending && <button className='btn' disabled>Logging out...</button>} 
    </div>
  )
}
