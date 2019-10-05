import styled from "styled-components";
const NavigationContainer = styled.section`
  @import url("https://fonts.googleapis.com/css?family=Montserrat:200,300,400&display=swap");
  font-family: "Montserrat", sans-serif;
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
const NavigationBrand = styled.section`
  @import url("https://fonts.googleapis.com/css?family=Montserrat:200,300,400&display=swap");
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  font-size: 18pt;
  padding-left: 35px;
  margin-right: 35px;
  position: relative;
  float: left;
`;
const NavigationChild = styled.section`
  @import url("https://fonts.googleapis.com/css?family=Montserrat:200,300,400&display=swap");
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  font-size: 18pt;
  padding-left: 35px;
  margin-right: 35px;

`;
export { NavigationContainer, NavigationBrand, NavigationChild };
