import styled from "styled-components";
import * as cssConstants from "../../global-styling/css-constants";

const InformText = styled.div`
font-weight: 100;
font-size: 18pt;
padding-left: 20px;
padding-right: 20px;
color: #ffffff;
opacity: 0.8;
text-align: center;
&:hover{
    color: #f2f2f2;
}
@media (max-width: ${cssConstants.breakFour}) {
    font-size: 16pt;
}
`;
export {InformText}