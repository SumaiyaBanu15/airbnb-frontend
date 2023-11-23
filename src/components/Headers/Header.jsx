import React from 'react'
import "./style.css"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import BasicMenu from './ProfileMenu';

function Header() {
  return <>
  {/* ---NAV BAR--- */}
  <div className='navbar'>
    {/* LeftSide part - Airbnb Logo */}
    <img src="/src/assets/logos/ABNB_BIG.png" alt="logo" className='navbar-logo' />
    {/* Middle part */}
    <div className='search-bar'>
      <div className='search-bar-text1'>Any Where</div>
      <div className='search-bar-text1'>Any Week</div>
      <div className='search-bar-text2'>Add Guests</div>
      <div className='search-icon-div'>
      <SearchIcon className="search-icon" />
      </div>
    </div>
    {/* RightSide part */}
    <div className='profile-container'>
      <div className='airbnb-your-home'>Airbnb your home</div>
      <div className='airbnb-your-home'> <LanguageIcon /> </div>
      <div className='profile-div'> <BasicMenu /> </div>
    </div>

</div>
  </>
}

export default Header