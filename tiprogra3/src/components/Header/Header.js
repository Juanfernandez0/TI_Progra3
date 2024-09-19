import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
    return (

       <nav className="navbar">
         <a className="navbar-brand">CineBox</a>
         <ul className="main-nav">
             <li><Link to="/">Home</Link></li>
             <li><Link to="/ver_todas">Ver todas</Link></li>
         </ul>
         <ul className="user">
             <li>Nombre usuario <img src="./img/user.jpg" alt="Usuario" className="user-img"/></li>
         </ul>
       </nav>
    )
}

export default Header