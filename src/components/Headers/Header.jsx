import React, { useState } from 'react'
import "./style.css"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import BasicMenu from './ProfileMenu';
import { Button, Modal } from 'react-bootstrap';
import DateSearch from './DateSearch';
import { Link, useNavigate } from 'react-router-dom';
import Cards from '../CardsFlex/Cards';
import { list } from '../../assets/CardsList'

function Header() {

  // Date Modal
  const [dateSearchOpen, setDateSearchOpen] = useState(false)
  const openDateSearch = ()=> {
    setDateSearchOpen(true);
  }
  const closeDateSearch = ()=>{
    setDateSearchOpen(false);
  }
  // Place Modal
  const [anchorE1, setAnchorE1] = useState(null);
  const [placeSearchOpen, setPlaceSearchOpen] = useState(false)
  const openPlaceSearch = (event)=> {
    setAnchorE1(event.currentTarget);
    setPlaceSearchOpen(true);
  }
  const closePlaceSearch = ()=>{
    setPlaceSearchOpen(false);
  }
  const [selectedPlace, setSelectedPlace] = useState("");
  const [filteredList, setFilteredList] = useState([]); 
  const navigate = useNavigate();
  // HandleSubmitPlace
  const handleSubmitPlace = ()=>{
    const filteredList = list.filter(card=> card.place.toLowerCase() === selectedPlace.toLowerCase());
    setFilteredList(filteredList);
    // Update the state with the filtered list
  }
 
  const [addWhereHovered, setAddWhereHovered] = useState(false);
  const [addWeekHovered, setAddWeekHovered] = useState(false);
  const [addHovered, setAddHovered] = useState(false);
 

  
  return <>
  {/* ---NAV BAR--- */}
  <div className='navbar'>
    {/* LeftSide part - Airbnb Logo */}
    <img src="/logos/ABNB_BIG.png" alt="logo" className='navbar-logo' />
    {/* Middle part */}
    <div className='search-bar'>
      <div className='search-bar-text1'>
      <Button 
      onMouseEnter = {() => setAddWhereHovered(true)}
      onMouseLeave = {() => setAddWhereHovered(false)}
      onClick={openPlaceSearch}
      style={{
          border:'none',
          backgroundColor:'transparent',
          cursor:'pointer',
          padding:0,
          color:"var(--black)",
          fontSize:'1rem',
          transition:'background-color 0.3s ease',
          ...(addWhereHovered ? { backgroundColor: 'var(--grey)' } : {}),
      
        }}>Any Where</Button>
      </div>
      <div className='search-bar-text1'>
        <Button 
        onMouseEnter = {() => setAddWeekHovered(true)}
        onMouseLeave = {() => setAddWeekHovered(false)}
        onClick={openDateSearch} style={{
          border:'none',
          backgroundColor:'transparent',
          cursor:'pointer',
          padding:0,
          color:"var(--black)",
          fontSize:'1rem',
          transition:'background-color 0.3s ease',
          ...(addWeekHovered ? { backgroundColor: 'var(--grey)' } : {}),
      
        }}>Any Week</Button>
      </div>
      <div className='search-bar-text2'>
      <Button 
      onMouseEnter = {() => setAddHovered(true)}
      onMouseLeave = {() => setAddHovered(false)}
      style={{
          border:'none',
          backgroundColor:'transparent',
          cursor:'pointer',
          padding:0,
          color:"var(--font-grey)",
          fontSize:'1rem',
          transition:'background-color 0.3s ease',
          ...(addHovered ? { backgroundColor: 'var(--grey)' } : {}),
      
        }}>Add Guest</Button>
      </div>
      <div className='search-icon-div'>
      <SearchIcon className="search-icon" />
      </div>
    </div>

    {/* RightSide part */}
    <div className='profile-container'>
      <div className='airbnb-your-home'>
        <Link to ="/createRoom" style={{textDecoration:"none"}}>
        <Button style={{backgroundColor:"transparent", border:"none", color:"var(--black)", textDecoration:"none", textAlign:"center"}}>Create Room</Button>
        </Link></div>
      <div className='airbnb-your-home'> <LanguageIcon /> </div>
      <div className='profile-div'> <BasicMenu /> </div>
    </div>
</div>


{/* Modal for DateSearch */}
<Modal show={dateSearchOpen} onHide={closeDateSearch}>
  <Modal.Header closeButton>
    <Modal.Title>Select Date</Modal.Title> 
  </Modal.Header> 
  <Modal.Body>
    {dateSearchOpen && <DateSearch onClose={closeDateSearch}/>}
  </Modal.Body>
</Modal>

{/* Modal for Place */}
<Modal show={placeSearchOpen} onHide={closePlaceSearch}>
  <Modal.Header closeButton>
    <Modal.Title>Select Place</Modal.Title> 
  </Modal.Header> 
  <Modal.Body>
    
  <div className='modal-place'>
  <div className='modal-label'>
    <label className='label' style={{ fontSize: "larger" }}>Which destination</label>

    <select onChange={(e) => setSelectedPlace(e.target.value)}>
      <option value="">Select a destination</option>
      {list.map((card, index) => (
        <option key={index} value={card.place}>{card.place}</option>
      ))}
    </select>
  </div>
  <Button onClick={handleSubmitPlace}>Submit</Button>
  </div>
  {/* Render filtered cards */}
    {filteredList.map((card, index) => (
      <Cards key={index} card={card} />
    ))}
  </Modal.Body>
  <Modal.Footer>
    
    {/* Render "Book this page" */}
    {filteredList.length > 0 && (
      <div className='btn-button'>
      <Button onClick={()=>navigate('/myBooking')} style={{backgroundColor:"var(--theme)"}}>Book this Place</Button>
      </div>
    )}
    
  </Modal.Footer>
</Modal>

</>
}

export default Header