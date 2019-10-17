import styled from "styled-components";
import * as cssConstants from "../../global-styling/css-constants";
const JContentStyle = styled.div`
  font-weight: 200;
  font-size: 16pt;
  color: #ffffff;
  text-align: left;
  position: relative;
  z-index: 99;
  opacity: 0.7;
  font: ExtraLight 18px/22px Montserrat;
  letter-spacing: 0;
  float: right:
@media (max-width: ${cssConstants.breakOne}) {
    float: center;
    display: inline-flex;
    text-align: justify;
  }
`;
const AdjustEl = styled.div`
  @media (max-width: ${cssConstants.breakOne}) {
    text-align: center;
    display: inline-block;
  }
`;
const ParaStyle = styled.div`
&&&{
position: relative;
float right;
margin-right: 60px;
top: 120px;
width: 480px;
opacity: 0.7;
@media (max-width: ${cssConstants.breakOne}){
    float: none;
    margin-right: 0;
    top: 35px;
    display: inline-flex;
    text-align: justify;
    width: 650px;
    top: 0px;
}
@media (max-width: ${cssConstants.breakTwo}){
  width: 480px;
}
@media (max-width: ${cssConstants.breakThree}){
  width: 320px;
  font-size: 14pt;
}
@media (max-width: ${cssConstants.breakFour}) {
  width: 270px;
}
@media (max-width: ${cssConstants.breakSix}) {
  width: 230px;
}
`;
export { JContentStyle, AdjustEl, ParaStyle };
