import { useGlobalContext } from '../context'
import MovieCarouselHeader from '../components/MovieCarouselHeader/MovieCarouselHeader'
import GenreList from '../components/GenreList/GenreList'
import MovieCarousel from '../components/MovieCarousel/MovieCarousel'
import PersonsCarousel from '../components/PersonsCarousel/PersonsCarousel'
function Home() {

    // Get global context 
    const{loading, moviesByGenre, trendingPersons}= useGlobalContext()
        
    if(loading) {
        return (
            <div className="container">
                Loading...
            </div>
        )
    }
    return (
        <div className="container">
            <MovieCarouselHeader/>
            <GenreList/> 
            <MovieCarousel movies={moviesByGenre}/>
            <PersonsCarousel persons={trendingPersons}/>
        </div>
    )
}

export default Home
