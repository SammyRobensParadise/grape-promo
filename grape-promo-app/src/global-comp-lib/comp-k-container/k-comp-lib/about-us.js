import React, { Component } from "react";
import {
  AshContainer,
  AndrewContainer,
  SammyContainer,
  Contain,
  ColumnStyle,
  TextContainer
} from "./about-us-styles";
const WEBSITE_LINKS = {
  SAMMY_LINK: "https://sammyrp.com",
  ASH_LINK: "https://www.linkedin.com/in/ashraf-raji/",
  ANDREW_LINK: "https://www.linkedin.com/in/andrewmouch/"
};
class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasRenderedLocal: false
    };
  }
  componentDidMount() {
    this.setState({
      hasRenderedLocal: true
    });
  }
  render() {
    const { SAMMY_DEF, ASH_DEF, ANDREW_DEF } = this.props.text;
    const { SAMMY_LINK, ASH_LINK, ANDREW_LINK } = WEBSITE_LINKS;
    return (
      <div>
        <Contain>
          <ColumnStyle first>
            <a href={SAMMY_LINK}>
              <SammyContainer></SammyContainer>
            </a>
            <TextContainer first>{SAMMY_DEF}</TextContainer>
          </ColumnStyle>
          <ColumnStyle second>
            <a href={ASH_LINK}>
              <AshContainer></AshContainer>
            </a>
            <TextContainer second>{ASH_DEF}</TextContainer>
          </ColumnStyle>
          <ColumnStyle third>
            <a href={ANDREW_LINK}>
              <AndrewContainer></AndrewContainer>
            </a>
            <TextContainer third>{ANDREW_DEF}</TextContainer>
          </ColumnStyle>
        </Contain>
      </div>
    );
  }
}
export default AboutUs;
