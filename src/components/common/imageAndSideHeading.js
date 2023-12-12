import React from 'react';
import ImageURLs from '../../assets/images';

export default function ImageAndSideHeading(props) {
  return (
    <div className='row'>
    <div className='col-md-6'>
        <img src={props.ImageURL? props.ImageURL : ImageURLs.bitVoices500ImageURL} alt="bitVoices" style={{filter: 'brightness(50%)',width:'100%', float: 'left' }} />
    </div>
      <div className='col-md-6' style={{margin: 'auto'}}>
      {/* <p className=' h1 text-center' > {props.title} </p> */}
      <p className=' text-left' > {props.body} </p>
      </div>
    </div>
  );
}