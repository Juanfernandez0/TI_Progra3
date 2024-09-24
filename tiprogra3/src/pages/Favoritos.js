import React, { Component } from "react"
import MovieGrid from '../components/MovieGrid/MovieGrid'
import FavoritosComponent from "../components/FavoritosComponent/FavoritosComponent"; // Importa el nuevo componente


class Favoritos extends Component {

    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            isLoading: true
        }
    }


    componentDidMount() {
        this.setState({ isLoading: true })
        const storage = localStorage.getItem('favoritos')
        if (storage !== null) {
        const parsedArray = JSON.parse(storage)
        Promise.all(
            parsedArray.map((id) => 
              fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=9c2a46253f55c5578611eba2f0cc979c`)
                .then(response => response.json())
            )
          ).then((data) => {
            this.setState({
              movies: data,
              isLoading: false
            });
          }).catch((error) => {
            console.error("Error fetching movies:", error);
            this.setState({ isLoading: false });
          });
        this.setState({ isLoading: false })
    }
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
    render() {
        const { movies, isLoading } = this.state; // Destructura correctamente el estado
    
        return (
            <div>
                <h1 className="favoritos-title">Estas son tus Peliculas favoritas:</h1>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <div className="favorites-grid">
                        {movies.map((movie) => (
                            <FavoritosComponent key={movie.id} movie={movie} />
                        ))}
                        
                    </div>
                )}
            </div>
        );
    }
    
}

export default Favoritos