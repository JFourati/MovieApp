import React, { Component } from "react";
import NameFilter from "./NameFilter";
import RatingFilter from "./RatingFilter";
import MovieList from "./MovieList";

const harryPotter = {
  id: "harry",
  title: "Harry Potter and the Prisoner of Azkaban",
  rating: 5,
  image:
    "https://uploads.codesandbox.io/uploads/user/7e26aa09-540f-4bc0-98b7-d53f39c63330/8py_-potter.jpg",
  year: 2004
};

const maleficent = {
  id: "maleficent",
  title: "Maleficent",
  rating: 3,
  image:
    "https://uploads.codesandbox.io/uploads/user/7e26aa09-540f-4bc0-98b7-d53f39c63330/QNfF-malificent.jpg",
  year: 2014
};

const missionImpossible = {
  id: "malemissionficent",
  title: "Mission Impossible",
  rating: 1,
  image:
    "https://uploads.codesandbox.io/uploads/user/7e26aa09-540f-4bc0-98b7-d53f39c63330/dsKj-mission-impossible.jpg",
  year: 2018
};
const moviesToDisplay = [missionImpossible, harryPotter, maleficent];

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minRatingFilter: 1,
      movies: moviesToDisplay,
      titleFilter: ""
    };
  }

  addNewMovie(newMovie) {
    this.setState({
      movies: this.state.movies.concat(newMovie)
    });
  }

  getVisibleMovies() {
    return this.state.movies.filter(
      el =>
        el.rating >= this.state.minRatingFilter &&
        el.title
          .toLowerCase()
          .includes(this.state.titleFilter.toLowerCase().trim())
    );
  }
  render() {
    return (
      <div className="movie-app">
        <header className="movie-app-header">
          <NameFilter
            value={this.state.titleFilter}
            onChange={newTitleFilter => {
              this.setState({
                titleFilter: newTitleFilter
              });
            }}
          />
          <RatingFilter
            count={this.state.minRatingFilter}
            onChange={newRating => {
              this.setState({
                minRatingFilter: newRating
              });
            }}
          />
        </header>
        <main className="movie-app-main">
          <MovieList
            movies={this.getVisibleMovies()}
            onAddMovie={newMovie => this.addNewMovie(newMovie)}
          />
        </main>
      </div>
    );
  }
}

export default Movie;
