import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import * as C from "./style";

const Favorites = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const myList = localStorage.getItem("@primeflix");
    setMovies(JSON.parse(myList) || []);
  }, []);

  const handleDelete = (id) => {
    let filterMovies = movies.filter((item) => {
      return item.id !== id;
    });
    setMovies(filterMovies);
    localStorage.setItem("@primeflix", JSON.stringify(filterMovies));
    toast.success("Filme removido com sucesso!");
  };

  return (
    <C.MyMovies>
      <C.Title>TELA DE FAVORITOS</C.Title>
      {movies.length === 0 && (
        <C.NotList>Você não possui nenhum filme salvo. 😟</C.NotList>
      )}
      <C.List>
        {movies.map((item) => {
          return (
            <C.Movie key={item.id}>
              <C.MovieTitle>{item.title}</C.MovieTitle>
              <C.Details>
                <Link to={`/filme/${item.id}`}>Ver Detalhes</Link>
                <C.Button onClick={() => handleDelete(item.id)}>
                  Excluir
                </C.Button>
              </C.Details>
            </C.Movie>
          );
        })}
      </C.List>
    </C.MyMovies>
  );
};

export default Favorites;
