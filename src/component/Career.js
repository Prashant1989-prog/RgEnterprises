import React, { useState } from 'react'
import "./Careerstyle.css"
import "react-alice-carousel/lib/alice-carousel.css";
import RG_logo from "./RG_logo.png"
import image2 from "./download.jpg"
import image3 from "./download (1).jpg"
import AliceCarousel from 'react-alice-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Career = () => {
  const [names,setName]=useState('');
  const [email,setEmail]=useState('');
  const [pno,setPno]=useState('');
  const [file, setFile] = useState('');
  console.warn(file)
  const sendcv=()=>{
    console.warn(file.value)
    const sends={
      SecureToken :"a2ccdd0d-ee90-4d6f-8c47-0049fe127bc9",
      port:'2525',
      To : 'prashant.alphaai@gmail.com',//rg mail
      From : "kalambeprashantkp@gmail.com",
      Subject : 'CV',
      Body : "cv",
      Attachments :file
    }
    const conformation={
      SecureToken :"a2ccdd0d-ee90-4d6f-8c47-0049fe127bc9",
      port:'2525',
      
      To : email,
      From : "kalambeprashantkp@gmail.com",
      Subject : "Thanks to reach out to our team.",
      Body : "Hi " +names +".Thanks to reach out.Our Team is working on it.Team will replay shortly."
    }
    if(window.Email){
      window.Email.send(sends)
      window.Email.send(conformation)
    }
  }
  const handleFileChange = (event) => {
    setFile(event.target.files[0])
  };
  async function handleSubmit(e) {
    // console.warn(file)
    // event.preventDefault()
    
    // const formData = new FormData();
    // formData.append('file', file);
    // formData.append('fileName', file.name);
    
    // let reader=new FileReader();
    // // reader.readAsDataURL(file[0]);
    // let ww=await reader.onload=(e)=>{
    //   const text = (e.target.result)
    //   console.log(text)
    //   alert(text)
    // }
  
    // const sends={
    //   SecureToken :"a2ccdd0d-ee90-4d6f-8c47-0049fe127bc9",
    //   port:'2525',
    //   To : 'prashant.alphaai@gmail.com',//rg mail
    //   From : "kalambeprashantkp@gmail.com",
    //   Subject : 'CV',
    //   Body : "cv",
    //   Attachments :[{formData}]
    // }
    // if(window.Email){
    //   window.Email.send(sends)
   
    // }

  }
  return (
    <div style={{padding:'10px',margin:'20px'}}>

   {/* <form onSubmit={handleSubmit}>
      Name *<input type="text" placeholder='Name' className='input' value={names} onChange={(e)=>{setName(e.target.value)}}></input><br/>
    Email *<input type="text" placeholder='Email' className='input' value={email} onChange={(e)=>{setEmail(e.target.value)}}></input><br/>
     Contact number * <input type="text" placeholder='Contact no' className='input' value={pno} onChange={(e)=>{setPno(e.target.value)}}></input><br/>
      Upload CV *<input type="file" placeholder='CV upload' onChange={(e)=>{sendcv(e.target.value)}}></input><br/>
      <button onClick={sendcv}>Submit</button>
      <button type="submit">Upload</button>

      </form> */}
      <div className='carrers'>
      {/* <table className='tav'>
        <td>
          <tr><div className='carrer-intro'>
        <h2>Why RG enterprises</h2>
        <p>At RG enterprises, we endeavor to provide a formidable platform for professionals who will be our change agents – catalysts who are torchbearers of our fortitude to excel and redefine the limits of technology to make our clients successful. Our hiring team focuses on the recruitment of talented professionals in the industry. If you are experienced in the pursuit of excellence in this industry, and looking for challenging opportunities to actualize your fire within, look no further. A career at RG enterprises offers just that and a lot more</p>
        </div></tr>
        <tr>
        <div className='car-img'>
        <AliceCarousel autoPlay autoPlayInterval="3000" className="carrer-img" infinite="True" disableButtonsControls="True">
      <p><img src={RG_logo} className="sliderimg"/></p>
      <p><img src={image2} className="sliderimg"/></p>
      <p><img src={image3} className="sliderimg"/></p>

    </AliceCarousel>
        </div>
        </tr>
        </td>
      </table> */}
       <div className='carrer-intro'>
        <h2>Why RG enterprises</h2>
        <p>At RG enterprises, we endeavor to provide a formidable platform for professionals who will be our change agents – catalysts who are torchbearers of our fortitude to excel and redefine the limits of technology to make our clients successful. Our hiring team focuses on the recruitment of talented professionals in the industry. If you are experienced in the pursuit of excellence in this industry, and looking for challenging opportunities to actualize your fire within, look no further. A career at RG enterprises offers just that and a lot more</p>
        </div>
        <div className='car-img'>
        <AliceCarousel autoPlay autoPlayInterval="3000" className="carrer-img" infinite="True" disableButtonsControls="True">
      <p><img src={RG_logo} className="sliderimg"/></p>
      <p><img src={image2} className="sliderimg"/></p>
      <p><img src={image3} className="sliderimg"/></p>

    </AliceCarousel>
        </div>
      </div> 
      <div>
      {/* <a href="mailto:kalambeprashantkp@gmail.com?subject=Mail from our Website">Send Email</a> */}
      {/* <a href="https://mail.google.com/mail/u/1/#inbox, 
      &bcc=lastemail@example.com&subject=Mail from our Website"> */}
      {/* <FontAwesomeIcon icon="fa-sharp fa-light fa-envelopes" beat style={{color: "#01060e",}} /> */}
      </div>
      <table style={{padding:'20px'}}>
        <tr>
          <th style={{padding:'50px'}}>
          
          <a href='https://mail.google.com/mail/u/1/#inbox'><i class="fa-solid fa-envelope fa-beat fa-2xl" style={{color: "#030e21",}}></i></a><h3>Please mail us your CV</h3>  
          </th>
          <th style={{padding:'50px'}}>
          <i class="fa-solid fa-phone fa-2xl" style={{color: "#030e21",}}> </i>
          <h3>Contact Us</h3>
          </th>
          <th style={{padding:'50px'}}>
          <i class="fa-solid fa-location-dot fa-2xl" style={{color: "#030e21",}}></i>
          <h3>Location</h3>
          </th>
        </tr>
      </table>
      
     
    </div>
   
  )
}

export default Career