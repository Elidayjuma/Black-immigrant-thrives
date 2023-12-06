import React from 'react';
import Card from '../../../components/common/card';
import ImageURLs from '../../../assets/images';

export default function OurProgramsSection() {
    return (
        <div className="programs-section">
            <div className="container">
                <h2 className='section-title'>DISCOVER OUR PROGRAMS</h2>
                <div className="row text-center">
                    <div className='col col-12 col-md-6 col-lg-3 mb-3'>
                        <Card
                            link="/contact-us"
                            linkText="Learn more"
                            img={ImageURLs.bitvoicesImageBoxURL}
                            title="Black Immigrant Voices - Echoes of Arrival"
                            body="'Black Immigrant Voices - Echoes of Arrival' is a dedicated space for amplifying the voices of racialized individuals in Canada. Through our engaging podcast and YouTube channel, we strive to bring forth the challenges, triumphs, and diverse experiences of black immigrant community. Click here to watch our episodes
              Do you have a story to tell, an experience to share, or insights to impart? Sign up to be a guest member here"
                        />
                    </div>
                    <div className='col col-12 col-md-6 col-lg-3 mb-3'>
                        <Card
                            link="/awards"
                            linkText="Learn more"
                            img={ImageURLs.bitExcellenceImageBoxURL}
                            title="Celebrating Black Immigrant excellence. "
                            body="We shine a spotlight on the outstanding contributions of Black immigrants who have significantly impacted the community and enriched Canada as a whole. Do you know someone deserving of recognition? Click here to Nominate Someone"
                        />
                    </div>

                    <div className='col col-12 col-md-6 col-lg-3 mb-3'>
                        <Card
                            link="/events"
                            linkText="Learn more"
                            img={ImageURLs.eventImageBoxURL}
                            title="Black Immigrants Community Events"
                            body="We organise community events where we bring together experts, professionals, and community members to share valuable information. Whether in person or virtually, these events serve as a hub for exchanging resources, insights, and opportunities that empower the Black immigrant community."
                        />
                    </div>
                    <div className='col col-12 col-md-6 col-lg-3 mb-3'>
                        <Card
                            link="/support-services"
                            linkText="Learn more"
                            img={ImageURLs.peerSupportImageBoxURL}
                            title="Black Immigrant Peer Mentorship"
                            body="Guidance from someone who understands your journey can make a significant difference. Our peer mentorship program connects individuals with experienced mentors who share similar backgrounds and experiences. "
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}