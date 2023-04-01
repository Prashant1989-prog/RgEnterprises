import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faFacebook } from '@fortawesome/free-solid-svg-icons'


export default function Footer() {
  return (
    <section>
    <div className='footer'>
    <table className='Tables'>
    <tr>
      <th className='heads'>Useful Link</th>
      <th className='heads'>Contact Us</th>
      <th className='heads'>Social Media</th>
      </tr>
      <tr>
        <td><h6 className='linkca'><a href='/career'>Career</a></h6></td>
        <td><span class="material-symbols-outlined">
        <p><i class="fa-sharp fa-solid fa-location-dot fa-xl"></i>12/Vanashri, Popat Compound, Appapada, Maharashtra Nagar Kurar Village,Malad East Mumbai, Maharashtra 400097 India</p>
</span></td>
        <td><i class="fa-brands fa-facebook fa-xl"></i> FB</td>
        
      </tr>
      
      <tr>
      <td><h6 className='linkca'><a href='/contact'>Contact US</a></h6></td>
      <td><p><i class="fa-brands fa-whatsapp fa-xl"></i> 8459747041</p></td>
      <td> <i class="fa-brands fa-linkedin fa-xl"></i> linkedin</td>
      </tr>
      <tr>
        <td> </td>
        <td><i class="fa-solid fa-envelope fa-xl"></i> Email </td>
        <td><i class="fa-brands fa-youtube fa-xl"></i> Youtube</td>
      </tr>
    </table>

   
  
    {/* <h3 className='wha'>
    <h2 className='ulink'>Useful Links</h2>
      <h6 className='linkca'><a href=''>Career</a></h6>
      <h6 className='linkca'><a href=''>Contact US</a></h6>
    </h3>
    <div>
      <h2>Contact Us</h2>
      <p>12/Vanashri, Popat Compound, Appapada, Maharashtra Nagar Kurar Village, Malad East Mumbai, Maharashtra 400097 India</p>
    </div> */}
    <div className='copyright'>
      <h5 className='cop'>Copyright 2022 RG enterprises.All Right Reserved</h5>
      <h5 className='design'>Designed by Prashant kalambe</h5>
    </div>
    <a href='https://api.whatsapp.com/send?phone=918459747041&text&type=phone_number&app_absent=0' className='navlink'>
                <img className='whatappimg' src="https://i1.wp.com/tribulant.com/blog/wp-content/uploads/2018/08/whatsapp-button.png?ssl=1"/>

                </a>
                
    {/* <h1 className=''>
        <ul><a href='/career'>Career</a></ul>
        <ul><a href='/contact'>Contact</a></ul>
    </h1> */}
   
{/* <div class="container my-5">
  
  <footer
          class="text-center text-lg-start text-white"
          style={{backgroundColor: '#3e4551'}}
          >
    <div class="container p-4 pb-0">
      <section class="">
        <div class="row">
          <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase">FOOTER CONTENT</h5>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae modi cum ipsam ad, illo possimus laborum ut
              reiciendis obcaecati. Ducimus, quas. Corrupti, pariatur eaque?
              Reiciendis assumenda iusto sapiente inventore animi?
            </p>
          </div>

          <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase">Links</h5>

            <ul class="list-unstyled mb-0">
              <li>
                <a href="#!" class="text-white">Link 1</a>
              </li>
              <li>
                <a href="#!" class="text-white">Link 2</a>
              </li>
              <li>
                <a href="#!" class="text-white">Link 3</a>
              </li>
              <li>
                <a href="#!" class="text-white">Link 4</a>
              </li>
            </ul>
          </div>

          <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase">Links</h5>

            <ul class="list-unstyled mb-0">
              <li>
                <a href="#!" class="text-white">Link 1</a>
              </li>
              <li>
                <a href="#!" class="text-white">Link 2</a>
              </li>
              <li>
                <a href="#!" class="text-white">Link 3</a>
              </li>
              <li>
                <a href="#!" class="text-white">Link 4</a>
              </li>
            </ul>
          </div>

          <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase">Links</h5>

            <ul class="list-unstyled mb-0">
              <li>
                <a href="#!" class="text-white">Link 1</a>
              </li>
              <li>
                <a href="#!" class="text-white">Link 2</a>
              </li>
              <li>
                <a href="#!" class="text-white">Link 3</a>
              </li>
              <li>
                <a href="#!" class="text-white">Link 4</a>
              </li>
            </ul>
          </div>
 

          <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase">Links</h5>

            <ul class="list-unstyled mb-0">
              <li>
                <a href="#!" class="text-white">Link 1</a>
              </li>
              <li>
                <a href="#!" class="text-white">Link 2</a>
              </li>
              <li>
                <a href="#!" class="text-white">Link 3</a>
              </li>
              <li>
                <a href="#!" class="text-white">Link 4</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <hr class="mb-4" />

      <section class="">
        <p class="d-flex justify-content-center align-items-center">
          <span class="me-3">Register for free</span>
          <button type="button" class="btn btn-outline-light btn-rounded">
            Sign up!
          </button>
        </p>
      </section>

      <hr class="mb-4" />

      <section class="mb-4 text-center">
        <a
           class="btn btn-outline-light btn-floating m-1"
           href="#!"
           role="button"
           ><i class="fab fa-facebook-f"></i
          ></a>

        <a
           class="btn btn-outline-light btn-floating m-1"
           href="#!"
           role="button"
           ><i class="fab fa-twitter"></i
          ></a>

        <a
           class="btn btn-outline-light btn-floating m-1"
           href="#!"
           role="button"
           ><i class="fab fa-google"></i
          ></a>

        <a
           class="btn btn-outline-light btn-floating m-1"
           href="#!"
           role="button"
           ><i class="fab fa-instagram"></i
          ></a>

        <a
           class="btn btn-outline-light btn-floating m-1"
           href="#!"
           role="button"
           ><i class="fab fa-linkedin-in"></i
          ></a>

        <a
           class="btn btn-outline-light btn-floating m-1"
           href="#!"
           role="button"
           ><i class="fab fa-github"></i
          ></a>
      </section>
 
    </div>
   

   
    <div
         class="text-center p-3"
         style={{backgroundColor: '#000000'}}
         >
      © 2020 Copyright:
      <a class="text-white" href="https://mdbootstrap.com/"
         >Prashant </a
        >
    </div>
    
  </footer>
</div>*/}
   
        
    </div>
    </section>
  )
}
