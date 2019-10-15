import styled from "styled-components";
const KContainerStyle = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Montserrat:200,300,400&display=swap");
  font-family: "Montserrat", sans-serif;
  display: inline-block;
  width: 80%;
  height: 759px;
  margin-top: 100px;
`;
const CenterEl = styled.div`
text-align: center;
`
const ButtonContainer  = styled.div`
width: 100%;
text-align:center;
position: relative;
transform: translateY(${props  => props.lower?'20px':'-200px'});
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
const FlowArea = styled.div`
@import url("https://fonts.googleapis.com/css?family=Montserrat:200,300,400&display=swap");
font-family: "Montserrat", sans-serif;
display: inline-block;
position: relative;
width: 100%;
height: 340px;
background: transparent linear-gradient(180deg, rgba(117, 63, 145, 0.10) 0%, rgba(185, 92, 139, 0.31) 100%) 0%
  0% no-repeat padding-box;
box-shadow: 0px 3px 6px rgba(140, 146, 129, 0.21);
border-radius: 30px;
margin-top: 150px;
`
export { KContainerStyle,CenterEl,ButtonContainer,SpacingArea,FlowArea};
