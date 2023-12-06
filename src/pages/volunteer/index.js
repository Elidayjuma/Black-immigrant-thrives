import React from 'react';

import Header from '../../components/header';
import Footer from '../../components/footer';
import PageTitleWithColor from '../../components/common/pageTitleWithColor';
import ImageURLs from '../../assets/images';
import ImageAndSideHeading from '../../components/common/imageAndSideHeading';
import ContactForm from './components/contactForm';

function VolunteerPage() {
  return (
    <div className="voluteer-page">
      <Header />
      <PageTitleWithColor
        title="Volunteer Opportunities"
        backgroundColor="#023020"
      />
      <ImageAndSideHeading
        heading="Volunteer with us"
        imageURL={ImageURLs.bitVoices500ImageURL}
        body="If you're passionate about our mission, fill in the form and begin the journey to become an integral part of our community initiatives."
      />
      <ContactForm />

      <Footer />
    </div>
  );
}


export default VolunteerPage;