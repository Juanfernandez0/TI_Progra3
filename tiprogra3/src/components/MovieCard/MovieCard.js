import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./MovieCard.css"


class MovieCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: props.movie,
        };

    }


    render() {
        return (
            <div className="movie-card">
            <ul className="movie-card-content">
              <li>
                <img src="" alt="Movie-img" className="movie-img" />
              </li>
              <li>
                <h3 className="movie-title">Título de la película</h3>
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