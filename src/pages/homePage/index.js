import React from 'react';

import Header from '../../components/header';
import Footer from '../../components/footer';
import './components/style.css'
import ImageURLs from '../../assets/images';
import Banner from './components/bannerSection';
import AboutUsSection from './components/aboutUsSection';
import MissionSection from './components/missionSection';
import OurApproachSection from './components/ourApproachSection';
import OurObjectivesSection from './components/ourObjectivesSection';
import OuProgramsSection from './components/ourProgramsSection';
import MiscSection from './components/SupportServicesSection';
import ImageSlider from './components/imageSliderSection';
import YoutubeSection from './components/youtubeVideoSection';

function HomePage() {
    return (
      <div className="homepage">
        <Header/>
        <Banner />
        <AboutUsSection />
        <MissionSection />
        <OurApproachSection /><br/>
        {/* <Banner 
          bannerImageUrl={ImageURLs.missionImageURL}
        /><br/> */}
        <ImageSlider />
        <OurObjectivesSection />
        <OuProgramsSection/>
        <MiscSection />
        <YoutubeSection />
        <Footer/>
      </div>
    );
  }
  
  export default HomePage;