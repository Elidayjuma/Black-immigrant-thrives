import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Section from '../../components/common/section';
import './components/style.css';
import IconSection from '../../components/common/iconSection';
import ImageURLs from '../../assets/images';
import PageTitleWithColor from '../../components/common/pageTitleWithColor';

function GetInvolvedPage() {
  return (
    <div className="get-involved-page">
      <Header />
      <PageTitleWithColor
        title="Get Involved"
        backgroundColor="#023020"
      />
      {/* <PageTitle
        title="Get Involved"
        backgroundImage={ImageURLs.trainningBannerImageURL}
      /> */}
      <div className="banner-get-involved">
        <img src={ImageURLs.ACBImageURL} style={{ maxHeight: "800px", width: "100%" }} alt="Banner" />
        <div className='container'>
        <div className="banner-content-get-involved">
          <div className="banner-career-get-involved">
            <a href='/contact-us' >
              <Section
                heading="Career at Black Immigrant Thrives:"
                body="Embark on a fulfilling career journey with Black Immigrant Thrives. We believe in the power of diverse talents coming together to drive positive change. Click here to explore available career opportunities "
              /></a>
          </div>
          <div className="banner-cards-get-involved">
            <div className="container">
              {/* <h3 className='text-center'>Get Involved</h3> */}
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-4">
                  <IconSection
                    link="/contact-us"
                    linkText="Volunteer with us"
                    title="Volunteer with Us:"
                    body="If you're passionate about our mission, click here to explore volunteer opportunities and become an integral part of our community initiatives."
                    icon="fa-user"
                  />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4">

                  <IconSection
                    link="/contact-us"
                    linkText="Join us"
                    title="Become a Member:"
                    body="Join our community and become a member of Black Immigrant Thrives. Membership opens the door to a network of support, resources, and shared experiences. If you're ready to connect, learn, and grow, click here to become a member."
                    icon="fa-users"
                  />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4">

                  <IconSection
                    link="/contact-us"
                    linkText="Partner with us"
                    title="Partner with Us:"
                    body="Collaboration is at the heart of our impact. If you represent a business, nonprofit organization, or educational institution aligned with our mission, we invite you to partner with Black Immigrant Thrives. Get in touch with our team here."
                    icon="fa-podcast"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default GetInvolvedPage;