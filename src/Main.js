import React, { Component } from 'react';

// Global styles
import 'style!./styles/main.scss';
import 'antd';

export default class Main extends Component {
  
  render() {
    return 	<section>
			    { this.props.children }
    		</section>
  }
}