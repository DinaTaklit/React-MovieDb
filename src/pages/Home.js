import { useGlobalContext } from '../context'
import MovieCarouselHeader from '../components/MovieCarouselHeader/MovieCarouselHeader'
import GenreList from '../components/GenreList/GenreList'
import MovieCarousel from '../components/MovieCarousel/MovieCarousel'
import PersonsCarousel from '../components/PersonsCarousel/PersonsCarousel'
import Footer from '../components/Footer/Footer'

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
            {/* Header: Now playing movies */}
            <MovieCarouselHeader/>

            {/* Movies By genre */}
            <section className="mt-5"> 
                <GenreList/> 
                <MovieCarousel movies={moviesByGenre}/>
            </section>

            {/* Trending persons of the week */}
            <section  className="my-5">
                <p className="font-weight-bold" style={{ color: "#5a606b" }}>
                    TRENDING PERSONS ON THIS WEEK
                </p>
                <PersonsCarousel persons={trendingPersons}/>
            </section>
            

            {/* Top Rated movies */}
            <section className="my-5"> 
                <p className="font-weight-bold" style={{ color: "#5a606b" }}>
                    TOP RATED MOVIES
                </p>
                <MovieCarousel movies={topRatedMovies}/>
            </section>

            <hr className="mt-5" style={{ borderTop: "1px solid #5a606b" }}></hr>

            {/* Footer */}
            <footer className="mt-5">
                <Footer/>
            </footer>
        </div>
    )
}

export default Home
