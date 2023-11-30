import React from 'react'
import "./style.css"
import StarIcon from '@mui/icons-material/Star';
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


function Cards({card}) {
  return <>
  <div className='card-box'>
    <Swiper
    slidesPerView={1}
    spaceBetween={15}
    loop={true}
    mousewheel={true}
    cssMode={true}
    modules={[Pagination, Navigation]}
    className='swiper-container' >
        {card.imgSrc.map((src,i)=>(
            <SwiperSlide key={i}>
                <img src={src} className='card-img' alt={`slide-${i}`} />
            </SwiperSlide>
        ))}
    </Swiper>    

    <div className='card-info-flex'>
        <h4 className='card-title'>{card.title}</h4>
        <div className='card-rating'>
            <StarIcon /><p className='ratings'>{card.ratings}</p>
            </div>
    </div>

    <p style={{margin:"0.2rem", fontSize:"1rem", color:"var(--font-grey)"}}>{card.date}</p>
    <p style={{margin: "0.2rem", fontSize:"1.2rem", color:"var(--black)"}}>{card.place}</p>
    <p style={{margin: "0.2rem", fontSize:"1rem", color:"var(--black)"}}>
    <span style={{fontWeight:"600"}}>₹{card.price}</span>&nbsp; night </p>
    </div>


 </>
}

export default Cards