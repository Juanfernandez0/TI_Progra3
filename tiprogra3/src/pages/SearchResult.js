import { Component } from 'react'
import VerMas from '../components/VerMasGrid/VerMasGrid'

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
    const query = this.props.location.state.query;
    const apiKey = '9c2a46253f55c5578611eba2f0cc979c';

    return (


      <div>          
            {pelis.length > 0 ? ( 
              <VerMas ruta={`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`} busqueda ={this.props.location.state.query}/>
          ) : (
            <p>No se encontraron resultados.</p>
          )}
    
        </div>

    )
  }
}

export default SearchResult
