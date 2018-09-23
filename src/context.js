import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state,action) => {
  switch(action.type) {
    case 'SEARCH_TRACKS':
      return {
        ...state,
        track_list:action.payload,
        heading:"Here is your tunes..."
      };
      default:
      return state;

  }
};

export class Provider extends Component {
  state = {
    tunes_list: [
      
    ],
    heading: 'Top 10 Tunes',
    dispatch: action => this.setState(state => reducer(state,action))
  };

componentDidMount() {
  axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=6&country=nl&f_has_lyrics=1&apikey=${process.env.REACT_APP_MY_KEY}`)
  .then(res => {
    console.log('tune data');
    console.log(res.data);
    this.setState({tunes_list: res.data.message.body.track_list});
  })
  .catch(err => console.log(err));
}

  render() {
    return (
      <Context.Provider value={this.state}>
          {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;
