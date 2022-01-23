import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css"


const Navbar = () => {
    return(
        <>
            <nav className='navbar  navbar-light bg-light'>
                
                    <a href='#' className='navbar-brand'>LearnIt</a>
               

               <ul className='navbar-nav ml-auto'>
                   <li className='nav-item newline'><a className='nav-link'>Sign Up</a></li>
                   
               </ul>
               
            </nav>
        </>
    )
}

export default Navbar;
