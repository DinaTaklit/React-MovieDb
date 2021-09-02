import { useGlobalContext } from '../context'
import MovieCarouselHeader from '../components/MovieCarouselHeader/MovieCarouselHeader'
import GenreList from '../components/GenreList/GenreList'
import MovieCarousel from '../components/MovieCarousel/MovieCarousel'
import PersonsCarousel from '../components/PersonsCarousel/PersonsCarousel'
function Home() {

    // Get global context 
    const{loading, moviesByGenre, trendingPersons, topRatedMovies}= useGlobalContext()
        
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
            <section className="mt-4"> 
                <p className="font-weight-bold" style={{ color: "#5a606b" }}>
                    TOP RATED MOVIES
                </p>
                <MovieCarousel movies={topRatedMovies}/>
            </section>
        </div>
    )
}

export default Home
