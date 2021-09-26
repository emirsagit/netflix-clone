import styled from "styled-components";

export const Container = styled.section`
  color: white;
  width: 90%;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  @media (min-width: 550px) {
    padding: 4.1em 0;
  }
`;

export const Title = styled.h1`
  font-size: 1.75rem;
  margin-bottom: 0.2em;
  line-height: 1.1;
  @media (min-width: 550px) {
    font-size: 3.125rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.125rem;
  margin: 0;
  @media (min-width: 550px) {
    font-size: 1.625rem;
  }
`;
