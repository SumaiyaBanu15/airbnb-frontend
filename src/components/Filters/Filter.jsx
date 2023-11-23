import React, { useState } from 'react';
import { icons } from "../IconsImages/Icons"
import "./style.css"

function Filter() {
  const [selectedFilter, setselectedFilter] = useState("");

  return <>
    <div className="filter-div">
      {icons.map((item, i) => (
      <div className={`img-div ${i == selectedFilter && "selected-box"}`} key={i} onClick={()=> {
        console.log("Selecting Key",i);
        setselectedFilter(i)
        }}>
        <img src={item.imgSrc} alt={`icon-${i}`} className='links-img'/>
        <p className={`links-label ${i == selectedFilter && "selected-label"}`}>{item.label}</p>
        </div>
      
      ))}
    </div>
    </>
}

export default Filter;
