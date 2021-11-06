import {FaPlayCircle} from 'react-icons/fa'
import './MovieDetailHeader.scss'
import { useGlobalContext } from '../../context'

import MoviePlayerModal from './MoviePlayerModal'

function MovieDetailHeader({movieDetail, posterVideo}) {

    const {title, posterImage} = movieDetail

    // Get Modalte state from context
    const {setModalIsOpen} = useGlobalContext()

    return (
        <section className="row">

            <MoviePlayerModal title ={title} posterVideo={posterVideo}/>

            <div className="MoviePoster" 
                    style={{
                        background: `url(${posterImage})`,
                        }}
                    >
                    <div style={{zIndex:1}}>
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
        </section>

    )
}

export default MovieDetailHeader
