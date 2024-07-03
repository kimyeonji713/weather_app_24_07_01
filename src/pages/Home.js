import { useQuery } from "@tanstack/react-query";
import { getWeather } from "../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPlus } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

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
  //   getWeather();
  //   const query = useQuery
  const { data, isLoading } = useQuery({
    queryKey: ["weather"],
    queryFn: getWeather,
  });

  console.log(data);

  return (
    <Container>
      <Header>
        <Menu>
          <FontAwesomeIcon icon={faBars} />
        </Menu>
        <MyLocation>
          <h3>{data?.name}</h3>
          <p>Sat, 19:30 pm</p>
        </MyLocation>
        <More>
          <FontAwesomeIcon icon={faPlus} />
        </More>
      </Header>

      <Section>
        <h3>Hot</h3>

        <TempWrap>
          <Temp className="temp">
            {data?.main?.temp} <span>°</span>
          </Temp>

          <Temp>
            <Num>
              {data?.main?.temp_max} <span>°</span>C
            </Num>

            <Num>
              {data?.main?.temp_min} <span>°</span>C
            </Num>
          </Temp>
        </TempWrap>
      </Section>
    </Container>
  );
};
