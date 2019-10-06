import styled from "styled-components";
const JContainerStyle = styled.section`
  @import url("https://fonts.googleapis.com/css?family=Montserrat:200,300,400&display=swap");
  font-family: "Montserrat", sans-serif;
  display: inline-block;
  width: 80%;
  height: 759px;
  background: transparent linear-gradient(180deg, rgba(47, 38, 96, 0.31) 0%, rgba(162, 67, 115, 0.31) 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 0px 3px 6px rgba(140, 146, 129, 0.21);
  border-radius: 30px;
  margin-top: 100px;
`;
const CenterEl = styled.section`
text-align: center;
`
const ButtonContainer  = styled.section`
width: 100%;
height: 250px;
text-align:center;
position: relative;
transform: translateY(-200px);
`
export { JContainerStyle,CenterEl,ButtonContainer};
