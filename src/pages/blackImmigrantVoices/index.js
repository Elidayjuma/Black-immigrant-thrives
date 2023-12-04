import React from 'react';

import Header from '../../components/header';
import Footer from '../../components/footer';
import PageTitle from '../../components/pageTitle';
import Card from '../../components/common/card';
import ImageURLs from '../../assets/images';
import BIVBanner from './components/bannerSection';

function BlackImmigrantVoicesPage() {
  return (
    <div className="black-immigrant-voices-page">
      <Header />
      <PageTitle
        title="Black Immigrant Voices"
        backgroundImage={ImageURLs.forumBannerImageURL}
        />
        <div className="container">
        <Card 
        title="Black Immigrant Voices"
        body={`Black Immigrant Voices is a platform to raise the voices of racialized people in Canada. Through our podcast and YouTube channel, we bring to life the challenges, triumphs, and diverse experiences of our community. It is a safe space for racialized people to generously share their unique experiences, contributing to a deeper understanding of the diverse journeys within our community. Serving as a stage for personal narratives, our platform extends beyond storytelling , it's a resource-sharing hub and a conduit for passing on valuable information.
        Black immigrant Voices serve to provide not only insights into their personal triumphs but also offer practical advice, fostering a sense of community and mutual support.
       Each episode is a dynamic exchange, a conversation that transcends borders and resonates with individuals navigating the complexities of immigration. Black Immigrant Voices is more than just a platform; it's a communal space for connection, empowerment, and education. 
       Join us on this transformative journey, where every episode becomes a stepping stone towards a more connected and informed Black immigrant community.`}
        />
        </div>
        <div className="home-banner-biv">
        <BIVBanner 
          heading="Black Immigrant Voices"
          body={`Do you have a story to tell, an experience to share, or insights to impart, we invite you to be part of "Black Immigrant Voices." Simply complete the form by clicking the button below, and our dedicated team will reach out to you promptly.`}
          buttonName='Submit story'
          actionLink="#"
        />
        </div>

      <Footer />
    </div>
  );
}


export default BlackImmigrantVoicesPage;