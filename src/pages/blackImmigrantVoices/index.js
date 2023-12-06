import React from 'react';

import Header from '../../components/header';
import Footer from '../../components/footer';
import PageTitleWithColor from '../../components/common/pageTitleWithColor';
import ImageURLs from '../../assets/images';
import BIVBanner from './components/bannerSection';
import YoutubeSection from '../homePage/components/youtubeVideoSection';
import ImageAndSideHeading from '../../components/common/imageAndSideHeading';
import ContactForm from './components/contactForm';

function BlackImmigrantVoicesPage() {
  return (
    <div className="black-immigrant-voices-page">
      <Header />
      <PageTitleWithColor
        title="Black Immigrant Voices - Echo of arrival"
        backgroundColor="#023020"
      />
      <ImageAndSideHeading
        heading="Echos of arrival"
        imageURL={ImageURLs.bitVoices500ImageURL}
        body="Black Immigrant Voices is a platform to raise the voices of racialized people in Canada. Through our podcast and YouTube channel, we bring to life the challenges, triumphs, and diverse experiences of our community. It is a safe space for racialized people to generously share their unique experiences, contributing to a deeper understanding of the diverse journeys within our community. Serving as a stage for personal narratives, our platform extends beyond storytelling , it's a resource-sharing hub and a conduit for passing on valuable information.
        Black immigrant Voices serve to provide not only insights into their personal triumphs but also offer practical advice, fostering a sense of community and mutual support.
       Each episode is a dynamic exchange, a conversation that transcends borders and resonates with individuals navigating the complexities of immigration. Black Immigrant Voices is more than just a platform; it's a communal space for connection, empowerment, and education. 
       Join us on this transformative journey, where every episode becomes a stepping stone towards a more connected and informed Black immigrant community."
      />
      <ContactForm />
      <div className='container mt-3 mb-3'>
        <h3 className='h1 text-center'>Check out our episodes</h3>
        <YoutubeSection />
      </div>
      <div className="home-banner-biv mb-2">
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