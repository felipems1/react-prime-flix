import styled from "styled-components";

export const MyMovies = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  margin-bottom: 24px;
`;

export const List = styled.ul`
  width: 720px;
  max-width: 100%;
`;

export const Movie = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 14px;
`;

export const MovieTitle = styled.span`
  font-size: 18px;
`;

export const Details = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    color: #116feb;
    margin-right: 14px;
  }
`;

export const Button = styled.button``;
