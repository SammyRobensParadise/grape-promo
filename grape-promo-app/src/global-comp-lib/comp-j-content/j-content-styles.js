import styled from "styled-components";
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
@media (max-width: 1432px) {
    float: center;
    display: inline-flex;
    text-align: justify;
  }
`;
const AdjustEl = styled.div`
@media (max-width: 1432px) {
    text-align: center;
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
@media (max-width: 1432px){
    float: none;
    margin-right: 0;
    top: 35px;
    display: inline-flex;
    text-align: justify;
}
}
`;
export { JContentStyle, AdjustEl, ParaStyle };
