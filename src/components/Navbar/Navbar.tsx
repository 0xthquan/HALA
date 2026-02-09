import React from 'react'
import './Navbar.css'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div>
      <nav>
        <ul className='sidebar'>
          <li><a href="#">HALA</a></li>
          <li><a href="#">Game</a></li>
          <li><a href="#">Choose</a></li>
          <li><a href="#">Static</a></li>
          <li><a href="#">Setting</a></li>
          <li><a href="#">User</a></li>
        </ul>
        <ul>
          <li><a href="#">HALA</a></li>
          <li><a href="#">Game</a></li>
          <li><a href="#">Choose</a></li>
          <li><a href="#">Static</a></li>
          <li><a href="#">Setting</a></li>
          <li><a href="#">User</a></li>
          <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar