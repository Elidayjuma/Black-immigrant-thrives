import React from 'react';
import "./style.css";
import ImageURLs from '../../../assets/images';

const BannerSection = (props) => {
  return (
    <div className="banner-action-forum">
      <img src={props?.bannerImageUrl? props.bannerImageUrl:ImageURLs.ACBImageURL} style={{maxHeight:"800px", width:"100%"}} alt="Banner" />
      <div className="banner-content-action-forum">
      <div className="h2 banner-title-action-forum">
        {props.heading}<br/>
      
      </div>
      <div className="h5 banner-info-action-forum">{props.body}</div>
      </div>
    </div>
  );
}

export default BannerSection;