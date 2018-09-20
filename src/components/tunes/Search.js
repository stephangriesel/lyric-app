import React, { Component } from "react";
import axios from "axios";
import { Consumer } from "../../context";

class Search extends Component {
  state = {
    trackTitle: ""
  };
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
              <form>
                  <div className="form-group">
                  <input type="text" className="form-control form-control-lg" placeholder="Tell me what you want what you really really want.." name="trackTitle" value={this.state.trackTitle}></input>
                  </div>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Search;
