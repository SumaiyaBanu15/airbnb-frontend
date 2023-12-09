import React, { useState } from 'react'
import AxiosService from '../../utils/ApiService';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import './style.css'
import {toast} from 'react-toastify';

function MyBooking() {
    let [roomId, setRoomId] = useState("");
    let [email, setEmail] = useState("");
    let [title, setTitle] = useState("");
    let [customerName, setCustomername] = useState("");
    let [checkIn, setCheckIn] = useState("");
    let [checkOut, setCheckOut ] = useState("");
    let navigate = useNavigate();
    
    const handleSave = async(e)=>{
        e.preventDefault()
        try {
            let res = await AxiosService.post(`/booking/roomBooking`,{
                roomId,
                email,
                title,
                customerName,
                checkIn,
                checkOut
            })
            // console.log(res); 
            if(res.status === 201 && res.data){
                navigate('/last')

                toast.success(res.data.message)
                // sessionStorage.setItem('userData',JSON.stringify(res.data.userData))
            }
        } catch (error) {
            // console.log(toast.error(error.response.data.message));
            toast.error(error.response.data.message)
        }
    }

  return <>
  <div className='myBooking'>
    <div className='booking-content'>
    <img src='/logos/ABNB_BIG.png' alt="airbnb Logo" className='logo-img'/>
     <h2 style={{color:"var(--theme)"}}>Book your favourite place right now!</h2>
     <Form>
      <div className='div-label'>
      <Form.Group className='mb-3'>
        <Form.Label className='label-text'>Room Id</Form.Label>
        <Form.Control type="text" value={roomId} placeholder='Enter the Room Id' onChange={(e)=> setRoomId(e.target.value)}/>
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label className='label-text'>Email</Form.Label>
        <Form.Control type="email" value={email} placeholder='Enter Your Email Id' onChange={(e)=> setEmail(e.target.value)}/>
      </Form.Group>
         
      <Form.Group className='mb-3'>
        <Form.Label className='label-text'>Title</Form.Label>
        <Form.Control type="text" value={title} placeholder='Enter Your Desired Place' onChange={(e)=> setTitle(e.target.value)}/>
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label className='label-text'>Customer Name</Form.Label>
        <Form.Control type="text" value={customerName} placeholder='Enter Your Name' onChange={(e)=> setCustomername(e.target.value)}/>
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label className='label-text'>Check-In Date</Form.Label>
        <Form.Control type="date" value={checkIn} placeholder='Enter Your CheckIn Date' onChange={(e)=> setCheckIn(e.target.value)}/>
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label className='label-text'>Check-Out Date</Form.Label>
        <Form.Control type="date" value={checkOut} placeholder='Enter Your CheckOut Date' onChange={(e)=> setCheckOut(e.target.value)}/>
      </Form.Group>
      </div>
      <div className='save-button'>
      <Button onClick={(e)=>handleSave(e)} style={{color:"var(--white)", backgroundColor:"var(--theme)"}} >
        Save
      </Button>

      <Button onClick={()=>navigate('/home')} style={{color:"var(--white)", backgroundColor:"var(--theme)"}} >
        Cancel
      </Button>
      </div>

    </Form> 
    </div>
  </div>
  
  </>
}

export default MyBooking