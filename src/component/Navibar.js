import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {Link, NavLink} from 'react-router-dom';
import Navyu from './Navyu';
import RG_logo from "./RG_logo.png"

export default function Navibar() {
  return (
    // <div className='nav-ul'>
    <div>
    
            {/* <a href='/' className='img'>
            <img clasname="logoimg"src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fthumbnails%2F004%2F235%2F305%2Fsmall%2Frg-logo-monogram-emblem-style-with-crown-shape-design-template-free-vector.jpg&tbnid=gPvNyAXU8l27uM&vet=12ahUKEwj93NvG3eL9AhWxX3wKHZAVAPYQMygDegUIARD8AQ..i&imgrefurl=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Frg-logo&docid=tMrAGocFNkrEnM&w=200&h=200&q=rg%20logo&ved=2ahUKEwj93NvG3eL9AhWxX3wKHZAVAPYQMygDegUIARD8AQ"></img>
                <h1>RG enterprises</h1>
            </a>
        
        <div className='navBar'>
        <ul className="nav-ul">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/service">Service</Link></li>
          <li><Link to="/contact">Contact us</Link></li>
        
       
         
        
           
                <a href='https://api.whatsapp.com/send?phone=918459747041&text&type=phone_number&app_absent=0' className='navlink'>
                <img className='whatappimg' src="https://i1.wp.com/tribulant.com/blog/wp-content/uploads/2018/08/whatsapp-button.png?ssl=1"/>

                </a>

             
              
        </ul> *//* </div>*/}
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
  <a href='/'><img src={RG_logo} className="LOGO"></img></a>
    <Link to ="/" class="navbar-brand" href="#">RG enterprises</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
    <div class="position-absolute top-0 end-0">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      
        <li class="nav-item-i">
          <Link to ="/" class="nav-link active" aria-current="page" href="#">Home</Link>
        </li>
       
        <li class="nav-item-i">
          <Link to="/about" class="nav-link">About Us</Link>
        </li>
        <li class="nav-item-i">
          <Link to="/service" class="nav-link">Service</Link>
        </li>
        <li class="nav-item-i">
          <Link to="/career" class="nav-link">Career</Link>
        </li>
        <li class="nav-item-i">
          <Link to="/Contact" class="nav-link">Contact Us</Link>
        </li>
      </ul>
      </div>
     
    </div>
  </div>
</nav>


{/* <header>
  <NavLink to="/">
    <img src="./component/RG_logo.png" alt='logo'  />
  </NavLink>
  <Navyu />
</header> */}

       

       </div> 

  
  )
}
