import React from "react";
import { Link } from 'react-router-dom';

const Tune = props => {
  const { tune } = props;
  return (
    <div className="col-md-6">
      <div className="card mb-4 shadow-sm">
        <div className="card">
          <h5>{tune.artist_name}</h5>
          <p className="card-text">
          <strong><i className="fas fa-play"></i> Tune</strong>: {tune.track_name}
          <br />
          <strong><i className="fas fa-compact-disc"></i> Album</strong>: {tune.album_name}
          </p>
          <Link to={`lyrics/tune/${tune.track_id}`} className="btn-border">
          <i className="fas fa-chevron-right"></i> Lyrics
          
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tune;
