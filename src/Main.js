import React, { Component } from 'react';
import { Link } from 'react-router';

// Global styles
import 'style!./styles/main.scss';
import 'antd';

// Application components
import { LoginSection } from 'containers';

export default class Main extends Component {
  render() {
    return (
        <LoginSection />
    );
  }
}
