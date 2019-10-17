import styled from "styled-components";
import * as cssConstants from '../../global-styling/css-constants'
const WhatSVGStyles = styled.div`
  font-weight: 300;
  font-size: 16pt;
  float: left;
  position: relative;
  @media (max-width: ${cssConstants.breakOne}) {
    float: none;
    display: inline-block;
    margin-top: 40px;
    transform: translateX(-40px);
  }
  @media (max-width: ${cssConstants.breakTwo}) {
    transform: translateX(-55px);
  }
  @media (max-width: ${cssConstants.breakThree}) {
    transform: translateX(-45px);
  }
  @media (max-width: ${cssConstants.breakFour}) {
    transform: translateX(-30px);
  }
  @media (max-width: ${cssConstants.breakSix}) {
    left: -30px;
  }
`;
const CenterEl = styled.div``;
export { WhatSVGStyles, CenterEl };
