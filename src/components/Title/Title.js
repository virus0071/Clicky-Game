import React from "react";
import "./Title.css";

const Title = props => (
    <div className="header">
      <div className="title">{props.children}</div>
      <div className="score">
        Score: {props.score}
        <br/>
        Record: {props.record}
      </div>
    </div>
  );
  
  export default Title;