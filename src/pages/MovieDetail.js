import {useState, useEffect} from 'react'
import { useGlobalContext } from '../context'
import MovieDetailHeader from '../components/MovieDetail/MovieDetailHeader'
import {
    fetchMovieDetail
} from '../services'

function MovieDetail({match}) {

   // Get global context
    const {loading, setLoading} = useGlobalContext()

    // Global state for movie detail
    const [movieDetail, setMovieDetail] = useState({});

    // Global state to get params (id) from url for single movie
    const [movieId, setMovieId] = useState(match.params.id);
    
    useEffect(() => {
        setLoading(true)
        const fetchAPI = async() =>{
            setMovieDetail(await fetchMovieDetail(movieId))
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
        <section className="container">
            <MovieDetailHeader movieDetail={movieDetail}/>
        </section>
    )
}

export default MovieDetail
