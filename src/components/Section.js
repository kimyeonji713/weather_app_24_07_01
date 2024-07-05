import styled from "styled-components";
import { useCurrentPos } from "../lib/useCurrentPos";
import { useQuery } from "@tanstack/react-query";
import { getWeather } from "../api";

const SSection = styled.section`
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

export const Section = ({ tempData }) => {
  return (
    <SSection>
      <h3>{tempData.weather[0].main}</h3>

      <TempWrap>
        <Temp className="temp">
          {Math.round(tempData.main.temp)} <span>°</span>
        </Temp>

        <Temp>
          <Num>
            {Math.round(tempData.main.temp_max)} <span>°</span>C
          </Num>

          <Num>
            {Math.round(tempData.main.temp_min)} <span>°</span>C
          </Num>
        </Temp>
      </TempWrap>
    </SSection>
  );
};
