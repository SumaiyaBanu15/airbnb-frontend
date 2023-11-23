import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {toast} from 'react-toastify';
import AxiosService from '../utils/ApiService';
import '../components/style.css'

function Signup() {
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  let navigate = useNavigate()
  let handleLogin = async()=>{
    try {
      let res = await AxiosService.post(`/user/login`,{
        email,
        password
      })
      if(res.status === 200){
        toast.success(res.data.message)
        sessionStorage.setItem('token, res.data.token')
        sessionStorage.setItem('userData',JSON.stringify(res.data.userData))

        if(res.data.userData){
          navigate('/home')
        }
        else{
          navigate('/')
        }
      }
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  return <>
   <div className='container'>
    <img src='/src/assets/logos/ABNB_BIG.png' alt="airbnb Logo" className='logo-img'/>
    <h1 style={{textAlign:"center"}}> Welcome To AirBnb</h1>
    <Form>
      <Form.Group className='mb-3'>
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder='Enter Your Email Address' onChange={(e)=> setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>Password</Form.Label>
        <Form.Control type="email" placeholder='Enter Your Password' onChange={(e)=> setPassword(e.target.value)}/>
      </Form.Group>
      
      <div className='login-button'>
      <Button onClick={handleLogin} style={{color:"var(--white)", backgroundColor:"var(--theme)"}} >
        Submit
      </Button>
      </div>
    </Form>
   </div>
  </>
}

export default Signup