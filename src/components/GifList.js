import React from "react";

const GiftList = props => {
  return (
    <div>
      {props.gifs.map((gif, idx) => (
        <img key={idx} src={gif.url} alt="gif" />
      ))}
    </div>
  );
};

export default GiftList;
