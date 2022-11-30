import styled from "styled-components";

export const NotFound = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 120px;
`;

export const SubTitle = styled.h2``;

export const Movies = styled.strong`
  margin-top: 14px;
  a {
    text-decoration: none;
    background-color: #116feb;
    color: #fff;
    padding: 10px;
  }
`;
