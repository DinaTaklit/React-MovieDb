import {useState, useEffect} from 'react'
import { useGlobalContext } from '../context'
import MovieDetailHeader from '../components/MovieDetail/MovieDetailHeader'
import GenreList from '../components/GenreList/GenreList'
import MovieDetailInfo from '../components/MovieDetail/MovieDetailInfo'

import {
    fetchMovieDetail,
    fetchMovieVideo,
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
    
    useEffect(() => {
        setLoading(true)
        const fetchAPI = async() =>{
            setMovieDetail(await fetchMovieDetail(movieId))
            setPosterVideo( await fetchMovieVideo(movieId))
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
        <main className="container">
            {/* Movie Poster */}
            <MovieDetailHeader movieDetail={movieDetail} posterVideo={posterVideo}/>
            {
                movieDetail.genres && <GenreList genres={movieDetail.genres}/>
            }
            {/* Movie Detail Info */}
            <MovieDetailInfo movieDetail={movieDetail}/>

        </main>
    )
}

export default MovieDetail
