import { Link } from "react-router-dom";
import * as C from "./style";

const Erro = () => {
  return (
    <C.NotFound>
      <C.Title>404</C.Title>
      <C.SubTitle>Página não encontrada!</C.SubTitle>
      <C.Movies>
        <Link to="/">Veja todos filmes</Link>
      </C.Movies>
    </C.NotFound>
  );
};

export default Erro;
