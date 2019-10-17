import css from "styled-components";
import * as cssConstants from "../../global-styling/css-constants";

const NavigationContainer = css.div`
    font-weight: 300;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-top: 30px;
    color: #ffffff;
    opacity 0.7;
`;
const NavigationBrand = css.div`
  font-weight: 300;
  font-size: 18pt;
  padding-left: 35px;
  margin-right: 35px;
  position: relative;
  float: left;
  cursor: pointer;
  @media (max-width: ${cssConstants.breakFive}) {
    padding-left: 20px;
    margin-right: 10px;
    font-size: 14pt;
  }
`;
const NavigationChild = css.span`
  font-weight: 300;
  font-size: 18pt;
  padding-left: 35px;
  margin-right: 35px;
  float: right;
  cursor: pointer;
  &:hover{
    text-decoration: underline;
  }
  @media (max-width: ${cssConstants.navigationBreakOne}) {
    padding-left: 20px;
    margin-right: 20px;
  }
  @media (max-width: ${cssConstants.breakFive}) {
    padding-left: 10px;
    margin-right: 10px;
    font-size: 14pt;
  }
  @media (max-width: ${cssConstants.NavigationNoDisplay}) {
    display: none;
  }
`;
export { NavigationContainer, NavigationBrand, NavigationChild };
