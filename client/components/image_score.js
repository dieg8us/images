import React from 'react';

const ImageScore = (props) => {
  // props.ups is the number of likes
  // props.downs is the number of dislikes

  // resume
  // const ups = props.ups
  // const downs = props.downs
  const { ups, downs } = props;

  const upsPercent = `${100 * (ups / (ups + downs))}%`;
  const downsPercent = `${100 * (downs / (ups + downs))}%`;

  return (
    <div className="progress">
      <div style={{ width: upsPercent }} className="progress-bar progress-bar-success progress-bar-striped" ></div>
      <div style={{ width: downsPercent }} className="progress-bar progress-bar-danger progress-bar-striped"></div>
    </div>
  );
};

export default ImageScore;
