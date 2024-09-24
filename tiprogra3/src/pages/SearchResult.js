import { Component } from 'react'
import MovieCard  from '../components/MovieCard/MovieCard'

export class SearchResult extends Component {
  constructor(props){
    super(props)
    this.state = {
      pelis: []

    }
  }

  componentDidMount() {
    const query = this.props.location.state.query;

    if (query) {
      const apiKey = '9c2a46253f55c5578611eba2f0cc979c';
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`)
        .then(response => response.json())
        .then(data => {
          this.setState({ pelis: data.results });
        })
        .catch(error => {
          this.setState({ error: `No hay peliculas relacionadas con el titulo:${this.props.location.state.query}` });
        });
    }
  }

  render() {
    const { pelis, error } = this.state;

    return (
      <div className='main-container'>
        Resultados de busqueda de : {this.props.location.state.query}


        <div className=''>
          {pelis.length > 0 ? (
            pelis.map((peli) => (
              <MovieCard peli={peli}/>
            ))
          ) : (
            <p>No se encontraron resultados.</p>
          )}
        </div>

      </div>
    )
  }
}

export default SearchResult
