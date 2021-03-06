import React, { Component } from "react";
import axios from "axios";
import { Consumer } from "../../context";

class Search extends Component {
  state = {
    trackTitle: ""
  };

  findTune = (dispatch,e) => {
    e.preventDefault();

    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${
          this.state.trackTitle
        }&page_size=20&page=1&s_track_rating=desc&apikey=${
          process.env.REACT_APP_MY_KEY
        }`
      )
      .then(res => {
        console.log("search track title");
        console.log(res.data);
        dispatch({
          type: "SEARCH_TRACKS",
          // Send payload, result sent to context (line 32)
          payload: res.data.message.body.track_list
        });

        // Clear search result
        this.setState({trackTitle: ''});
        
      })
      .catch(err => console.log(err));
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <Consumer>
        {value => {
          console.log('dispatch value');
          console.log(value);
          const { dispatch } = value;
          return (
            <div className="card card-body mb-4 p-4">
              <h1 className="display-5 text-center">
              </h1>
              <form onSubmit={this.findTune.bind(this,dispatch)}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Tell me what you want what you really really want.."
                    name="trackTitle"
                    value={this.state.trackTitle}
                    onChange={this.onChange}
                  />
                </div>

                <button
                  className="btn"
                  type="submit"
                >
                  GO
                </button>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Search;
