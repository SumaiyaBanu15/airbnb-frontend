import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AxiosService from '../../utils/ApiService';
import { toast } from 'react-toastify';
import { Form, Button } from 'react-bootstrap';
import { list } from '../../assets/CardsList';

function CreateRoom() {
    let [customerName, setCustomerName] = useState("");
    let [email, setEmail] = useState("");
    let [place, setPlace] = useState("");
    let [noOfPerson, setNoOfPerson] = useState("");
    let [amenities, setAmenities] = useState([]);
    let [pricePerNight, setPricePerNight] = useState(0);
    let [checkIn, setCheckIn] = useState("");
    let [checkOut, setCheckOut] = useState("");

    let navigate = useNavigate();

    const handleCreate = async(e)=> {
        e.preventDefault()
        try {
        
            let res = await AxiosService.post(`/room/createRoom`,{
                customerName,
                email,
                place,
                noOfPerson,
                amenities: amenities.join(','),
                pricePerNight,
                checkIn,
                checkOut
            })
            // console.log(res);
            if(res.status === 201 && res.data){
                navigate('/home')
                toast.success(res.data.message)
            }
            else {
              // console.error("Unexpected response:", res);
              toast.error("Something went wrong. Please try again later.");
            }
            

        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    useEffect(()=>{
        const selectedPlace = list.find((item)=> item.place === place);
            if(selectedPlace){
              const price = parseFloat(selectedPlace.price.replace(/,/g, ''));
                setPricePerNight(price || 0);
        }
    },[place]);

  return <>
  <div className='create-room'>
   <div className='room-container'>
   <img src='/logos/ABNB_BIG.png' alt="airbnb Logo" className='logo-img'/>
     <h2 style={{color:"var(--theme)"}}>Create Your right now!</h2>
     <Form>
      <div className='div-label'>
      <Form.Group className='mb-3'>
        <Form.Label className='label-text'>Your Name</Form.Label>
        <Form.Control type="text" value={customerName} placeholder='Enter your name' onChange={(e)=> setCustomerName(e.target.value)}/>
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label className='label-text'>Email Id</Form.Label>
        <Form.Control type="email" value={email} placeholder='Enter your mail id' onChange={(e)=> setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label className='label-text'>Place</Form.Label>
        &nbsp;&nbsp;
        <select onChange={(e) => setPlace(e.target.value)}>
      <option value="">Select a destination</option>
      {list.map((card, index) => (
        <option key={index} value={card.place}>{card.place}</option>
      ))}
    </select>
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label className='label-text'>Amenities</Form.Label>
        <div>
            {["Wi-Fi", "TV", "Air Conditioning", "Swimming Pool", "Free Parking"].map((amenity, index)=> (
                <Form.Check
                key={index}
                type='checkbox'
                label={amenity}
                checked={amenities.includes(amenity)}
                onChange={(e)=>{
                    if(e.target.checked){
                        setAmenities((prevAmenities) => [...prevAmenities, amenity]);
                    }
                    else{
                        setAmenities((prevAmenities) => prevAmenities.filter((a)=> a !== amenity));
                    }
                }} />
            ))}
        </div>
      </Form.Group>
     
      <Form.Group className='mb-3'>
        <Form.Label className='label-text'>No of Persons</Form.Label>
        <Form.Control type="number" value={noOfPerson} placeholder='Enter no of persons' onChange={(e)=> setNoOfPerson(e.target.value)}/>
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label className='label-text'>Price per Night </Form.Label>
        <Form.Control type="text" value={pricePerNight} readOnly />
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label className='label-text'>Check In</Form.Label>
        <Form.Control type="date" value={checkIn} placeholder='Enter CheckIn Date' onChange={(e)=> setCheckIn(e.target.value)}/>
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label className='label-text'>Check Out</Form.Label>
        <Form.Control type="date" value={checkOut} placeholder='Enter CheckOut Date' onChange={(e)=> setCheckOut(e.target.value)}/>
      </Form.Group>
     </div>
     <div className='save-button'>
      <Button onClick={(e)=>handleCreate(e)} style={{color:"var(--white)", backgroundColor:"var(--theme)"}} >
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

export default CreateRoom