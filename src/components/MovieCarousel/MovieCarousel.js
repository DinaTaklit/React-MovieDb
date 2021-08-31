import React,{useReducer} from 'react'
import { useGlobalContext } from '../../context';
import './MovieCarousel.scss'
import reducer from './reducer.js'
import Slide from './Slide'

function MovieCrousel({offset}) {
    // Get global context 
    const {nowPlayingMovies} = useGlobalContext()

    // Reducer inital state for the carousel
    const initialState = {
      slideIndex: 0,
      slideLength: nowPlayingMovies.length,
    };

    // Use use reducer to dispatch events and take actions
    const [state, dispatch] = useReducer(reducer, initialState)
    
    return (
      <div className="slides py-4">
        <button onClick={() => dispatch({ type: "PREV" })}>‹</button>    
          {[...nowPlayingMovies, ...nowPlayingMovies, ...nowPlayingMovies].map((movie, i) => {
            let offset = nowPlayingMovies.length + (state.slideIndex - i);
            return <Slide slide={movie} offset={offset} key={i} />;
          })}
        <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
      </div>
    )
    
}

export default MovieCrousel
