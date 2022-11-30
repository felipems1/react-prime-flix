import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 60px;
  background-color: #000;
`;

export const Logo = styled.p`
  a {
    text-decoration: none;
    font-size: 30px;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
  }
`;

export const Favorites = styled.p`
  a {
    background-color: #fff;
    padding: 5px 14px;
    color: #000;
    border-radius: 4px;
    cursor: pointer;
    text-decoration: none;
  }
`;
