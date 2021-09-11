import styled from "styled-components";

export const Container = styled.footer`
  width: 90%;
  margin: auto;
  max-width: 1000px;
  padding: 4em 0;
`;

export const Column = styled.div``;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 1em;

  @media (min-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  }
`;

export const Link = styled.a`
  color: #959595;
  display: block;
  text-decoration: none;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

export const Title = styled.p`
  font-size: 1rem;
  color: #757575;
  margin-bottom: 3em;
`;

export const Text = styled.p`
  font-size: 0.9rem;
  color: #757575;
  margin-bottom: 3em;
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;
