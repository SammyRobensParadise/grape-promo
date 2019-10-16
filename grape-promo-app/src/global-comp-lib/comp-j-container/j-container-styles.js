import styled from "styled-components";
const JContainerStyle = styled.div`
  display: inline-block;
  width: 80%;
  height: 759px;
  background: transparent linear-gradient(180deg, rgba(47, 38, 96, 0.31) 0%, rgba(162, 67, 115, 0.31) 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 0px 3px 6px rgba(140, 146, 129, 0.21);
  border-radius: 30px;
  margin-top: 100px;
  @media (max-width: 1432px){
    height: 1000px;
    display: inline-block;
}
`;
const CenterEl = styled.div`
text-align: center;
@media (max-width: 1432px){
}
`
const ButtonContainer  = styled.div`
width: 100%;
text-align:center;
position: relative;
transform: translateY(-200px);
@media (max-width: 1432px){
  transform: translateY(0px);
}
`
export { JContainerStyle,CenterEl,ButtonContainer};
