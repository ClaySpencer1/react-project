import { useState, useEffect } from "react";
import "./filmsListStyle.css";

function FilmsList(props) {
  let [list, setList] = useState([])


  function getFilms() {
    fetch("https://studioghibliapi-d6fc8.web.app/films")
      .then((response) => response.json())
      .then((films) => setList(films))
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    getFilms()
  }, []);

  
    return (
      <ul className="tileGrid">
       {list.map((film) => {
          return <li key={film.id}>
          <h2>{film.title}</h2>
            <img src={`${film.image}`} alt="Film Poster" />
          </li>;
        })}
      </ul>
    );
  }


export default FilmsList;