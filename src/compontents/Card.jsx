import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Card = (props) => {
  return (
    <>
      <div className="ib">
        <div className="card customCard ">
          
          <div className="card-header ">
            <img className="img" src={props.imageURL} alt="sense_img" />
          </div>

          <div className="card-body">
            <h3>{props.title}</h3>
            <p>{props.content}</p>
          </div>

          <div className="card-footer"></div>

        </div>
      </div>
    </>
  );
};

export default Card;
