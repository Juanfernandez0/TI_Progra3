import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from "../MovieCard/MovieCard";
import "./VerMas.css";

class VerMas extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            pelis: [],
            pelisAMostrar: 6
        };
    }

    componentDidMount() {
        const apiRuta = this.props.ruta; 
    
        fetch(apiRuta)
            .then(response => response.json())
            .then(data => {
                if (data && data.results) {
                    this.setState({ pelis: data.results });
                } else {
                    console.error("No se encuentran películas");
                }
            })
            .catch(error => console.log(error));
    }

    mostrarMas(){
        this.setState({
            pelisAMostrar: this.state.pelisAMostrar + 6
        });
    };

    render() {
        const { pelis, pelisAMostrar } = this.state;
        
        return ( 
            <div className="movie-grid-container">
                <ul className="movie-row">
                    {pelis.slice(0, pelisAMostrar).map(peli => (
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