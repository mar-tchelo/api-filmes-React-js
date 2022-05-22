import { Container, MovieList, Movie } from "./styles";
import { APIKey } from "../../config/key";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";



function Home() {
  const [movies, setMovies] = useState([]);
  const image_path = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    //consumir a api
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=pt-BR&page=1`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, []);

  // const movies = [
  //   {
  //     id: 1,
  //     title: "Spider-main",
  //     image_url:
  //       "https://i.pinimg.com/564x/7f/d9/19/7fd919e572a85e8a42152a4f4c29dced.jpg",
  //   },
  //   {
  //     id: 2,
  //     title: "Spider-main",
  //     image_url:
  //       "https://i.pinimg.com/564x/7f/d9/19/7fd919e572a85e8a42152a4f4c29dced.jpg",
  //   },
  //   {
  //     id: 3,
  //     title: "Avangers",
  //     image_url:
  //       "https://i.pinimg.com/564x/7f/d9/19/7fd919e572a85e8a42152a4f4c29dced.jpg",
  //   },
  // ];

  return (
    <Container>
      <h1>Movies</h1>
      <MovieList>
        {movies.map((movie) => {
          return (
            <Movie key={movie.id}>

              <Link to={`/details/${movie.id}`}>

                <img src={`${image_path}${movie.poster_path}`} alt={movie.title} />

              </Link>
              <span>{movie.title}</span>
            </Movie>
          );
        })}
      </MovieList>
    </Container>
  );
}

export default Home;
