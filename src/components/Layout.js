import React, { Component } from 'react';

import TopNav from './TopNav';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
        <>
          <TopNav />
           {this.props.children}
        </>
    );
  }
}
