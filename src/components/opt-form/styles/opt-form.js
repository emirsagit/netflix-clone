import styled from "styled-components";

export const Container = styled.div`
  max-width: 700px;
  margin: auto;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: 3em;
  @media (min-width: 1000px) {
    flex-direction: row;
  }
`;

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  max-width: 430px;
  padding: 0 10px;
  border: 0;
  height: 2.8rem;
  font-size: 1.3rem;
  margin: 0 auto 1rem;
  @media (min-width: 1000px) {
    margin: 1rem 0;
  }
`;

export const Button = styled.button`
  border: 0;
  color: white;
  background: #e50914;
  height: 2.5rem;
  width: 125px;
  font-weight: 500;
  font-size: 1.1rem;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 1000px) {
      width: 16px;
    }
  }

  &:hover {
    background: #f40612;
  }
`;

export const Text = styled.p`
  margin: 1em auto 0.5em;
  color: white;
  text-align: center;
  font-size: 1.125rem;
  @media (min-width: 1000px) {
    margin: 1em auto 1em;
    font-size: 1.2rem;
  }
`;
