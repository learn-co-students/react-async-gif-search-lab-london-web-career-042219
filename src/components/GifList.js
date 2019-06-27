import React from "react";

const GifList = props => {
  return (
    <div>
      <ul>
        <li>
          <img src={props.gif.url} alt="gif" />
        </li>
      </ul>
    </div>
  );
};
export default GifList;
