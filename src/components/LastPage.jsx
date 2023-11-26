import React from 'react'
import './style.css'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function LastPage() {
    let navigate = useNavigate();
  return <>
  <img src='/logos/ABNB_BIG.png' alt="airbnb Logo" className='logo-img'/>
  <div className='lastPage'>
   <h1 style={{color:"var(--theme)"}}> Thank You!</h1>
   <br/>
   <h3> Let's Start your Journey with us!
    <br/>
    <br/>
    Happy Travelling! Happy Staying!
    </h3>
    <br/>
    <Button onClick={()=>navigate('/home')} style={{backgroundColor:"var(--theme)"}}>Visit Again</Button>
 </div>
  </>
}

export default LastPage