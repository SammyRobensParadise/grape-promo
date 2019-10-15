import styled from "styled-components";
const CalltoActionButton = styled.div`
@import url("https://fonts.googleapis.com/css?family=Montserrat:200,300,400&display=swap");
font-family: "Montserrat", sans-serif;
font-weight: 200;
font-size: 12pt;
color: #ffffff;
text-align: center;
width: 380px;
height: 30px;
padding-top: 12px;
background-color: #269F9D;
box-shadow: 0px 3px 2px #B6336931;
border-radius: 10px;
display: inline-block;
margin-top: 35px;
margin-botton: 25px;
&:hover{
    cursor: pointer;
}
`;
const CenterEl = styled.div`
text-align: center;
`
export {CalltoActionButton,CenterEl}