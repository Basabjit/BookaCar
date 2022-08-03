import React from "react";
const card = (props) => {
  return (
    <div className="card" >
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p>{props}</p>
      </div>
    </div>
  )
};
export default card;