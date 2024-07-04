import { useQuery } from "@tanstack/react-query";
import { getWeather } from "../api";
import styled from "styled-components";
import { useCurrentPos } from "../lib/useCurrentPos";
import { Loading } from "../components/Loading";
import { Header } from "../components/Header";
import { Section } from "../components/Section";

const Container = styled.div`
  max-width: 450px;
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  background: linear-gradient(
    180deg,
    rgba(130, 161, 168, 1) 0%,
    rgba(169, 228, 255, 1) 100%
  );
`;

export const Home = () => {
  const { lat, lon } = useCurrentPos();
  //   getWeather();
  //   const query = useQuery
  const { data, isLoading } = useQuery({
    queryKey: ["weather", lat, lon],
    queryFn: getWeather,
  });

  console.log(data);

  // useCurrentPos();
  // const pos = useCurrentPos();
  // console.log(pos);

  // const { lat, lon } = useCurrentPos();
  // console.log(lat, lon);
  console.log(isLoading);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {data && (
            <Container>
              <Header />
              <Section />
            </Container>
          )}
        </>
      )}
    </>
  );
};
