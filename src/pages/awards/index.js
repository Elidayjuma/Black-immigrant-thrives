import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import PageTitle from '../../components/pageTitle';
import Section from '../../components/common/section';
import IconSection from '../../components/common/iconSection';

function AwardsPage() {
  return (
    <div className="awards-page">
      <Header />
      <PageTitle
        title="Awards"
        backgroundImage="https://demo.themeignite.com/prime-charity-trust/wp-content/themes/prime-charity-trust-pro/assets/images/TittleBanner.png"
      />
      <Section
        heading="Black Immigrant Yearly Awards: Celebrating Excellence in Black Immigrant Contributions"
        body="We shine a spotlight on the outstanding contributions of Black immigrants who have significantly impacted the community and enriched Canada as a whole. The awards are a testament to the dedication, resilience, and positive influence that Black immigrants bring to our diverse and thriving nation."
      />

      <div className="container award-categories">
        <h3>Award Categories</h3>
        <div className="row">
          <div className='col col-12 col-md-6 col-lg-4 mb-3'>
            <IconSection
              title="Youth Awards"
              body="Recognizing the exceptional achievements and potential of young Black immigrants who have demonstrated leadership, ambition, and commitment to community growth."
              icon="fa-user"
            />
          </div>
          <div className='col col-12 col-md-6 col-lg-4 mb-3'>
            <IconSection
              title="New Immigrant Awards"
              body="Celebrating the accomplishments of recently arrived Black immigrants who have made noteworthy contributions to their communities and are carving a path for others to follow."
              icon="fa-compass"
            />
          </div>
          <div className='col col-12 col-md-6 col-lg-4 mb-3'>
            <IconSection
              title="Mentorship Award"
              body="Acknowledging individuals who have demonstrated outstanding mentorship, providing guidance, support, and inspiration to fellow Black immigrants on their journey."
              icon="fa-podcast"
            />
          </div>
        </div>

        <div className="row">
          <div className='col col-12 col-md-6 col-lg-4 mb-3'>
            <IconSection
              title="Impact Awards"
              body="Honouring those whose initiatives and efforts have made a significant impact on the community, creating positive change and fostering a sense of unity."
              icon="fa-users"
            />
          </div>
          <div className='col col-12 col-md-6 col-lg-4 mb-3'>
            <IconSection
              title="Entrepreneurship Awards"
              body="Recognizing Black immigrants who have shown exceptional entrepreneurial spirit, contributing to economic growth and innovation in Canada."
              icon="fa-briefcase"
            />
          </div>
          <div className='col col-12 col-md-6 col-lg-4 mb-3'>
            <IconSection
              link="/contact-us"
              linkText="Nominate Someone"
              title="Nomination Process"
              body="Do you know someone deserving of recognition? We invite you to nominate individuals who have made a difference in these categories. Please share with us the name and contact details of your nominee, along with a brief description of their contributions."
              icon="fa-bullhorn"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AwardsPage;