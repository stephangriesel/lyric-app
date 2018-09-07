import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

export class Provider extends Component {
  state = {
    tunes_list: [
      
    ],
    heading: 'Top 10 Tunes'
  };

componentDidMount() {
  axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=20&country=nl&f_has_lyrics=1&apikey=${process.env.REACT_APP_MY_KEY}`)
  .then(res => {
    // console.log(res.data);
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
