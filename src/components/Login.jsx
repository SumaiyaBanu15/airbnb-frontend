import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {toast} from 'react-toastify';
import AxiosService from '../utils/ApiService';
import '../components/style.css'


function Login() {
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  let navigate = useNavigate()
  let handleLogin = async(e)=>{
    e.preventDefault()
    try {
      let res = await AxiosService.post(`/user/login`,{
        email,
        password
      })
      if(res.status === 200)
      {
        toast.success(res.data.message)
        sessionStorage.setItem('token', res.data.token)
        sessionStorage.setItem('userData',JSON.stringify(res.data.userData))

        if(res.data.userData){
          navigate('/home')
        }
        
        else{
          toast.error("Incorrect Email or Password")
        }
      }
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  return <>
   <div className='container'>
    <img src='/logos/ABNB_BIG.png' alt="airbnb Logo" className='logo-img'/>
    <h1 style={{textAlign:"center", color:"var(--theme)"}}> Welcome To AirBnb</h1>
    <Form>
      <div className='div-label'>
      <Form.Group className='mb-3'>
        <Form.Label className='label-text'>Email Address</Form.Label>
        <Form.Control type="email" placeholder='Enter Your Email Address' onChange={(e)=> setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label className='label-text'>Password</Form.Label>
        <Form.Control type="password" placeholder='Enter Your Password' onChange={(e)=> setPassword(e.target.value)}/>
      </Form.Group>
      </div>
      <div className='login-button'>
      <Button onClick={(e)=>handleLogin(e)} style={{color:"var(--white)", backgroundColor:"var(--theme)"}} >
        Login
      </Button>
      <br/>
      <br/>
      <div className='signup-btn'>
        Don't have an account yet? <Link to={'/signup'}>Signup</Link>
      </div>
      </div>
    </Form>
   </div>
  </>
}

export default Login