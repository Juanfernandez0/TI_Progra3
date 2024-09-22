import MovieGrid from "../components/MovieGrid/MovieGrid"
import React from 'react'


const Home = (props) => {
    return (
        <>
          <main>
            <MovieGrid link={"/populares"} titulo={"Peliculas Populares"} limit={5} url={'https://api.themoviedb.org/3/movie/popular?api_key=9c2a46253f55c5578611eba2f0cc979c&language=en-US&page=1'}/>
            <MovieGrid link={"/cartelera"} titulo={"Peliculas en Cartel"} limit={5} url={'https://api.themoviedb.org/3/movie/now_playing?api_key=9c2a46253f55c5578611eba2f0cc979c&language=en-US&page=1'}/>
          </main>
        </>
    )
}

export default Home