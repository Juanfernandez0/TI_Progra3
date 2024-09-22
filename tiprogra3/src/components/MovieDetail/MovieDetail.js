import { Component } from "react";

class MovieDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movie: null

            
        }
    }


componentDidMount() {
    const id = this.props.match.params
    console.log(id);
    
fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=9c2a46253f55c5578611eba2f0cc979c`)
.then((response) => response.json())
.then(movie => {
    this.setState({ movie: movie })
})
.catch (e => console.log(e));


}

render() {

const {movie} = this.state;
console.log(movie);

const { title, poster_path, vote_average, release_date, runtime, overview, genres } = movie;

return (
    <section>
 <div className="movie-card">
            
            
                <img src={`https://image.tmdb.org/t/p/w400${poster_path}`} alt={title} className="movie-img" />
             
            
                <h3 className="movie-title">{title}</h3>
              
                <p> Descripcion: {overview} </p>
                <p> Fecha de Estreno: {release_date} </p>
                <p> Duracion: {runtime} </p>
                <p> Rating: {vote_average} </p>
                <p> Genero: {genres} </p>
             
          </div>



    </section>
)

}
}

export default MovieDetail