import { useQuery } from "@tanstack/react-query";
import { getWeather } from "../api";
import styled from "styled-components";
import { useCurrentPos } from "../lib/useCurrentPos";
import { Loading } from "../components/Loading";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet-async";
import { Title } from "../components/Title";
import { Header } from "../components/Header";
import { Section } from "../components/Section";

const Container = styled.div`
  max-width: 450px;
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  background: linear-gradient(
    180deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(253, 187, 45, 1) 100%
  );
`;

export const Home = () => {
  const { lat, lon } = useCurrentPos();

  const { data, isLoading } = useQuery({
    queryKey: ["weather", lat, lon],
    queryFn: getWeather,
  });

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Title titleName={"Home"} />
          {data && (
            <Container>
              <Header headerData={data} />
              <Section tempData={data} />
            </Container>
          )}
        </>
      )}
    </>
  );
};
