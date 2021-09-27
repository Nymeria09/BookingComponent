import React, { Component } from 'react';


export class HeaderComment extends Component {
  static displayName = HeaderComment.name;

  render () {
    return (
        <div className = "header-comment">
            {this.props.comment}
        </div>
    );
  }
}
