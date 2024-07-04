import styled, { keyframes } from "styled-components";

const Container = styled.div`
  max-width: 450px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingAni = keyframes`
    100%{
        transform: rotate(360deg);
    }
`;

const Loader = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 10px solid royalblue;
  border-color: royalblue transparent transparent transparent;
  animation: ${LoadingAni} 0.8s infinite linear;
`;

export const Loading = () => {
  return (
    <Container>
      <Loader />
    </Container>
  );
};
