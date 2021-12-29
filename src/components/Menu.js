import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Looks6Icon from '@mui/icons-material/Looks6';
import ArticleIcon from '@mui/icons-material/Article';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
const Menu = () => {
    const toggleSidebar = () => {
        document.getElementById("menu").style.visibility = 'visible';
    }
    const closeSidebar = () => {
        document.getElementById("menu").style.visibility = 'hidden';
    }
    return (
        <>
            <Button onClick={() => toggleSidebar()}>
                <MenuIcon sx={{ color: 'white' }} />
            </Button>
            <div id="menu">
                <div className="list">
                    <div className='item'><Button onClick={() => closeSidebar()} style={{ float: 'right' }}><CancelOutlinedIcon /></Button></div>
                    <div className="item"><PersonIcon /> <h5>Login or Signup</h5></div>
                    <div className="item"> <LocationOnIcon /> <h5>Change City</h5></div>
                    <div className='item'><Looks6Icon /><h5>Supermiler club</h5></div>
                    <div className="item"><ArticleIcon /> <h5>Zoomcar Fleet Vehicles Policy</h5></div>
                    <div className="item"><ArticleIcon /><h5>Zoomcar Host Vehicles Policy</h5></div>
                    <div className="item"><LocalPhoneOutlinedIcon /><h5>Help and Support</h5></div>
                </div>
            </div>
        </>

    )
}

export default Menu
