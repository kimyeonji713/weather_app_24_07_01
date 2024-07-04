import { faBars, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { useCurrentPos } from "../lib/useCurrentPos";
import { getWeather } from "../api";

const SHeader = styled.header`
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

export const Header = () => {
  //   const { lat, lon } = useCurrentPos();
  //   const { data, isLoading } = useQuery({
  //     queryKey: ["weather", lat, lon],
  //     queryFn: getWeather,
  //   });

  <SHeader>
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
  </SHeader>;
};
