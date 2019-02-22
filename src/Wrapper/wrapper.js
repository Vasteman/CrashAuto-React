import React, { Component } from 'react';
import './wrapper.css'

export default class Wrapper extends Component {
  render() {
    return <div className="wrapper">{this.props.children}</div>
  }
}