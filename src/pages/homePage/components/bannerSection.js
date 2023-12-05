import React from 'react';
import "./style.css";
import ImageURLs from '../../../assets/images';

const BannerSection = (props) => {
  return (
    <div className="banner">
      <img src={props?.bannerImageUrl? props.bannerImageUrl:ImageURLs.forumImageURL} alt="Banner" />
    </div>
  );
}

export default BannerSection;