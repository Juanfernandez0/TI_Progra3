import React, { Component } from 'react';
import "./MovieCard.css"
import { Link } from "react-router-dom"
import { FaRegHeart, FaHeart } from "react-icons/fa";
class MovieCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showExtra: false,
      esFavorito: false

    };

  }

  componentDidMount() {

    const { peli } = this.props

    const storage = localStorage.getItem('favoritos')
    if (storage !== null) {
      const parsedArray = JSON.parse(storage)
      const estaEnFavoritos = parsedArray.includes(peli.id)
      this.setState({
        esFavorito: estaEnFavoritos
      })
    }
  }

  agregarFavoritos() {
    const { peli } = this.props

    const storage = localStorage.getItem('favoritos')
    if (storage !== null) {
      const parsedArray = JSON.parse(storage)
      parsedArray.push(peli.id)
      const stringArray = JSON.stringify(parsedArray)
      localStorage.setItem('favoritos', stringArray)


    } else {
      const primerMovie = [this.props.id]
      const stringArray = JSON.stringify(primerMovie)
      localStorage.setItem('favoritos', stringArray)
    }
    this.setState({
      esFavorito: true
    })
  }

  quitarFavoritos() {
    const { peli } = this.props

    const storage = localStorage.getItem('favoritos')
    const parsedArray = JSON.parse(storage)
    const favoritosRestantes = parsedArray.filter(id => id !== peli.id)
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

    if (!title) {
      return <p>Cargando...</p>; 
  }

    return (

      <div className="movie-card" >
        <ul className="movie-card-content" >
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

            <button onClick={() => { this.state.esFavorito ? this.quitarFavoritos() : this.agregarFavoritos()}}
              className="favoritosBoton"
            >
              {this.state.esFavorito ? <FaHeart size={20} color="red" /> : <FaRegHeart size={20} />}
            </button>


          </li>
        </ul>
      </div>
    );
  };
}



export default MovieCard;