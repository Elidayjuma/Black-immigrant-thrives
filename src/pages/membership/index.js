import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import BannerSection from './components/bannerSection';
import ImageURLs from '../../assets/images';

function MembershipPage() {
    return (
      <div className="action-forums-page">
        <Header/>
        {/* <PageTitle
        title="Action forums"
        backgroundImage="https://demo.themeignite.com/prime-charity-trust/wp-content/themes/prime-charity-trust-pro/assets/images/TittleBanner.png"
      /> */}
      <div className='home-banner-biv home-banner-action-forum '>
      <BannerSection
        bannerImageUrl={ImageURLs.networkingBannerImageURL}
        actionLink="/"
        buttonName="Membership application"
        heading="Become a member"
        body="Join our community and become a member of Black Immigrant Thrives. Membership opens the door to a network of support, resources, and shared experiences. If you're ready to connect, learn, and grow, click the button to become a member."
      />
      </div> 

        <Footer/>
      </div>
    );
  }
  
  export default MembershipPage;