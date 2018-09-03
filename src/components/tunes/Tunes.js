import React, { Component } from 'react'
import { Consumer } from '../../context';

 class Tunes extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          console.log(value);
          return<h1>Tunes</h1>
        }}
      </Consumer>
    )
  }
}

export default Tunes;
