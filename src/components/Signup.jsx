import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {toast} from 'react-toastify';
import AxiosService from '../utils/ApiService';
import '../components/style.css'

function Signup() {
  let [name,setName] = useState("")
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  let navigate = useNavigate()
  let handleSignup = async(e)=>{
    e.preventDefault()
    try {
      let res = await AxiosService.post(`/user/signup`,{
        name,
        email,
        password
      })
      if(res.status === 201){

        navigate('/home')

        toast.success(res.data.message)
        sessionStorage.setItem('token', res.data.token)
        sessionStorage.setItem('userData',JSON.stringify(res.data.userData))
        
      }
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  return <>
   <div className='container'>
    <img src='/logos/ABNB_BIG.png' alt="airbnb Logo" className='logo-img'/>
    <h1 style={{textAlign:"center", color:"var(--theme)"}}> Welcome To AirBnb !</h1>
    <Form>
      <div className='div-label'>
    <Form.Group className='mb-3'>
        <Form.Label className='label-text'>Your Name</Form.Label>
        <Form.Control type="text"
        placeholder='Enter Your Name' 
        value={name} 
        onChange={(e)=> setName(e.target.value)}/>
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label className='label-text'>Email Address</Form.Label>
        <Form.Control type="email"
        placeholder='Enter Your Email Address'
        value={email}
        onChange={(e)=> setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label className='label-text'>Password</Form.Label>
       <Form.Control type="password"
        placeholder='Enter Your Password'
        value={password}
        onChange={(e)=> setPassword(e.target.value)}/>
      </Form.Group>
      </div>
      <div className='login-button'>
      <Button onClick={(e)=>handleSignup(e)} style={{color:"var(--white)", backgroundColor:"var(--theme)"}} >
        Signup
      </Button>
      <br/>
      <br/>
      <div className='login-btn'>
        Already a Member? <Link to={'/'}>Login</Link>
      </div>
      </div>
    </Form>
   </div>
  </>
}

export default Signup