import MovieDetail  from '../components/MovieDetail/MovieDetail'

const MovieDetailPage = (props) => {
    return (
        <>
        <main>
        <MovieDetail {...props}/>
        </main>
        </>
    )
}

export default MovieDetailPage