import React from 'react';

const ImageSlider = (props) => {

    return (
        <div className="image-slider-component" id="#image-slider">
            <div className='image-slider-row'>
                {props.images.map((image, index) => {
                    return (
                    
                         <div className="image-slider-col">
                            {/* <div className="image" id={index}> */}
                                <img src={image} alt="slider" />
                            {/* </div> */}
                         </div>
                    
                    )
                })}
            </div>
            <div className='image-slider-row delay'>
                {props.images.map((image, index) => {
                    return (
                        
                         <div className="image-slider-col">
                            {/* <div className="image" id={index}> */}
                                <img src={image} alt="slider" />
                            {/* </div> */}
                         </div>
                    
                    )
                })}
            </div>
        </div>
    );
}

export default ImageSlider;