import styled from "styled-components";
const LContainerStyle = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Montserrat:200,300,400&display=swap");
  font-family: "Montserrat", sans-serif;
  display: inline-block;
  width: 80%;
  height: 759px;
  background: transparent linear-gradient(180deg, rgba(47, 98, 195, 0.31) 0%, rgba(71, 39, 68, 0.31) 95%) 0%
    0% no-repeat padding-box;
  box-shadow: 0px 3px 6px rgba(140, 146, 129, 0.21);
  border-radius: 30px;
  margin-top: 100px;
`;
const CenterEl = styled.div`
text-align: center;
`
const SpacingArea = styled.div`
position: relative;
margin-top: 150px;
opacity: 0.7;
font-size: 16pt;
font-weight: 200;
display: inline-block;
width: 80%;
`
export { LContainerStyle,CenterEl,SpacingArea};
