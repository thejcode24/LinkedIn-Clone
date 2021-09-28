import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppsIcon from '@mui/icons-material/Apps';



function Header() {
    return (
        <div className="header">
  
            <div className="header__left">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" 
                alt="LinkedIn Logo">

                </img>

                <div className="header__search">
                    <SearchIcon />
                    <input type="text" placeholder="Search"/>     
                </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon = {HomeIcon} title="Home"/>
                <HeaderOption Icon= {SupervisorAccountIcon} title="My Network"/>
                <HeaderOption Icon = {BusinessCenterIcon} title="Business Center"/>
                <HeaderOption Icon = {ChatIcon} title="Chat"/>
                <HeaderOption Icon = {NotificationsIcon} title="Notifications"/>
                <HeaderOption Icon = {AppsIcon} title="Work"/>

                
                
            </div>

        </div>
    )
}

export default Header
