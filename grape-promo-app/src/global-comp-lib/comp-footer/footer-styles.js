import styled from "styled-components";
const FooterStyle = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Montserrat:200,300,400&display=swap");
  font-family: "Montserrat", sans-serif;
  display: inline-block;
  width: 100%;
  height: 100px;
  margin-top: 20px;
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
const Contain = styled.div`
margin-top: 0px;
&:after{
  content: "";
  display: table;
  clear: both;
}
`
const ColumnStyle = styled.div`
float: left;
width: calc(94%/3);
padding: 10px;
text-align: center;
opacity: 0.7;
`
const LinkStyle = styled.a`
&:hover{
    text-decoration: underline;
    cursor: pointer;
}
`
export { FooterStyle,CenterEl,SpacingArea,Contain,ColumnStyle,LinkStyle};
