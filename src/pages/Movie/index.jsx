import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as C from "./style";
import api from "../../services/api";
import { toast } from "react-toastify";

const Movie = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMovie();

    return () => {};
  }, [navigate, id]);

  const loadMovie = async () => {
    await api
      .get(`/movie/${id}`, {
        params: {
          api_key: "eb885dfc7301ff6be60fe4c46a83525c",
          language: "pt-BR",
        },
      })
      .then((response) => {
        setMovie(response.data);
        setLoading(false);
      })
      .catch(() => {
        console.log("FILME NÂO ENCONTRADO!");
        navigate("/");
      });
  };

  const salveMovie = () => {
    const myList = localStorage.getItem("@primeflix");

    let savedMovies = JSON.parse(myList) || [];

    const hasMovie = savedMovies.some(
      (savedMovies) => savedMovies.id === movie.id
    );

    if (hasMovie) {
      toast.warn("Esse filme já está na sua lista!");
      return;
    }

    savedMovies.push(movie);
    localStorage.setItem("@primeflix", JSON.stringify(savedMovies));
    toast.success("Filme salvo com sucesso!");
  };

  if (loading) {
    return (
      <C.MovieInfo>
        <C.InfoTitle>Carregando detalhes...</C.InfoTitle>
      </C.MovieInfo>
    );
  } else {
    return (
      <C.MovieInfo>
        <C.Title>{movie.title}</C.Title>
        <C.Photo
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt={movie.title}
        />
        <C.Sinopse>Sinopse</C.Sinopse>
        <C.Description>{movie.overview}</C.Description>
        <C.Evaluation>Avaliação: {movie.vote_average}</C.Evaluation>
        <C.AreaButtons>
          <C.Button onClick={salveMovie}>Salvar</C.Button>
          <C.Button>
            <C.Link
              target="blank"
              rel="external"
              href={`https://youtube.com/results?search_query=${movie.title} Trailer`}
            >
              Trailer
            </C.Link>
          </C.Button>
        </C.AreaButtons>
      </C.MovieInfo>
    );
  }
};

export default Movie;
