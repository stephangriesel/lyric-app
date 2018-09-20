import React, { Component } from "react";
import axios from "axios";
import { Consumer } from "../../context";

class Search extends Component {
  state = {
    trackTitle: ""
  };

  findTune = (e) => {
      e.preventDefault();
      
      axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=3&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MY_KEY}`)
  .then(res => {
    // console.log('search track title');
    console.log(res.data);
  })
  .catch(err => console.log(err));

  }

  onChange = e => {
      this.setState({[e.target.name]: e.target.value});
  }
  render() {
    return (
      <Consumer>
        {value => {
          return (
            <div className="card card-body mb-4 p-4">
              <h1 className="display-5 text-center">
                <i className="fas fa-music" />
                Search for my tune
              </h1>
              <p className="lead text-center">Sing a long.. find the lyrics</p>
              <form onSubmit={this.findTune}>
                  <div className="form-group">
                  <input type="text" className="form-control form-control-lg" placeholder="Tell me what you want what you really really want.." name="trackTitle" value={this.state.trackTitle} onChange={this.onChange}></input>
                  </div>
              </form>
              <button className="btn btn-primary btn-lg btn-block mb-5" type="submit">GO</button>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Search;
