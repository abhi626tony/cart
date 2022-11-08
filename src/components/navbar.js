import React from "react";
import "../styles/navbar.css";
import Search from "./Search";

const Navbar = ({ setShow, size }) => {
  return (
    <div>
     
      
    
    
    
    
    
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
          Flipkart
        </span> 
         <button>Login</button>
         <Search/>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <i className="fas fa-cart-plus">Cart</i>
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav></div>
  );
};

export default Navbar;