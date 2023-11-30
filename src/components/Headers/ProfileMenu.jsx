import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import "./style.css";
import { useNavigate } from 'react-router-dom';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate()
 
  let userData = JSON.parse(sessionStorage.getItem('userData'))

  return (
    <div>
      <div id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className='profile-menu-flex'> 
        <MenuRoundedIcon />
        <AccountCircleRoundedIcon />
        <h6 style={{textAlign:"center", marginTop:'4px'}}>{`${userData.name}`}</h6>
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{ ".MuiPaper-root": { 
            minWidth:"200px",
            borderRadius:"1rem",
            boxShadow:"0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%)" },
        }}>
        <MenuItem className="menu-items signup" onClick={()=>navigate('/signup')}> Signup </MenuItem>
        <MenuItem className="menu-items" onClick={()=>navigate('/')}> Login </MenuItem>
        <div style={{
            height:"1px", backgroundColor:"var(--grey)",
            width:"100%"
        }}/>
        <MenuItem className="menu-items" onClick={()=>navigate('/myBooking')}> Book Your Room </MenuItem>

        <MenuItem className="menu-items" onClick={()=>navigate('/getAllBookings')}> All Bookings </MenuItem>

        <MenuItem className="menu-items" onClick={()=>navigate('/getAllRooms')}> All Rooms </MenuItem>

      </Menu>
    </div>
  );
}