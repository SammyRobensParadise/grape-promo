import css from "styled-components";
import React from "react";
const NavigationContainer = css.div`
  &&& {
    font-weight: 300;
    width: 100%;
    height: 100%;
    overflowx: hidden;
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-top: 30px;
    color: #ffffff;
  }
`;
const NavigationBrand = css.div`
&&& {
  font-weight: 300;
  font-size: 18pt;
  padding-left: 35px;
  margin-right: 35px;
  position: relative;
  float: left;
}
`;
const NavigationChild = css.span`
&&& {
  font-weight: 300;
  font-size: 18pt;
  padding-left: 35px;
  margin-right: 35px;
  float: right;
}
`;
export { NavigationContainer, NavigationBrand, NavigationChild };
