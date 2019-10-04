import React, {Component} from 'react';
class ButtonCallToAction extends Component {
    constructor(props){
        super(props)
        this.state = {
            hasRenderedLocal: false
        }
      }
      componentDidMount() {
        this.setState({
          hasRenderedLocal: true
        });
      }
      render() {
        return (
            <div></div>
        );
      }
    }
    export default ButtonCallToAction;