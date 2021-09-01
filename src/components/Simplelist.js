import React, { Component } from 'react';

export default class Simplelist extends Component {
  render() {
    const numbers = this.props.numbers;
    const listItems = numbers.map((number) =>
      <li>{number}</li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }
}
