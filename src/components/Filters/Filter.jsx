import React, { useState } from 'react';
import { icons } from "../IconsImages/Icons"
import "./style.css"
import HouseModal from '../IconsModals/HouseModal';
import { list } from '../../assets/CardsList';

function Filter() {
    // House Modal
  const [aframeOpen, setAframeOpen] = useState(false);
  const [amazingOpen, setAmazingOpen] = useState(false);
  const [beachOpen, setBeachOpen ] = useState(false);
  const [boatOpen, setBoatOpen ] = useState(false);
  const [caveOpen, setCaveOpen ] = useState(false);
  const [cityOpen, setCityOpen ] = useState(false);
  const [desertOpen, setDesertOpen ] = useState(false);
  const [designOpen, setDesignOpen ] = useState(false);
  const [farmOpen, setFarmOpen ] = useState(false);
  const [glassOpen, setGlassOpen ] = useState(false);
  const [islandOpen, setIslandOpen ] = useState(false);
  const [lakeOpen, setLakeOpen ] = useState(false);
  const [luxuryOpen, setLuxuryOpen ] = useState(false);
  const [mountainOpen, setMountainOpen ] = useState(false);
  const [riverOpen, setRiverOpen ] = useState(false);
  const [tentOpen, setTentOpen ] = useState(false);
  const [tinyOpen, setTinyOpen ] = useState(false);
  const [traditionalOpen, setTraditionalOpen ] = useState(false);
  const [treeOpen, setTreeOpen ] = useState(false);
  const [waterOpen, setWaterOpen ] = useState(false);


  const [selectedFilter, setselectedFilter] = useState("");

  const openModal = (filterIndex) => {
    setselectedFilter(filterIndex);
    if(filterIndex === 0){
      setAframeOpen(true);
      setAmazingOpen(false);
    }
    else if(filterIndex === 1){
      setAframeOpen(false);
      setAmazingOpen(true);
    }
    else if(filterIndex === 2){
      setBeachOpen(true);
    }
    else if(filterIndex === 3){
      setBoatOpen(true);
    }
    else if(filterIndex === 4){
      setCaveOpen(true);
    }
    else if(filterIndex === 5){
      setCityOpen(true);
    }
    else if(filterIndex === 6){
      setDesertOpen(true);
    }
    else if(filterIndex === 7){
      setDesignOpen(true);
    }
    else if(filterIndex === 8){
      setFarmOpen(true);
    }
    else if(filterIndex === 9){
      setGlassOpen(true);
    }
    else if(filterIndex === 10){
      setIslandOpen(true);
    }
    else if(filterIndex === 11){
      setLakeOpen(true);
    }
    else if(filterIndex === 12){
      setLuxuryOpen(true);
    }
    else if(filterIndex === 13){
      setMountainOpen(true);
    }
    else if(filterIndex === 14){
      setRiverOpen(true);
    }
    else if(filterIndex === 15){
      setTentOpen(true);
    }
    else if(filterIndex === 16){
      setTinyOpen(true);
    }
    else if(filterIndex === 17){
      setTraditionalOpen(true);
    }
    else if(filterIndex === 18){
      setTreeOpen(true);
    }
    else if(filterIndex === 19){
      setWaterOpen(true);
    }
  }

  const closeModal = () => {
    setAframeOpen(false);
    setAmazingOpen(false);
    setBeachOpen(false);
    setBoatOpen(false);
    setCaveOpen(false);
    setCityOpen(false);
    setDesertOpen(false);
    setDesignOpen(false);
    setFarmOpen(false);
    setGlassOpen(false);
    setIslandOpen(false);
    setLakeOpen(false);
    setLuxuryOpen(false);
    setMountainOpen(false);
    setRiverOpen(false);
    setTentOpen(false);
    setTinyOpen(false);
    setTraditionalOpen(false);
    setTreeOpen(false);
    setWaterOpen(false);
    setselectedFilter(null);
  };

  // Assuming icons and list are defined
  const selectedData = selectedFilter!== null ? list[selectedFilter] : null;
  
  return <>
  <div className='container'>
    <div className="filter-div">
      {icons.map((item, i) => (
      <div className={`img-div ${i == selectedFilter && "selected-box"}`} key={i} onClick={()=> {
        console.log("Selecting Key",i);
        setselectedFilter(i)
        openModal(i);
        }}>
        <img src={item.imgSrc} alt={`icon-${i}`} className='links-img'/>
        <p className={`links-label ${i == selectedFilter && "selected-label"}`}>{item.label}</p>
        </div>
      
      ))}
      </div>
    </div>

    {/* Aframe Houses */}
    <HouseModal 
    showModal={aframeOpen}
    closeModal={closeModal}
    title={selectedData ? selectedData.title : ''}
    modalData={list[0]}
    />
    {/* Amazing Houses */}
    <HouseModal 
    showModal={amazingOpen}
    closeModal={closeModal}
    title={selectedData ? selectedData.title : ''}
    modalData={list[1]}
    />
    {/* Beach Houses */}
      <HouseModal 
    showModal={beachOpen}
    closeModal={closeModal}
    title={selectedData ? selectedData.title : ''}
    modalData={list[2]}
    />
    {/* Boat Houses */}
      <HouseModal 
    showModal={boatOpen}
    closeModal={closeModal}
    title={selectedData ? selectedData.title : ''}
    modalData={list[3]}
    />
    {/* Cave Houses */}
      <HouseModal 
    showModal={caveOpen}
    closeModal={closeModal}
    title={selectedData ? selectedData.title : ''}
    modalData={list[4]}
    />
    {/* City View Houses */}
      <HouseModal 
    showModal={cityOpen}
    closeModal={closeModal}
    title={selectedData ? selectedData.title : ''}
    modalData={list[5]}
    />
    {/* Desert View Houses */}
      <HouseModal 
    showModal={desertOpen}
    closeModal={closeModal}
    title={selectedData ? selectedData.title : ''}
    modalData={list[6]}
    />
    {/* Designer Houses */}
      <HouseModal 
    showModal={designOpen}
    closeModal={closeModal}
    title={selectedData ? selectedData.title : ''}
    modalData={list[7]}
    />
    {/* Farm View Houses */}
      <HouseModal 
    showModal={farmOpen}
    closeModal={closeModal}
    title={selectedData ? selectedData.title : ''}
    modalData={list[8]}
    />
    {/* Glass Houses */}
      <HouseModal 
    showModal={glassOpen}
    closeModal={closeModal}
    title={selectedData ? selectedData.title : ''}
    modalData={list[9]}
    />
    {/* Island Houses */}
      <HouseModal 
    showModal={islandOpen}
    closeModal={closeModal}
    title={selectedData ? selectedData.title : ''}
    modalData={list[10]}
    />
    {/* Lake View Houses */}
      <HouseModal 
    showModal={lakeOpen}
    closeModal={closeModal}
    title={selectedData ? selectedData.title : ''}
    modalData={list[11]}
    />
    {/* Luxury Houses */}
      <HouseModal 
    showModal={luxuryOpen}
    closeModal={closeModal}
    title={selectedData ? selectedData.title : ''}
    modalData={list[12]}
    />
    {/* Mountain View Houses */}
      <HouseModal 
    showModal={mountainOpen}
    closeModal={closeModal}
    title={selectedData ? selectedData.title : ''}
    modalData={list[13]}
    />
    {/* River View Houses */}
      <HouseModal 
    showModal={riverOpen}
    closeModal={closeModal}
    title={selectedData ? selectedData.title : ''}
    modalData={list[14]}
    />
    {/* Tent Houses */}
      <HouseModal 
    showModal={tentOpen}
    closeModal={closeModal}
    title={selectedData ? selectedData.title : ''}
    modalData={list[15]}
    />
    {/* Tiny Houses */}
        <HouseModal 
    showModal={tinyOpen}
    closeModal={closeModal}
    title={selectedData ? selectedData.title : ''}
    modalData={list[16]}
    />
    {/* Traditional Houses */}
      <HouseModal 
    showModal={traditionalOpen}
    closeModal={closeModal}
    title={selectedData ? selectedData.title : ''}
    modalData={list[17]}
    />
    {/* Tree Houses */}
      <HouseModal 
    showModal={treeOpen}
    closeModal={closeModal}
    title={selectedData ? selectedData.title : ''}
    modalData={list[18]}
    />
    {/* Under Water Houses */}
      <HouseModal 
    showModal={waterOpen}
    closeModal={closeModal}
    title={selectedData ? selectedData.title : ''}
    modalData={list[19]}
    />
  </>
}

export default Filter;
