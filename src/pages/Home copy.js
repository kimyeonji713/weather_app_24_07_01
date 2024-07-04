import { useQuery } from "@tanstack/react-query";
import { getWeather } from "../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPlus } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useCurrentPos } from "../lib/useCurrentPos";
import { Loading } from "../components/Loading";

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

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const Menu = styled.div`
  font-size: 26px;
`;

const MyLocation = styled.div`
  font-size: 24px;
  text-align: center;
  p {
    font-size: 16px;
    margin-top: 10px;
  }
`;

const More = styled.div`
  font-size: 26px;
`;

const Section = styled.section`
  margin-top: 50%;
  padding: 0 20px;
  h3 {
    font-size: 46px;
  }
`;

const TempWrap = styled.div`
  display: flex;
  justify-content: space-between;
  .temp {
    display: flex;
    font-size: 180px;
    font-weight: 200;
    span {
      display: block;
      font-size: 90px;
      font-weight: 200;
      /* transform: translate(200px, -150px); */
    }
  }
`;

const Temp = styled.div`
  width: 50%;
  &:nth-child(2) {
    height: 180px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    flex-direction: column;
  }
`;

const Num = styled.div`
  font-size: 34px;
  font-weight: 300;
  padding: 20px 0;
  &:nth-child(1) {
    border-bottom: 1px solid #eee;
  }
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
              <Header>
                <Menu>
                  <FontAwesomeIcon icon={faBars} />
                </Menu>
                <MyLocation>
                  <h3>{data.name}</h3>
                  <p>Sat, 19:30 pm</p>
                </MyLocation>
                <More>
                  <FontAwesomeIcon icon={faPlus} />
                </More>
              </Header>

              <Section>
                <h3>{data.weather[0].main}</h3>

                <TempWrap>
                  <Temp className="temp">
                    {Math.round(data.main.temp)} <span>°</span>
                  </Temp>

                  <Temp>
                    <Num>
                      {Math.round(data.main.temp_max)} <span>°</span>C
                    </Num>

                    <Num>
                      {Math.round(data.main.temp_min)} <span>°</span>C
                    </Num>
                  </Temp>
                </TempWrap>
              </Section>
            </Container>
          )}
        </>
      )}
    </>
  );
};
