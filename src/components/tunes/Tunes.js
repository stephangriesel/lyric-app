import React, { Component } from 'react'
import { Consumer } from '../../context';
import Loading from '../layout/Loading';
import Tune from '../tunes/Tune';

 class Tunes extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          console.log(value);
          const { tunes_list, heading } = value;

          if(tunes_list === undefined || tunes_list.length === 0) {
             return <Loading />;
          } else {
            return (
              <React.Fragment>
                <h3 className="text-center mb-4">{heading}</h3>
                <div className="row">
                {tunes_list.map(item => (
                  <Tune key={item.track.track_id} tune={item.track}/>
                ))}
                </div>
              </React.Fragment>
            )
          }
        }}
      </Consumer>
    );
  }
}

export default Tunes;
