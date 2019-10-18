import styled from "styled-components";
import ashrafRaj from "./ashrafRaj@2x.png";
import andrewMousaf from "./andrewMousaf@2x.png";
import sammyImage from "./sammyImage@2x.png";
import * as cssConstants from "../../../global-styling/css-constants";

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
  font-family: "Montserrat", sans-serif;
  width: 120px;
  height: 120px;
  background: transparent url(${andrewMousaf}) 0% 0% no-repeat padding-box;
  background-size: contain;
  opacity: 1;
  position: relative;
  display: inline-block;
`;
const SammyContainer = styled.div`
  font-family: "Montserrat", sans-serif;
  width: 120px;
  height: 120px;
  background: transparent url(${sammyImage}) 0% 0% no-repeat padding-box;
  background-size: contain;
  opacity: 1;
  position: relative;
  display: inline-block;
`;
const Contain = styled.div`
  margin-top: 60px;
  padding-left: 10px;
  &:after {
    content: "";
    display: table;
    clear: both;
  }
  @media (max-width: ${cssConstants.break1000}) {
    padding-left: 0px;
  }
`;

const MAGIC_WIDTH = "97.6%";

const ColumnStyle = styled.div`
  float: left;
  width: calc(94% / 3);
  padding: 10px;
  height: 300px;
  text-align: center;
  @media (max-width: ${cssConstants.break1270}) {
    width: ${p => (p.third ? "94%" : "calc(94%/2)")};
    height: 200px;
  }
  @media (max-width: ${cssConstants.break1000}) {
    width: ${MAGIC_WIDTH};
    height: 200px;
  }
`;
const TextContainer = styled.div`
  font-family: "Montserrat", sans-serif;
  width: 250px;
  height: 50px;
  text-align: center;
  font-weight: 100;
  padding-top: 30px;
  position: relative;
  display: inline-block;
  @media (max-width: ${cssConstants.break1270}) {
    width: 300px;
    padding-left: ${p => (p.first ? "60px" : p.second ? "60px" : "280px")};
    padding-right: ${p => (p.first ? "60px" : p.second ? "60px" : "280px")};
  }
  @media (max-width: ${cssConstants.break1150}) {
    width: 300px;
    padding-left: ${p => (p.first ? "40px" : p.second ? "40px" : "220px")};
    padding-right: ${p => (p.first ? "40px" : p.second ? "40px" : "220px")};
  }
  @media (max-width: ${cssConstants.break1000}) {
    padding-left: 220px;
    padding-right: 220px;
  }
  @media (max-width: ${cssConstants.break950}) {
    padding-left: 170px;
    padding-right: 170px;
  }
  @media (max-width: ${cssConstants.break810}) {
    padding-left: 110px;
    padding-right: 110px;
  }
  @media (max-width: ${cssConstants.break680}) {
    padding-left: 55px;
    padding-right: 55px;
  }
  @media (max-width: ${cssConstants.break520}) {
    padding-left: 10px;
    padding-right: 10px;
    width:  90%;
  }
`;
export {
  AshContainer,
  AndrewContainer,
  SammyContainer,
  Contain,
  ColumnStyle,
  TextContainer
};
