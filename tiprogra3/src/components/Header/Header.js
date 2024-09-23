import "./Header.css"
import { Link } from "react-router-dom"
import React from 'react'
import { Component } from "react"



const Header = (props) => {
    return (

       <nav className="navbar">
         <div className="logo">
            <img src="./colibr-cines-high-resolution-logo-transparent.png" alt="logo" />
         </div>
         <a className="navbar-brand">CineBox</a>
         <ul className="main-nav">
             <li><Link to="/">Home</Link></li>
             <li><Link to="/ver_todas">Ver todas</Link></li>
             <li><Link to='/favoritos'>Favoritos</Link></li>
         </ul>
         <ul className="user">
             <li>Nombre usuario <img src="./img/user.jpg" alt="Usuario" className="user-img"/></li>
         </ul>
       </nav>
    )
}

export default Header