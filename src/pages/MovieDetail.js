import {useState, useEffect} from 'react'
import { useGlobalContext } from '../context'

import MovieDetailHeader from '../components/MovieDetail/MovieDetailHeader'
import GenreList from '../components/GenreList/GenreList'
import MovieDetailInfo from '../components/MovieDetail/MovieDetailInfo'
import PersonsCarousel from '../components/PersonsCarousel/PersonsCarousel'
import MovieCarousel from '../components/MovieCarousel/MovieCarousel'
import Footer from '../components/Footer/Footer'

import {
    fetchMovieDetail,
    fetchMovieVideo,
    fetchMovieCasts,
    fetchSimilarMovies,
} from '../services'

function MovieDetail({match}) {

   // Get global context
    const {loading, setLoading} = useGlobalContext()

    // Movie detail state
    const [movieDetail, setMovieDetail] = useState({});

    // Movie video state
    const [posterVideo, setPosterVideo] = useState('');

    // Movie Id state
    const [movieId, setMovieId] = useState(match.params.id);
    
    // Movie casts state
    const [movieCasts, setMovieCasts] = useState([]);

    // Similar movies state
    const [similarMovies, setSimilarMovies] = useState([]);

    useEffect(() => {
        setLoading(true)
        const fetchAPI = async() =>{
            setMovieDetail(await fetchMovieDetail(movieId))
            setPosterVideo( await fetchMovieVideo(movieId))
            setMovieCasts(await fetchMovieCasts(movieId))
            setSimilarMovies(await fetchSimilarMovies(movieId))
        }
        fetchAPI()
        setLoading(false)
    }, [movieId])


    if(loading){
        return(
            <div>
                Loading..
            </div>
        )
    }

    return (
        <>
            <main className="container">
                {/* Movie Poster */}
                <MovieDetailHeader movieDetail={movieDetail} posterVideo={posterVideo}/>
                {
                    movieDetail.genres && <GenreList genres={movieDetail.genres}/>
                }
                {/* Movie Detail Info */}
                <MovieDetailInfo movieDetail={movieDetail}/>

                {/* Movie Cast */}
                <div className="mt-3">
                    <p className="title">CASTS</p>
                    <PersonsCarousel persons={movieCasts}/>
                </div>

                {/* Similar movies */}
                <div className="mt-3">
                    <p className="title">SIMILAR MOVIES</p>
                    <MovieCarousel movies={similarMovies}/>
                </div>
            </main>
        
            <footer className="container mt-5">
                <Footer/>
            </footer>
        </>
    )
}

export default MovieDetail
