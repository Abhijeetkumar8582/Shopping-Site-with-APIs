import React,{useState} from 'react';
import GetProduct from './GetProduct';
import {Link} from 'react-router-dom';




function NavBar(props) {
   
  return (
    <div>
        
        <nav className="navbar fixed-top navbar-expand-lg bg-primary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/Home">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page"  to="/electronics">Electronics</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  to="/jewelery" >Jewelery</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/men's clothing">Men's clothing</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/women's clothing">Women's clothing</Link>
        </li>
      </ul>
      {/* <Link to="/Cart" >View Cart</Link> */}
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar
