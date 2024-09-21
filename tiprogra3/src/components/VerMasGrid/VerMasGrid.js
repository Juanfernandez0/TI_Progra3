import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from "../MovieCard/MovieCard"
import "./VerMas.css";

class VerMas extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            pelis : []
        }
    }

    componentDidMount() {
        const  apiRuta = this.props.ruta; 
    
        fetch(apiRuta)
        .then(response => response.json())
        .then(data => {
          if (data && data.results) {
            this.setState({ pelis: data.results.slice(0, 6) });
        } else {
          console.error("No se encuentran películas");
        }
      })
      .catch(error => console.log(error));

        
    }

    
    render(){

        const { pelis }= this.state



        return ( 
        <div className="movie-grid-container">
            <ul className="movie-row">
              {pelis.map(peli => (
                <li key={peli.id} className="movie-item">
                  <MovieCard id={peli.id} peli={peli} />
                </li>
              ))}
            </ul>
          </div>
        );
    
}}


export default VerMas;
