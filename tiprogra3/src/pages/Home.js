import MovieGrid from "../components/MovieGrid/MovieGrid"


const Home = (props) => {
    return (
        <>
          <main>
            <MovieGrid link={"/populares"} titulo={"Peliculas Populares"} limit={5} url={''}/>
            <MovieGrid link={"/cartel"} titulo={"Peliculas en Cartel"} limit={5} url={''}/>
          </main>
        </>
    )
}

export default Home