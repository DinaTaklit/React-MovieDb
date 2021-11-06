import {FaPlayCircle} from 'react-icons/fa'
import './MovieDetailHeader.scss'

function MovieDetailHeader({movieDetail}) {
    const {title, poster} = movieDetail

    return (
        <div className="MoviePoster" 
                style={{
                    background: `url(${poster})`,
                    }}
                >

                <div>
                    <FaPlayCircle 
                        className="play-icon"
                    />
                </div>
                <div
                    className="caption"
                >
                    {title}
                </div>
        </div>
    )
}

export default MovieDetailHeader
