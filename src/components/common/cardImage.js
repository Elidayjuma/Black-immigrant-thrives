import React from 'react';
import ImageURLs from '../../assets/images';

export default function CardImage(props) {
  return (
    <div className="card" style={{ height: "100%" }}>
      {/* {props.img ? <img  src={props.img} alt="Card cap" /> : ""} */}
      <img className="card-img-top" style={{ height: "100%" }} src={props.ImageURL? props.ImageURL : ImageURLs.bitVoices500ImageURL} alt="cardimg" />
      <div className="card-body" style={{ display: "none" }}>
        <h5 className="card-title">{`${props.title?props.title: ''}`}</h5>
        <p className="card-text">{`${props.body?props.body: ''}`}</p>
        {props.link ? <a href={props.link} className="btn btn-primary">{props.linkText}</a> : ""}
        
      </div>
    </div>
  );
}