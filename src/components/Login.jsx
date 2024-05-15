import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {toast} from 'react-toastify';
import AxiosService from '../utils/ApiService';
import '../components/style.css'


function Login() {
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  let [emailRes, setEmailRes] = useState('');
  let [pswdRes, setPswdRes] = useState('');
  let [submit, setSubmit] = useState(false);

  let navigate = useNavigate()
  let emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  
  useEffect(()=>{
    clearError();
  },[email,password]);

  let clearError = () => {
    setEmailRes('');
    setPswdRes('');
  }

  let handleLogin = async(e)=>{
    e.preventDefault()

    clearError();

    // Check if email or password is empty

    if(email.trim() === ''){
      setEmailRes("Please fill the email field");
      return;
    }
    else if(!emailPattern.test(email)){
      setEmailRes(
        "Email should be in correct format"
      )
      return;
    }

    if(password.trim() === ''){
      setPswdRes("Please fill the password field");
      return;
    }
    else if(password.length < 3){
      setPswdRes(
        "Password should be at least greater than 3 characters, Make Strong password!"
      )
      return;
    }
    setSubmit(true);

    try {
      let res = await AxiosService.post(`/user/login`,{
        email,
        password
      });
      setEmail(''),
      setPassword('');

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
      setSubmit(false)
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
        <Form.Control type="email" placeholder='Enter Your Email Address' onChange={(e)=> setEmail(e.target.value)} required/>
      </Form.Group>
      {emailRes && <p className="text-danger">{emailRes}</p>}

      <Form.Group className='mb-3'>
        <Form.Label className='label-text'>Password</Form.Label>
        <Form.Control type="password" placeholder='Enter Your Password' onChange={(e)=> setPassword(e.target.value)} required/>
      </Form.Group>
      {pswdRes && <p className="text-danger">{pswdRes}</p>}
      </div>
      <div className='login-button'>
      <Button onClick={(e)=>handleLogin(e)} style={{color:"var(--white)", backgroundColor:"var(--theme)"}} disabled={submit}>
        Login
      </Button>
      <br/>
      <br/>
      <div className='signup-btn'>
        Don&apos;t have an account yet? <Link to={'/signup'}>Signup</Link>
      </div>
      </div>
    </Form>
   </div>
  </>
}

export default Login