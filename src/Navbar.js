import React from 'react'
import './Navbar.css';

const Navbar = () =>{
    return(
        <div className='bar'>
          <h1>Logo</h1>
          <nav>
            <ul>
                <li><a href="/index.html" className='active'>Home</a></li>
                <li><a href="#">About</a></li>
                <li className='contact'><a href="#">Contact us</a></li>
            </ul>
          </nav>
        <button type="submit" className='Login'>Login</button>
        </div>
    )
}

export default Navbar;