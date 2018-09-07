import React, { Component } from 'react'
import { Consumer } from '../../context';
import Loading from '../layout/Loading';

 class Tunes extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { track_list } = value;
          if(track_list === undefined || track_list.length === 0) {
             return <Loading />
          } else {
            return <h1>Tunes loaded...</h1>
          }
        }}
      </Consumer>
    )
  }
}

export default Tunes;
