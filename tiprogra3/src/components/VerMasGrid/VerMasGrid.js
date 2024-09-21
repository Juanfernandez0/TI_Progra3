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
              this.setState({ movies: data.results });
            } else {
              console.error("No se encuentran películas");
            }
          })
          .catch(error => console.log(error));
      }
    render(){
        return (
                    <div className="movie-grid-container">
        <ul className="movie-row">
            <li className="movie-item"> <MovieCard /> </li>
            <li className="movie-item"> <MovieCard /> </li>
            <li className="movie-item"> <MovieCard /> </li>
        </ul>

        <ul className="movie-row">
            <li className="movie-item"> <MovieCard /> </li>
            <li className="movie-item"> <MovieCard /> </li>
            <li className="movie-item"> <MovieCard /> </li>
        </ul>

        <ul className="movie-row">
            <li className="movie-item"> <MovieCard /> </li>
            <li className="movie-item"> <MovieCard /> </li>
            <li className="movie-item"> <MovieCard /> </li>
        </ul>
        </div>

        );
    
}}


export default VerMas;
