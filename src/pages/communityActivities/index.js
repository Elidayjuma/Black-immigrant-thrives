import React from 'react';

import Header from '../../components/header';
import Footer from '../../components/footer';
import Card from '../../components/common/card';
import PageTitle from '../../components/pageTitle';
import ImageURLs from '../../assets/images';

export default function CommunityActivitiesPage() {
  return (
    <div className="community-activity-page">
      <Header />
      <PageTitle
        title="Community Activities"
        backgroundImage={ImageURLs.forumBannerImageURL}
      />
      <div className="cards-section">
        <div className="container ">
          <div className='row'>
            <div className='col col-12 col-md-6 col-lg-6 mb-3'>
              <Card
                title={`In-Person and Virtual Resource Sharing Events:`}
                body="We organize resource-sharing events where we bring together experts, professionals, and community members to share valuable information. Whether in person or virtually, these events serve as a hub for exchanging resources, insights, and opportunities that empower the Black immigrant community."
              />

            </div>
            <div className='col col-12 col-md-6 col-lg-6 mb-3'>
              <Card
                title={`Conferences:`}
                body="We organize conferences designed to foster dialogue, address key issues, and provide a platform for learning and collaboration within the Black immigrant community."
              />
            </div>
          </div>
          <div className='row'>
            <div className='col col-12 col-md-6 col-lg-6 mb-3'>
              <Card
                title={`Job Information Events:`}
                body="We give firsthand information on job opportunities, industry trends, and how to gain access to resources that support racialized people professional growth and success.
            Interactive Sessions: We organize sessions crafted to provide a safe space for discussions, offer support, and share resources that promote mental health and resilience within the Black immigrant community.
            Our lively and interactive sessions that encourage open dialogue, skill-building, and community bonding. These sessions cover a range of topics, providing opportunities for learning, networking, and personal growth.
            "
              />

            </div>
            <div className='col col-12 col-md-6 col-lg-6 mb-3'>
              <Card
                title={`Award Nights:`}
                body="We Celebrate the achievements and contributions of outstanding individuals in our community at our award nights. These special events recognize excellence, resilience, and the positive impact of individuals within the Black immigrant community."
              />
            </div>
          </div>
          <p><br></br><em>Click here (Put form link here) to join us in building a thriving Community.</em></p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
