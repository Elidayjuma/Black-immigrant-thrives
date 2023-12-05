import React from 'react';
import Card from '../../../components/common/card';
import {CircleCard, CircleCard2} from '../../../components/common/circleCard';
import ImageURLs from '../../../assets/images';

export default function SupportServicesSection() {
    return (
        <div className="support-services-section">
                <hr/>
<section className="cards-section mb-0">
            <div className="container">
            <h2 className='section-title'>ONGOING CAMPAIGNS</h2>
                <div className="row">
                    <div className='col col-12 col-md-6 col-lg-3 mb-3'>
                        <CircleCard2
                            img={ImageURLs.mentorshipImageURL} 
                            icon="faPersonDigging"
                            link="/support-services"
                            linkText="Learn more"
                            title="Experience Know No Borders: Rethinking Canadian Experience in the Workplace"
                            body="Newcomers face challenges in gaining employment due to their lack of Canadian work experience. Be part of our ongoing efforts to create awareness on the importance of recognizing diverse skills, talents and experiences."
                        />
                    </div>
                    <div className='col col-12 col-md-6 col-lg-3 mb-3'>
                        <CircleCard2
                            img={ImageURLs.mentorshipImageURL}
                            link="/support-services"
                            linkText="Learn more"
                            // img={ImageURLs.missionImageURL}
                            title="Fair Compensation for Newcomers and Refugees"
                            body="Join our campaign advocating for fair compensation for new highly skilled immigrant workers deserve competitive wages. Immigrants often face challenges in securing fair compensation for their skills."
                        />
                    </div>

                    <div className='col col-12 col-md-6 col-lg-3 mb-3'>
                        <CircleCard2
                            img={ImageURLs.mentorshipImageURL}
                            link="/support-services"
                            linkText="Learn more"
                            // img={ImageURLs.missionImageURL}
                            title="Empowering New Immigrants: Health and Safety Advocacy"
                            body="Ensuring health and safety at work is vital. Many immigrants find themselves working in unfair conditions. Join our campaign to advocate for improved workplace safety standards, creating a secure environment for all."
                        />
                    </div>
                    <div className='col col-12 col-md-6 col-lg-3 mb-3'>
                        <CircleCard2
                            img={ImageURLs.mentorshipImageURL}
                            link="/support-services"
                            linkText="Learn more"
                            // img={ImageURLs.missionImageURL}
                            title="Support Immigrant Businesses"
                            body="Explore our initiatives dedicated to supporting and championing small immigrant businesses, contributing to the strength and sustainability of our communities."
                        />
                    </div>
                </div>
            </div>
            </section>
        </div>
    );
}