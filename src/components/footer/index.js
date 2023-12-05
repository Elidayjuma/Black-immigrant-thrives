import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

function Footer() {
  return (
    <div>
    <div className="footer">
      <div className="container justify-content-center">
        <div className="row">
          <div className="col col-sm-12 col-md-12 col-lg-4">
            <a href="/" className='nav-link'>SUBSCRIBE TO OUR NEWSLETTER</a>
          </div>
          <div className="col col-sm-12 col-md-12 col-lg-4">
            <div className='row'>
              <div className="col">
                <a className="nav-link" href="https://www.youtube.com/channel/UCP3EAc3hssmCJNOuWNWR4Fw">
                  <FontAwesomeIcon
                    size="2x"
                    icon={icon({ name: 'youtube', style: 'brands' })} /></a>
              </div>
              <div className="col">
                <a className="nav-link" href="https://instagram.com/blackimmigrant_thrives?utm_source=qr&igshid=YzU1NGVlODEzOA==">
                  <FontAwesomeIcon
                    size="2x"
                    icon={icon({ name: 'instagram', style: 'brands' })} />
                </a>
              </div>
              <div className="col">
                <a className="nav-link" href="https://www.facebook.com/profile.php?id=100093668154818&mibextid=ZbWKwL">
                  <FontAwesomeIcon
                    size="2x"
                    icon={icon({ name: 'facebook', style: 'brands' })} /></a>
              </div>
              <div className="col">
                <a className="nav-link" href="https://anchor.fm/blackimmigrant-thrives">
                  <FontAwesomeIcon
                    size="2x"
                    icon={icon({ name: 'spotify', style: 'brands' })} /></a>
              </div>
            </div>
          </div>
          <div className="col col-sm-12 col-md-12 col-lg-4">
            <a href="/" className='nav-link'>CONTACT US</a>
          </div>
        </div>
        <div className="row copy-right-footer">
        </div>
      </div>
    </div>
      <div className="row text-center copy-right-footer">
        <span>  &copy; Black Immigrants Thrive - 2023</span>
      </div>
    </div>
  );
}

export default Footer;