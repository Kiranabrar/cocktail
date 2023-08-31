
import React from 'react';
import { Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {
  const items = useSelector((state)=>state.cart);
  return (
    
    <Navbar bg="white"  className='navbarstyle' >
     <h4>Redux Store</h4>
      <div>
       <Link className="navLink" to="/">  
           Home 
       </Link>
       <Link className='navLink' to='/cart'>
           Cart
       </Link>
       <span className="cartCount">Cart items: {items.length}</span>
      </div>
    </Navbar>
   
   
  );
  
}

export default Header;







