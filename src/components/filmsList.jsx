import { Component } from "react";
import "./filmsListStyle.css";

class FilmsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
    };
  }

  getFilms() {
    fetch("https://studioghibliapi-d6fc8.web.app/films")
      .then((response) => response.json())
      .then((films) => this.setState({ list: films }))
      .catch((error) => console.error(error));
  }

  componentDidMount() {
    this.getFilms();
  }

  render() {
    return (
      <ul className="tileGrid">
        {this.state.list.map((film) => {
          return <li key={film.id}>
          <h2>{film.title}</h2>
            <img src={`${film.image}`} alt="Film Poster" />
          </li>;
        })}
      </ul>
    );
  }
}

export default FilmsList;