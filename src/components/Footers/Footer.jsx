import React from 'react'
import CopyrightIcon from '@mui/icons-material/Copyright';
import LanguageIcon from '@mui/icons-material/Language';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

import './style.css';

function Footer() {

return <>
  <div className='footer'>
    {/* Left Side */}
    <div className='copyright'>
     <div><CopyrightIcon />&nbsp;2023  Airbnb Clone, Inc. <br/>
       By Sumaiya Banu
     </div>
     <div>
     <ul className='footer-list'>
        <li>Privacy</li>
        <li>Terms</li>
        <li>Sitemap</li>
        <li>Company details</li>
     </ul>
     </div>
    </div>
    {/* Right Side */}
     <div className='social-media'>
      <div className='rupees'><LanguageIcon /> &nbsp;English(IN) </div>
      <div className='rupees'>₹ INR</div>
      <div className='social-icons'>
        <FacebookIcon/>
        <TwitterIcon/>
        <InstagramIcon/>
      </div>
     </div> 
  </div>

</>  
}

export default Footer