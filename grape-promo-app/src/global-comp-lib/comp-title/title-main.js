import styled from "styled-components";
import * as cssConstants from "../../global-styling/css-constants";
const TitleLarge = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Montserrat:200,300,400&display=swap");
  font-family: "Montserrat", sans-serif;
  font-weight: 200;
  font-size: 100pt;
  color: #ffffff;
  text-align: center;
  margin-bottom: 45px;
  margin-top: 45px;
  opacity: 0.8;
  @media (max-width: ${cssConstants.breakThree}) {
    font-size: 80pt;
  }
  @media (max-width: ${cssConstants.breakFour}) {
    font-size: 70pt;
  }
  @media (max-width: ${cssConstants.breakFive}) {
    font-size: 60pt;
  }
`;
export default TitleLarge;
