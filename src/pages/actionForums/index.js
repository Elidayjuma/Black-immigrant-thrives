import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import BannerSection from './components/bannerSection';

function ActionForumsPage() {
    return (
      <div className="action-forums-page">
        <Header/>
        {/* <PageTitle
        title="Action forums"
        backgroundImage="https://demo.themeignite.com/prime-charity-trust/wp-content/themes/prime-charity-trust-pro/assets/images/TittleBanner.png"
      /> */}
      <div className='home-banner-action-forum '>
      <BannerSection
        heading="Black Immigrant Action Forum: Empowering Solutions for a Stronger Tomorrow"
        body="This is an action table dedicated to addressing the unique challenges faced by Black immigrants and forging actionable solutions. At our forum, we believe in the power of collective action to drive positive change and create a more inclusive and supportive environment for the Black immigrant community."
      />
      </div> 

        <Footer/>
      </div>
    );
  }
  
  export default ActionForumsPage;