import React, { useState } from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 19.18765461971069,
  lng: 72.87400692603242
};


const Contact = () => {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [subject,setSubject]=useState('');
  const [body,setBody]=useState('');
  
  const Emailcall=()=>{
    console.warn(name,typeof(email),subject);
  const sends={
    SecureToken :"a2ccdd0d-ee90-4d6f-8c47-0049fe127bc9",
    port:'2525',
    To : 'prashant.alphaai@gmail.com',//rg mail
    From : "kalambeprashantkp@gmail.com",
    Subject : subject,
    Body : body
  }
  const conformation={
    SecureToken :"a2ccdd0d-ee90-4d6f-8c47-0049fe127bc9",
    port:'2525',
    
    To : email,
    From : "kalambeprashantkp@gmail.com",
    Subject : "Thanks to reach out to our team.",
    Body : "Hi " +name +".Thanks to reach out.Our Team is working on it.Team will replay shortly."
  }
  if(window.Email){
    window.Email.send(sends)
    window.Email.send(conformation)
  }
  }
  return (
    <div >
   {/* <LoadScript
        googleMapsApiKey="AIzaSyAWeF1fSdxPgShP4oVmOeUmbIM2HIbbtoE"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          <></>
        </GoogleMap>
      </LoadScript> */}
      <table className='tableContact'>
        <tr>
          <td className='mapss'>  <iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=12/Vanashri, Popat Compound, Appapada, Maharashtra Nagar Kurar Village, Malad East Mumbai, Maharashtra 400097 India&t=&z=14&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
</td>
<td className='contactbox'>
<h3>Contact Us</h3>
Name <input type="text" placeholder='Enter your Name..' className='input-contact' value={name} onChange={(e)=>setName(e.target.value)}></input><br/>
   Email <input type="text" placeholder='Enter your Email..' className='input-contact' onChange={(e)=>setEmail(e.target.value)} value={email}></input><br/>
      Subject <input type="text" placeholder='Subject' className='input-contact'value={subject} onChange={(e)=>setSubject(e.target.value)} ></input><br/>
      <textarea type="text" placeholder='Message' className='input-contact' cloumn="5"rows="10" value={body} onChange={(e)=>{setBody(e.target.value)}}></textarea>
      <button onClick={Emailcall}>Submit</button>
</td>
        </tr>
      </table>
      {/* <div className='tableContact'>
      <h2>Address</h2>
      <h3>Kandivali</h3>
         </div>
<div>
     <iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=12/Vanashri, Popat Compound, Appapada, Maharashtra Nagar Kurar Village, Malad East Mumbai, Maharashtra 400097 India&t=&z=14&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
     </div> */}
     
      {/* <LoadScript
      googleMapsApiKey="AIzaSyAWeF1fSdxPgShP4oVmOeUmbIM2HIbbtoE"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        <></>
      </GoogleMap>
    </LoadScript> */}

    <div className='QMbmRe' ></div>

    </div>
  )
}

export default Contact