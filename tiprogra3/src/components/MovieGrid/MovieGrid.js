import "./MovieGrid.css";
import { Link } from "react-router-dom";
import { Component } from "react";
import MovieCard from "../MovieCard/MovieCard";

class MovieGrid extends Component {
    constructor(props) {
      super(props);
      this.state = {
        movies: [],
        moviesAMostrar: 5
      };
    }
  
    componentDidMount() {
      const  apiUrl = this.props.url; 
      console.log(apiUrl)
  
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          if (data && data.results) {
            this.setState({ movies: data.results });
          } else {
            console.error("No se encuentran películas");
          }
        })
        .catch(error => console.log(error));
    }

    mostrarMas(){
        this.setState({
            moviesAMostrar: this.state.moviesAMostrar + 6
        });
    };


    render() {
      const { movies , moviesAMostrar} = this.state;
        const { limit, link, titulo } = this.props;

        if (!movies) {
          return <p>Cargando...</p>; 
      }
    
        return (
          <section className='ConteinerPopulares'>
            <div className="titulo_Grup">
              <div className="BotonTitulo">
                <h2 className="SeccionTitulo">
                  {titulo} 
                </h2>
                <ul className="movie-row">
                    {movies.slice(0, moviesAMostrar).map(movies => (
                        <li key={movies.id} className="movie-item">
                            <MovieCard id={movies.id} peli={movies} />
                        </li>
                    ))}
                </ul>
                {limit ? <Link to={link}><button>Ver todas</button></Link> : null}
              </div>
            </div>            
          </section>
        );
      }
    }
    
export default MovieGrid;