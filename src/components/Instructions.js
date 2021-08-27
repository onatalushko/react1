import React, { Component } from 'react';

export default class Instructions extends Component {
  render() {
    return(
      <p>First custom component. { this.props.name }</p>
    )
  }
}