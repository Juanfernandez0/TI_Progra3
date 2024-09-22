import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./MovieCard.css"
import { Link } from "react-router-dom"


class MovieCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showExtra: false,
            esFavorito: false
            
        };

    }

    componentDidMount() {
      const storage = localStorage.getItem('favoritos')
      if (storage !== null) {
        const parsedArray = JSON.parse(storage)
        const estaEnFavoritos = parsedArray.includes(this.props.movie.id)
        this.setState({
          esFavorito: estaEnFavoritos
        })
      }
    }
  
    agregarFavoritos() {
      const storage = localStorage.getItem('favoritos')
      if (storage !== null) {
        const parsedArray = JSON.parse(storage)
        parsedArray.push(this.props.movie.id)
        const stringArray = JSON.stringify(parsedArray)
        localStorage.setItem('favoritos', stringArray)
  
  
      } else {
        const primerMovie = [this.props.movie.id]
        const stringArray = JSON.stringify(primerMovie)
        localStorage.setItem('favoritos', stringArray)
      }
      this.setState({
        esFavorito: true
      })
    }
  
    quitarFavoritos() {
      const storage = localStorage.getItem('favoritos')
      const parsedArray = JSON.parse(storage)
      const favoritosRestantes = parsedArray.filter(id => id !== this.props.movie.id)
      const stringArray = JSON.stringify(favoritosRestantes)
      localStorage.setItem('favoritos', stringArray)
  
      this.setState({
        esFavorito: false
      })
  
    }
  
    verDescripcion() {
      this.setState({
        showExtra: !this.state.showExtra
      });
    }


    render() {
        const { id, title, poster_path, overview } = this.props.peli;
        console.log(this.props.peli);

        return (
            <div className="movie-card">
            <ul className="movie-card-content">
              <li>
                <img src={`https://image.tmdb.org/t/p/w400${poster_path}`} alt={title} className="movie-img" />
              </li>
              <li>
               <Link to={`/movies/${id}`}>{title}</Link>
              </li>
              <li>
                <button className="descripcionBoton" onClick={() => this.verDescripcion()}>
                  {this.state.showExtra ? "Ocultar descripción" : "Ver descripción"}
                </button>
                {this.state.showExtra && <p>{overview}</p>}
                <Link to={`/movies/${id}`}><button className="detalleBoton">Ir a detalle</button></Link>
              </li>
              <li>
                <Link to="/favoritos">
                  <button onClick={this.handleClick} className="favoritosBoton">
                   {!this.state.esFavorito ? "Agregar a favoritos" : "Quitar de favoritos"}
                  </button>
                </Link>
              </li>
              <li>
                <p className="movie-rating">Rating:</p>
              </li>
            </ul>
          </div>
        );
      };
    }



export default MovieCard;