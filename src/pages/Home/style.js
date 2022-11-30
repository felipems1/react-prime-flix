import styled from "styled-components";

export const Container = styled.div``;

export const MovieList = styled.div`
  max-width: 800px;
  margin: 14px auto;
`;

export const Article = styled.article`
  width: 100%;
  background-color: #fff;
  padding: 15px;
  border-radius: 4px;
`;

export const Title = styled.strong`
  margin-bottom: 14px;
  text-align: center;
  font-size: 22px;
  display: block;
`;

export const Photo = styled.img`
  width: 900px;
  max-width: 100%;
  max-height: 340px;
  object-fit: cover;
  display: block;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const Details = styled.strong`
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    font-size: 14px;
    background-color: #116feb;
    text-decoration: none;
    color: #fff;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 14px;
`;

export const LoadingTitle = styled.h2``;
