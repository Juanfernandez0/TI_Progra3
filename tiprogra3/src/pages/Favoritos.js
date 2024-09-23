import React, { Component } from "react"
import MovieGrid from '../components/MovieGrid/MovieGrid'

class Favoritos extends Component {

    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            isLoading: true
        }
    }


    componentDidMount() {
        this.setState({ isLoading: true })
        const storage = localStorage.getItem('favoritos')
        if (storage !== null) {
        const parsedArray = JSON.parse(storage)
        Promise.all(
            parsedArray.map((id) => {
                fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=9c2a46253f55c5578611eba2f0cc979c`)
                    .then(response => response.json())
            }).then(data =>
                this.setState({ 
                    movies: data
                })
            )
        )
        this.setState({ isLoading: false })
    }
    }


    render() {
        return (
            <div> {!this.state.isLoading ? <MovieGrid /> : <p> Loading...</p>}</div>
        )
    }
}

export default Favoritos