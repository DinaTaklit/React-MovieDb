
import ReactStars from "react-rating-stars-component";

function MovieDetailInfo({movieDetail}) {
    const {vote_average, overview, release_date, runtime, budget, homepage} = movieDetail
    return (
        <section>
            <div className="text-center">
                <ReactStars
                className="RateStar"
                count={vote_average}
                ></ReactStars>
            </div>
            <div className="mt-3">
                <p className="title">OVERVIEW</p>
                {overview}
            </div>

            <div className="row mt-3">
                <div className="col-md-3">
                    <p className="title">RELEASE DATE</p>
                    <p className="movie-info">{release_date}</p>
                </div>
                <div className="col-md-3">
                    <p className="title">RUN TIME</p>
                    <p className="movie-info">{runtime}</p>
                </div>
                <div className="col-md-3">
                    <p className="title">BUDGET</p>
                    <p className="movie-info">{budget}</p>
                </div>
                <div className="col-md-3">
                    <p className="title">HOMEPAGE</p>
                    <p className="movie-info">{homepage}</p>
                </div>
            </div>
      </section>
    )
}

export default MovieDetailInfo
