import styled from "styled-components";

export const Container = styled.section`
  color: #fff;
  max-width: 700px;
  width: 100%;
  margin: auto;
  user-select: none;
`;

export const Frame = styled.div``;

export const Inner = styled.div``;

export const Item = styled.div`
  background-color: #303030;
  font-size: 1.2rem;
  line-height: 1.3;
  margin-bottom: 0.5em;
  @media (min-heigt: 900px) {
    font-size: 2rem;
  }
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 0.2em;
  padding: 0.8em 5%;
  text-align: center;
  @media (min-width: 600px) {
    font-size: 2.5rem;
  }
`;

export const Header = styled.div`
  border-bottom: #000 1px solid;
  padding: 1em;
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  img {
    width: 1rem;
    height: 1rem;
    filter: brightness(0) invert(1);
  }
  @media (min-width: 1000px) {
    img {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;

export const Body = styled.div`
  padding: 1em;
`;
