import React, { Component } from "react";
import { FooterStyle, Contain, ColumnStyle, LinkStyle } from "./footer-styles";
import * as CONSTANTS from "../../constants";
class Footer extends Component {
  constructor({hasClickedPolicy}) {
    super({hasClickedPolicy});
    this.state = {
      hasRenderedLocal: false,
      hasClickedPolicyLink: false,
    };
  }
  componentDidMount() {
    this.setState({
      hasRenderedLocal: true
    });
  }

  alertPolicy = () => {
    alert(CONSTANTS.POLICY)
  }

  render = () => {
    const { CONTACT, COPYWRITE, POLICY } = this.props.content;
    return (
      <FooterStyle>
        <Contain>
          <ColumnStyle>
            <LinkStyle>
              <p>{CONTACT}</p>
            </LinkStyle>
          </ColumnStyle>
          <ColumnStyle>
            <LinkStyle>
              <p>{COPYWRITE}</p>
            </LinkStyle>
          </ColumnStyle>
          <ColumnStyle>
            <LinkStyle onClick={() => this.alertPolicy()}>
              <p>{POLICY}</p>
            </LinkStyle>
          </ColumnStyle>
        </Contain>
      </FooterStyle>
    );
  }
}
export default Footer;
