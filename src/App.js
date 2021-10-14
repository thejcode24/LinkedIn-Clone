import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Login from './Login'

import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice"

function App() {

  const user = useSelector(selectUser)

  return (
    <div className="app">

      <Header />
      
      {/*If no User, render Login page, otherwise render app */}
      {!user ? ( 
        <Login />
      ) : (
        
      <div className="app__body">
        <Sidebar />
        <Feed />
        {/* Widgets */}
      </div>
      )}
    </div>
  );
}

export default App;
