import React, { Component } from 'react'
import VerMas from '../components/VerMasGrid/VerMasGrid';



const VerCartelera = () => {
    return (
    <div>
        <h1>Peliculas en Cartelera</h1>
        <VerMas ruta ={'https://api.themoviedb.org/3/movie/now_playing?api_key=9c2a46253f55c5578611eba2f0cc979c&language=en-US&page=1'}/>
    </div>
    )
  };
  
  export default VerCartelera;
  