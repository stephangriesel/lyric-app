import React, { Component } from 'react'
import { Consumer } from '../../context';
import Loading from '../layout/Loading';

 class Tunes extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          console.log(value);
          const { tunes_list } = value;
          if(tunes_list === undefined || tunes_list.length === 0) {
             return <Loading />;
          } else {
            return <h1>Tunes loaded...</h1>;
          }
        }}
      </Consumer>
    );
  }
}

export default Tunes;
