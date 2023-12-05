import React from 'react';
import "./style.css";

const YoutubeSection = (props) => {
    return (
        <div className="youtube-section">
            <div className='container'>
                <div className='row text-center'>
                    <div className='col-md-6' >
                        <iframe
                            width= '100%'
                            height= "300px"
                            src="https://www.youtube.com/embed/OiAmRmqUbmU?si=KACM0N3n16-aKe70"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen>
                        </iframe>
                    </div>
                    <div className='col-md-6'>
                        <iframe
                            width="100%"
                            height="300px"
                            src="https://www.youtube.com/embed/OiAmRmqUbmU?si=KACM0N3n16-aKe70"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen>
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default YoutubeSection;