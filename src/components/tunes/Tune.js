import React from "react";

const Tune = props => {
  const { tune } = props;
  return (
    <div className="col-md-6">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5>{tune.artist_name}</h5>
        </div>
      </div>
    </div>
  );
};

export default Tune;
