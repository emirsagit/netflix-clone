import styled from "styled-components";

export const Inner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1100px;
  margin: auto;
  width: 100%;
  color: white;

  @media (min-width: 1000px) {
    flex-direction: ${({ direction }) => direction};
  }
`;

export const Item = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  padding: 2em 0;
  overflow: hidden;
`;

export const Container = styled.section`
  background-color: black;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 0.2em;

  @media (min-width: 600px) {
    font-size: 2.5rem;
  }
`;

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 2em;
  line-height: 1.2;
  @media (min-width: 600px) {
    font-size: 1.7rem;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

export const Pane = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-itemc: center;
  text-align: center;
  @media (min-width: 1000px) {
    width: 48%;
    gap: 4%;
  }
`;
