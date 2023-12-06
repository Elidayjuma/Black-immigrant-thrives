import React from 'react';
import ImageURLs from '../../../assets/images';

const BannerSection = (props) => {
  return (
    <div className="banner-biv">
    <img src={props?.bannerImageUrl? props.bannerImageUrl:ImageURLs.ACBImageURL} style={{maxHeight:"800px", width:"100%"}} alt="Banner" />
    <div className="banner-content-biv">
    <div className="h2 banner-title-biv">
      {props.heading}<br/>
    
    </div>
    <div className="h5 banner-info-biv">{props.body}</div>
    <a href={props.actionLink} className='btn btn-primary'>{props.buttonName}</a>
    </div>
  </div>
  );
}

export default BannerSection;