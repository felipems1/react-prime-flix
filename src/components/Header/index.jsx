import * as C from "./style";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <C.Header>
      <C.Logo>
        <Link to="/">Prime Flix</Link>
      </C.Logo>
      <C.Favorites>
        <Link to="/favoritos">Meus Filmes</Link>
      </C.Favorites>
    </C.Header>
  );
};

export default Header;
