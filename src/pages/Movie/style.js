import styled from "styled-components";

export const MovieInfo = styled.div`
  margin: 0 auto;
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  max-width: 800px;
  padding: 0 8px;
`;

export const InfoTitle = styled.h1`
  text-align: center;
`;

export const Title = styled.h1`
  margin: 14px 0;
`;

export const Photo = styled.img`
  border-radius: 8px;
  width: 800px;
  max-width: 100%;
  max-height: 340px;
  object-fit: cover;
`;

export const Sinopse = styled.h3`
  margin-top: 14px;
`;

export const Description = styled.span`
  margin: 5px 0;
`;

export const Evaluation = styled.span``;

export const AreaButtons = styled.div``;

export const Button = styled.button`
  margin-right: 12px;
  margin-top: 14px;
  margin-bottom: 10px;
  margin-left: 0;
  font-size: 20px;
  border: 0;
  outline: none;
  padding: 12px;
  border-radius: 4px;
  transition: all 0.5s;
  cursor: pointer;

  &:hover {
    background-color: brown;
    color: #fff;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: #000;
  transition: all 0.5s;

  &:hover {
    color: #fff;
  }
`;
