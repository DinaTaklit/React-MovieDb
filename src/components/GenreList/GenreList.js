import React from 'react'
import './GenreList.scss'

function GenreList({genres}) {

    const handleGenreClick = (id) => {
      
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
        <div className="col">
          <ul className="list-inline">{genreList}</ul>
        </div>
      </div>
    )
}

export default GenreList
