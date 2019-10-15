import css from "styled-components";
const NavigationContainer = css.div`
    font-weight: 300;
    width: 100%;
    height: 100%;
    overflowx: hidden;
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-top: 30px;
    color: #ffffff;
`;
const NavigationBrand = css.div`
  font-weight: 300;
  font-size: 18pt;
  padding-left: 35px;
  margin-right: 35px;
  position: relative;
  float: left;
  cursor: pointer;
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
`;
export { NavigationContainer, NavigationBrand, NavigationChild };
