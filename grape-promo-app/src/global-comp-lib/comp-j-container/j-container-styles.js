import styled from "styled-components";
import * as cssConstants from "../../global-styling/css-constants";
const JContainerStyle = styled.div`
  display: inline-block;
  width: 80%;
  height: 759px;
  background: transparent
    linear-gradient(
      180deg,
      rgba(47, 38, 96, 0.31) 0%,
      rgba(162, 67, 115, 0.31) 100%
    )
    0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px rgba(140, 146, 129, 0.21);
  border-radius: 30px;
  margin-top: 100px;
  @media (max-width: ${cssConstants.breakOne}) {
    height: 1000px;
    display: inline-block;
    text-align: center;
  }
  @media (max-width: ${cssConstants.breakTwo}) {
    height: 1100px;
    margin-top: 50px;
  }
`;
const CenterEl = styled.div`
  text-align: center;
  @media (max-width: ${cssConstants.breakOne}) {
  }
`;
const ButtonContainer = styled.div`
  width: 100%;
  text-align: center;
  position: relative;
  transform: translateY(-200px);
  @media (max-width: ${cssConstants.breakOne}) {
    transform: translateY(-120px);
  }
`;
export { JContainerStyle, CenterEl, ButtonContainer };
