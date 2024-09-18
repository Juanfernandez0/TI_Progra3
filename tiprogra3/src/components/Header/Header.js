import "./Header.css"
import { link } from "react-router-dom"

const Header = () => {
    return (
        <nav>
      <ul class="main-nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/favoritos">Favoritos</Link></li>
        <li><Link to="/ver_todas">Ver todas</Link></li>
      </ul>
      <ul class="user">
        <li>Nombre usuario <img src="./img/user.jpg" alt="" /></li>
      </ul>
    </nav>
    )
}

export default Header