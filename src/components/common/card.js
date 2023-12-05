import React from 'react';

export default function Card(props) {
  return (
    <div className="card" style={{ height: "100%" }}>
      {props.img ? <img className="card-img-top" src={props.img} alt="Card cap" /> : ""}
      <div className="card-body">
        <h5 className="card-title">{`${props.title?props.title: ''}`}</h5>
        <p className="card-text">{`${props.body}`}</p>
        {props.link ? <a href={props.link} className="btn btn-primary">{props.linkText}</a> : ""}
        
      </div>
    </div>
  );
}