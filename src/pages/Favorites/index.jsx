import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as C from "./style";

const Favorites = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const myList = localStorage.getItem("@primeflix");
    setMovies(JSON.parse(myList) || []);
  }, []);
  return (
    <C.MyMovies>
      <C.Title>TELA DE FAVORITOS</C.Title>
      <C.List>
        {movies.map((item) => {
          return (
            <C.Movie key={item.id}>
              <C.MovieTitle>{item.title}</C.MovieTitle>
              <C.Details>
                <Link to={`/filme/${item.id}`}>Ver Detalhes</Link>
                <C.Button>Excluir</C.Button>
              </C.Details>
            </C.Movie>
          );
        })}
      </C.List>
    </C.MyMovies>
  );
};

export default Favorites;
