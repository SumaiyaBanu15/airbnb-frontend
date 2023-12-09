import React, { useEffect, useState } from 'react'
import AxiosService from '../../utils/ApiService'
import {toast} from 'react-toastify';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import './style.css'
import { useNavigate } from 'react-router-dom';

function AllBookings() {
    const [bookings, setBookings] = useState([]);

    const navigate = useNavigate();

    useEffect(()=>{
        const fetchBookings = async()=>{
            try {
                const res = await AxiosService.get(`/booking/getMyBooking`);

                // console.log(res.data);

                if(res.status === 200){
                    const fetchedBookings = res.data.bookings || [];

                    setBookings(fetchedBookings);
                    toast.success(res.data.message);
                }
                else{
                    toast.error("Unexpected Response :", res);
                }
            } catch (error) {
                toast.error(error.response.data.message)
            }
        }
        fetchBookings();
    },[])
  return <>
      <div className='fetch-booking'>
      <img src='/logos/ABNB_BIG.png' alt="airbnb Logo" className='logo-img'/>
      <h2 style={{textAlign:"center", color:"var(--theme)"}}> All Bookings</h2>
        <br />
       {bookings.length > 0 ? (
        
        <Table striped bordered hover>
          <thead>
            <tr>
                <th>Room ID</th>
                <th>Title</th>
                <th>Email</th>
                <th>Customer Name</th>
                <th>Check In </th>
                <th>Check Out</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking)=>(
                <tr key={booking._id}>
                <td>{booking.roomId}</td>
                <td>{booking.title}</td>
                <td>{booking.email}</td>
                <td>{booking.customerName}</td>
                <td>{booking.checkIn}</td>
                <td>{booking.checkOut}</td>
            </tr>
            ))}
    
           </tbody>
        </Table>
            ):(
                <p> No bookings available </p>
            )}
        <br/>    
        <div className='save-button'>
        <Button onClick={()=>navigate('/home')} style={{color:"var(--white)", backgroundColor:"var(--theme)"}} >
        Back
      </Button>
        </div>
       </div>
  </>
}

export default AllBookings