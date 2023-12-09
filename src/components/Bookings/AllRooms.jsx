import React, { useEffect, useState } from 'react'
import AxiosService from '../../utils/ApiService'
import {toast} from 'react-toastify';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import './style.css'
import { useNavigate } from 'react-router-dom';

function AllRooms() {
    const [allRooms, setAllRooms] = useState([]);

    const navigate = useNavigate();

    useEffect(()=>{
        const fetchRooms = async()=>{
            try {
                const res = await AxiosService.get(`/room/allRooms`);
                // console.log(res.data);

                if(res.status === 200){
                    const fetchedRooms = res.data.allRooms || [];

                    setAllRooms(fetchedRooms);
                    toast.success(res.data.message);
                }
                else{
                    toast.error("Unexpexted Response:", res);
                }
            } catch (error) {
                toast.error(error.response.data.message)
            }
        }
        fetchRooms();
    },[])
  return <>
        <div className='fetch-room'>
      <img src='/logos/ABNB_BIG.png' alt="airbnb Logo" className='logo-img'/>
      <h2 style={{textAlign:"center", color:"var(--theme)"}}> All Rooms</h2>
        <br />
       {allRooms.length > 0 ? (
        
        <Table striped bordered hover>
          <thead>
            <tr>
                <th>Customer Name</th>
                <th>Email</th>
                <th>Place</th>
                <th>No of Persons</th>
                <th>Price per Night</th>
                <th>Amenities</th>
                <th>Check In </th>
                <th>Check Out</th>
            </tr>
          </thead>
          <tbody>
            {allRooms.map((room)=>(
                <tr key={room._id}>
                <td>{room.customerName}</td>
                <td>{room.email}</td>
                <td>{room.place}</td>
                <td>{room.noOfPerson}</td>
                <td>{room.pricePerNight}</td>
                <td>{room.amenities}</td>
                <td>{room.checkIn}</td>
                <td>{room.checkOut}</td>
            </tr>
            ))}
    
           </tbody>
        </Table>
            ):(
                <p> No Rooms available </p>
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

export default AllRooms