import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './MovieCarousel.scss'

function MovieCarousel({movies}) {

    const movieList = movies.map((movie) => {
        const {id, title, poster, rating} = movie;
        return (
          <div key={id} className="movie-wrapper">
            <div className="card">
              <Link to={`/movie/${id}`}>
                <img className="img-fluid" src={poster} alt={title}></img>
              </Link>
            </div>
            <div className="mt-2">
              <p style={{ fontWeight: "bolder" }}>{title}</p>
              <p>Rated: {rating}</p>
              <ReactStars
                count={rating}
                size={20}
                color1={"#f4c10f"}
              ></ReactStars>
            </div>
          </div>
        );
    });

    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
      },
      tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 2
      },
      smallTablet: {
        breakpoint: { max: 768, min: 464 },
        items: 2
      },
      Mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };

    return (
      <div className="row mt-3">
        <div className="col">
        <Carousel 
          responsive={responsive}
          // draggable={true}
          // infinite={true}
          // autoPlay={true}
          // autoPlaySpeed={1000}
          // keyBoardControl={true}
          // customTransition="all .5"
          // transitionDuration={500}
          // containerClass="carousel-container"
          // removeArrowOnDeviceType={["tablet", "mobile"]}
          // itemClass="carousel-item-padding-40-px"
        >
          {movieList}
        </Carousel>
        </div>
      </div>
    )
}

export default MovieCarousel
