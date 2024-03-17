import React, { useState } from 'react'
import './style.css';
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from 'react-date-range';


function DateSearch() {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date())

    const selectRange = {
        startDate,
        endDate,
        key:"selection"
    }

    const handleSelection = (ranges)=>{
      setStartDate(ranges.selection.startDate);
      setEndDate(ranges.selection.endDate);
    }

  return <>
    <div className='search'>
        <DateRangePicker ranges={[selectRange]} 
        onChange={handleSelection}/>
      
    </div>
    </>
}

export default DateSearch