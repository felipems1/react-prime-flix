import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import * as C from "./style";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    const response = await api.get("movie/now_playing", {
      params: {
        api_key: "eb885dfc7301ff6be60fe4c46a83525c",
        language: "pt-BR",
        page: 1,
      },
    });
    setMovies(response.data.results.slice(0, 10));
    setLoading(false);
  };

  if (loading) {
    return (
      <C.Loading>
        <C.LoadingTitle>Carregando filmes...</C.LoadingTitle>
      </C.Loading>
    );
  } else {
    return (
      <C.Container>
        <C.MovieList>
          {movies.map((movie) => (
            <C.Article key={movie.id}>
              <C.Title>{movie.title}</C.Title>
              <C.Photo
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
              />
              <C.Details>
                <Link to={`/filme/${movie.id}`}>Acessar</Link>
              </C.Details>
            </C.Article>
          ))}
        </C.MovieList>
      </C.Container>
    );
  }
};

export default Home;
