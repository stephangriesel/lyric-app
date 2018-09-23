import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "../layout/Loading";
import Moment from 'react-moment';

class Lyrics extends Component {
  state = {
    track: {},
    lyrics: {}
  };

  componentDidMount() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${
          this.props.match.params.id
        }&apikey=${process.env.REACT_APP_MY_KEY}`
      )
      .then(res => {
        console.log("lyrics data");
        console.log(res.data);
        this.setState({ lyrics: res.data.message.body.lyrics });

        return axios.get(
          `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${
            this.props.match.params.id
          }&apikey=${process.env.REACT_APP_MY_KEY}`
        );
      })
      .then(res => {
        console.log("track data");
        console.log(res.data);
        this.setState({ track: res.data.message.body.track });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { track, lyrics } = this.state;
    if (
      track === undefined ||
      lyrics === undefined ||
      Object.keys(track).length === 0 ||
      Object.keys(lyrics).length === 0
    ) {
      return <Loading />;
    } else {
      // Test: return <h1>Test</h1>;
      return (
        <React.Fragment>
          <Link to="/" className="btn-back">
            Back
          </Link>
          <div className="card">
            <h3 className="card-header">
              {track.track_name} by {""}
              <span className="text-secondary">{track.artist_name}</span>
            </h3>
            <div className="card-body">
              <p className="card-text">{lyrics.lyrics_body}</p>
            </div>
          </div>

          <ul className="list-group mt-3">
              <li className="list-group-item">
              {/* Fix date with npm package: moment & react-moment*/}
                  <strong>Release Year</strong>: <Moment format="YYYY">{track.first_release_date}</Moment>
              </li>
              {/*<li className="list-group-item">
                  <strong>Genre</strong>: {track.primary_genres.music_genre_list[0].music_genre.music_genre_name}
      </li>*/}
              <li className="list-group-item">
              {/* Ternary Operator:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator */}
              <strong>Explicit: </strong>{track.explicit === 0 ? 'Nope' : 'Yep'}
              </li>
          </ul>
        </React.Fragment>
      );
    }
  }
}

export default Lyrics;
