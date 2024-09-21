import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./MovieCard.css"


class MovieCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showExtra: false,
            esFavorito: false
            
        };

    }


    render() {
        const { id, title, poster_path, overview } = this.props.peli;

        return (
            <div className="movie-card">
            <ul className="movie-card-content">
              <li>
                <img src={`https://image.tmdb.org/t/p/w400${poster_path}`} alt={title} className="movie-img" />
              </li>
              <li>
                <h3 className="movie-title">{title}</h3>
              </li>
              <li>
                <p className="movie-description">Descripción breve de la película</p>
              </li>
              <li>
                <p className="movie-rating">Rating:</p>
              </li>
            </ul>
          </div>
        );
      };
    }



export default MovieCard;