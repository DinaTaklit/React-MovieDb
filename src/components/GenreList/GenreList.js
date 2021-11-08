import { useGlobalContext } from '../../context'
import './GenreList.scss'
import {
  fetchMoviesByGenre,
} from '../../services'


function GenreList({genres}) {

    // Get the gloabal context
    const {
      setMoviesByGenre} = useGlobalContext()

    // Function that get the movies by genre after a click on genre
    const handleGenreClick = async(id) => {
      setMoviesByGenre(await fetchMoviesByGenre(id))
    };

    const genreList = genres.map((item, index) => {
        return (
          <li className="list-inline-item" key={index}>
            <button
              type="button"
              className="btn btn-outline-info"
              onClick={() => {
                handleGenreClick(item.id);
              }}
            >
              {item.name}
            </button>
          </li>
        );
      });

    return (
        <div className="row mt-3">
        <div className="col-12">
          <ul className="list-inline">{genreList}</ul>
        </div>
      </div>
    )
}

export default GenreList
