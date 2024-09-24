import React, { Component } from "react";
import "./FavoritosComponent.css";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom"
class FavoritosComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      esFavorito: true, // Por defecto, asumimos que la película es favorita
    };
  }

  quitarFavoritos = () => {
    const { movie } = this.props;

    const storage = localStorage.getItem("favoritos");
    const parsedArray = JSON.parse(storage);

    const favoritosRestantes = parsedArray.filter((id) => id !== movie.id);
    const stringArray = JSON.stringify(favoritosRestantes);

    localStorage.setItem("favoritos", stringArray);

    this.setState({
      esFavorito: false,
    });
  };

  render() {
    const { movie } = this.props;

    return (
      <div className="movie-card">
        <ul className="movie-card-content">
          <li>
            <img
              src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
              alt={movie.title}
              className="movie-img"
            />
          </li>
          <li>
            <h3 className="movie-title">{movie.title}</h3>
          </li>
          <li>
            <p className="movie-description">{movie.overview}</p>
          </li>
          <Link to={`/movies/${movie.id}`}><button className="detalleBoton">Ir a detalle</button></Link>
          <li className="favoritos-container">
          <button onClick={() => { this.state.esFavorito ? this.quitarFavoritos() : this.agregarFavoritos()}}
              className="favoritosBoton"
            >
              {this.state.esFavorito ? <FaHeart size={20} color="red" /> : <FaRegHeart size={20} />}
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default FavoritosComponent;
