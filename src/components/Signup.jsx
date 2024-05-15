import React, { useState,useEffect } from 'react';
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
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nameRes, setNameRes] = useState('');
  const [emailRes, setEmailRes] = useState('');
  const [pswdRes, setPswdRes] = useState('');
  const [confirmPswdRes, setConfirmPswdRes] = useState('');
  const [submit, setSubmit] = useState(false);
  let navigate = useNavigate()

  let emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

  useEffect(()=>{
    clearError();
  },[name,password,confirmPassword,email]);

  const clearError = () => {
    setNameRes('');
    setEmailRes('');
    setPswdRes('');
    setConfirmPswdRes('');
  }
  let handleSignup = async(e)=>{
    e.preventDefault();

    clearError();
    if(name.trim() === ''){
      setNameRes("Please fill this input field");
      return;
    }
    else if(name.length < 3){
      setNameRes(
        "Name should be at least 3 characters long!"
      );
      return;
    }
    // Email Verification
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
    // Password Verification
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
    // Confirm Password Verification
    if(confirmPassword.trim() === ''){
      setConfirmPswdRes("Please fill the confirm password field");
      return;
    }
    else if(password !== confirmPassword){
      setConfirmPswdRes(
        "Password doesn't match with confirm password"
      )
      return;
    }
setSubmit(true);

    try {
      let res = await AxiosService.post(`/user/signup`,{
        name,
        email,
        password,
        confirmPassword
      })
      setName("");
      setEmail("")
      setPassword("");
      setConfirmPassword("");
      if(res.status === 201){

        navigate('/home')

        toast.success(res.data.message)
        sessionStorage.setItem('token', res.data.token)
        sessionStorage.setItem('userData',JSON.stringify(res.data.userData))
        
      }
    } catch (error) {
      toast.error(error.response.data.message)
    }
    setSubmit(false);
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
        onChange={(e)=> setName(e.target.value)} required/>
      </Form.Group>
      {nameRes && <p className="text-danger">{nameRes}</p>}

      <Form.Group className='mb-3'>
        <Form.Label className='label-text'>Email Address</Form.Label>
        <Form.Control type="email"
        placeholder='Enter Your Email Address'
        value={email}
        onChange={(e)=> setEmail(e.target.value)} required/>
      </Form.Group>
      {emailRes && <p className="text-danger">{emailRes}</p>}

      <Form.Group className='mb-3'>
        <Form.Label className='label-text'>Password</Form.Label>
       <Form.Control type="password"
        placeholder='Enter Your Password'
        value={password}
        onChange={(e)=> setPassword(e.target.value)} required/>
      </Form.Group>
      {pswdRes && <p className="text-danger">{pswdRes}</p>}

      <Form.Group className="mb-3">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" onChange={(e)=>setConfirmPassword(e.target.value)} required/>
      </Form.Group>
      {confirmPswdRes && <p className="text-danger">{confirmPswdRes}</p>}
      </div>
      <div className='login-button'>
      <Button onClick={(e)=>handleSignup(e)} style={{color:"var(--white)", backgroundColor:"var(--theme)"}} disabled={submit} >
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