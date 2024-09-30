import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from "../MovieCard/MovieCard";
import "./VerMas.css";

class VerMas extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            pelis: [],
            pelisAMostrar: 6,
            filteredMovies:[],
            filterValues:"",
            actualPage:1
        };
    }

    componentDidMount() {
        const apiRuta = this.props.ruta; 
    
        fetch(apiRuta)
            .then(response => response.json())
            .then(data => {
                if (data && data.results) {
                    this.setState({ pelis: data.results,
                                    filteredMovies: data.results});
                } else {
                    console.error("No se encuentran películas");
                }
            })
            .catch(error => console.log(error));
    }

    mostrarMas = () => {
        this.setState({
            pelisAMostrar: this.state.pelisAMostrar + 6
        });
    };

    handleFilterChange(e){
        const uservalue = e.target.value;

        this.setState({
            filterValues: uservalue,
            actualPage: 1,
            pelisAMostrar: 6,
            filteredMovies: this.state.pelis.filter(peli  => peli.title.toLowerCase().includes(uservalue.toLowerCase()))    ,
        });
    }

    render() {
        const { pelis, pelisAMostrar, filteredMovies } = this.state;

        if (!pelis) {
            return <p>Cargando...</p>; 
        }
        
        return ( 
            <div className="movie-grid-container">

            <ul className="search-list">
              <li>  <input  className="btn-ver-mas" type="text" placeholder="Buscar película..." value={this.state.filterValues} onChange={(e) => this.handleFilterChange(e)} /></li>
              <li> <p className="search-result" >Resultados de busqueda para: {this.props.busqueda}</p> </li>
            </ul>

                <ul className="movie-row">

                    {filteredMovies.slice(0, pelisAMostrar).map(peli => (
                        <li key={peli.id} className="movie-item">
                            <MovieCard id={peli.id} peli={peli} />
                        </li>
                    ))}
                </ul>
                {pelisAMostrar < pelis.length && (
                    <button className="button-vermas" onClick={() => this.mostrarMas()}>
                        Ver más
                    </button>
                )}
            </div>
        );
    }
}

export default VerMas;