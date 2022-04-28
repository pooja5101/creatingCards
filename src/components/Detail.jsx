import React from "react";

function Detail(props) {
  return (
    <p className="info">
      {props.detailHeading} {props.detailInfo}
    </p>
  );
}

export default Detail;
