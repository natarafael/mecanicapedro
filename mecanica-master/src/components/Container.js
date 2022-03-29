import React from "react";

import "./Container.css";

const Container = (props) => {
  return (
    <div className="content-container" style={{marginLeft: "100px", marginRight: "100px"}}>
      <h3>{props.title}</h3>
      <img src={props.img} alt={props.title} />
    </div>
  );
};

export default Container;
