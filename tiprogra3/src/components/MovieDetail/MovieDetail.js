import { Component } from "react";
import './MovieDetail.css';

class MovieDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: null,
        };
    }

    componentDidMount() {
        const { id } = this.props.match.params; 

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=9c2a46253f55c5578611eba2f0cc979c`)
            .then((response) => {
                return response.json();
            })
            .then(movie => {
                this.setState({ movie });
            })
            .catch(e => console.log("Error al cargar la película:", e));
    }

    render() {
        const { movie } = this.state;

        if (!movie) {
            return <p>Cargando...</p>; 
        }

        const { title, poster_path, vote_average, release_date, runtime, overview, genres } = movie;

        return (
            <section className="movie-detail">
            <img src={`https://image.tmdb.org/t/p/w400${poster_path}`} alt={title} className="movie-img-detail" />
            <h3 className="movie-title-detail">{title}</h3>
            <p className="movie-description-detail">Sinopsis: {overview}</p>
            <p className="movie-release-detail">Fecha de Estreno: {release_date}</p>
            <p className="movie-runtime-detail">Duración: {runtime} minutos</p>
            <p className="movie-rating-detail">Rating: {vote_average}</p>
            <p className="movie-genres-detail">Géneros: {genres.map(genre => genre.name).join(', ')}</p>
        </section>
        );
    }
}

export default MovieDetail;
