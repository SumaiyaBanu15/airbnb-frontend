import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import Cards from '../CardsFlex/Cards'
import { useNavigate } from 'react-router-dom'
import './style.css'


function HouseModal({showModal, closeModal, title, modalData}) {

  let navigate = useNavigate();
  return <>
    <Modal show={showModal} onHide={closeModal}>
     <Modal.Header closeButton>
      <Modal.Title>{title}</Modal.Title> 
     </Modal.Header> 
     <Modal.Body>
       <Cards card={modalData} />

      <div className='btn-button'>
       <Button onClick={()=>navigate('/myBooking')} style={{color:"var(--white)", backgroundColor:"var(--theme)"}} >Book this Place</Button>
       </div>
     </Modal.Body>
    </Modal>
  </>
}


export default HouseModal