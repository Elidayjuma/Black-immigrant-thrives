import React from 'react';
import "./style.css";
import ImageURLs from '../../../assets/images';
import ImageSlider from '../../../components/common/imageSlider';

const ImageSliderSection = (props) => {
  const images= [
    ImageURLs.peerSupportImageBoxURL,
    ImageURLs.eventImageBoxURL,
    ImageURLs.bitvoicesImageBoxURL,
    ImageURLs.mentorshipImageBoxURL,
    ImageURLs.storyTellingImageBoxURL,
    ImageURLs.peerSupportImageBoxURL]

  return (
    <div className="image-slider-section">
      <ImageSlider
        images={images}
      />
    </div>
  );
}

export default ImageSliderSection;