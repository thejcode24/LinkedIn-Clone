import React from 'react'
import { Avatar } from "@material-ui/core"
import './Sidebar.css'

function Sidebar() {

    // Recent item hashtag item function
    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" 
                    alt="" 
                />
                <Avatar className="sidebar__avatar"/>
                <h2>James Jung</h2>
                <h4>james.jung@gmail.com</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">1234</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">4321</p>
                </div>
                <div className="sidebar__bottom">
                    <p>Recent</p>
                    {recentItem("reactjs")}
                    {recentItem("programming")}
                    {recentItem("software")}
                    {recentItem("design")}
                    {recentItem("developer jobs")}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
