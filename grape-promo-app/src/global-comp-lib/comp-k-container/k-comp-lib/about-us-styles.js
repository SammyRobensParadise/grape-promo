import styled from "styled-components";
import ashrafRaj from './ashrafRaj@2x.png'
import andrewMousaf from './andrewMousaf@2x.png'
import sammyImage from './sammyImage@2x.png'
const AshContainer = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Montserrat:200,300,400&display=swap");
  font-family: "Montserrat", sans-serif;
  width: 120px;
  height: 120px;
  background: transparent url(${ashrafRaj}) 0% 0% no-repeat padding-box;
  background-size: contain;
  opacity: 1;
  position: relative;
  text-align: center;
  display: inline-block;
`;
const AndrewContainer = styled.div`
@import url("https://fonts.googleapis.com/css?family=Montserrat:200,300,400&display=swap");
font-family: "Montserrat", sans-serif;
width: 120px;
height: 120px;
background: transparent url(${andrewMousaf}) 0% 0% no-repeat padding-box;
background-size: contain;
opacity: 1;
position: relative;
display: inline-block;
`
const SammyContainer = styled.div`
@import url("https://fonts.googleapis.com/css?family=Montserrat:200,300,400&display=swap");
font-family: "Montserrat", sans-serif;
width: 120px;
height: 120px;
background: transparent url(${sammyImage}) 0% 0% no-repeat padding-box;
background-size: contain;
opacity: 1;
position: relative;
display: inline-block;
`
const Contain = styled.div`
margin-top: 60px;
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
height: 300px;
text-align: center;
`
const TextContainer = styled.div`
@import url("https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400&display=swap");
font-family: "Montserrat", sans-serif;
width: 250px;
height: 50px;
text-align: center;
font-weight: 100;
padding-top: 30px;
position: relative;
display: inline-block;
`
export { AshContainer,AndrewContainer,SammyContainer,Contain,ColumnStyle,TextContainer};
