import {Link} from 'react-router-dom'

import {FaPlayCircle} from 'react-icons/fa'
import {FaArrowLeft} from 'react-icons/fa'

import './MovieDetailHeader.scss'
import { useGlobalContext } from '../../context'

import MoviePlayerModal from './MoviePlayerModal'

function MovieDetailHeader({movieDetail, posterVideo}) {

    const {title, posterImage} = movieDetail

    // Get Modalte state from context
    const {setModalIsOpen} = useGlobalContext()

    return (
        <div className="row">
            <div className="col">


                <MoviePlayerModal title ={title} posterVideo={posterVideo}/>

                <div className="movie-poster" >
                    <Link to="/">
                        <FaArrowLeft
                                className="back-button"
                        />
                    </Link>
     
                    <img
                        className="img-fluid"
                        src={posterImage}
                        alt={title}
                    ></img>
                    <div className="movie-body">
                        <div>
                            <FaPlayCircle 
                                className="play-icon"
                                onClick={() => {
                                    setModalIsOpen(true);
                                }}
                            />
                        </div>
                        <div
                            className="caption"
                        >
                            {title}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MovieDetailHeader
