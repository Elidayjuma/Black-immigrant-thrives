import React from 'react';
import Card from "../../../components/common/card.js";
import './style.css'

export default function OurApproachSection() {
    return (
        <div className="our-approach-section">
            <section className="cards-section">
                    <h2 className='section-title'>OUR APPROACH</h2>
                    <div className='row'>
                        <div className='col col-12 col-md-6 col-lg-4 mb-3 card1'>
                            <Card
                                link="./about-us"
                                linkText="Learn more"
                                title="Storytelling and Media Engagement"
                                body="Our interactive platforms bring to life the stories, challenges, and triumphs of black immigrants. We offer a stage for personal narratives, with guest speakers who share their unique experiences, enriching our understanding of the diverse journeys within our community."
                            />

                        </div>
                        <div className='col col-12 col-md-6 col-lg-4 mb-3 card2'>
                            <Card
                                link="./about-us"
                                linkText="Learn more"
                                title="Community Gatherings and Forums"
                                body="We host community gatherings and forums that provide a space for individuals to connect, find inspiration, and access valuable resources. These events foster collaboration, enhancing the overall well-being of our members."
                            />
                        </div>
                        <div className='col col-12 col-md-6 col-lg-4 mb-3 card3'>
                            <Card
                                link="./about-us"
                                linkText="Learn more"
                                title="Peer Mentorship"
                                body="Through mentorship, we provide guidance and resources to help black immigrants navigate the complexities of immigration, settlement, and integration. Our mentorship programs create a strong support network, ensuring that no one is left to face their challenges alone."
                            />

                        </div>
                    </div>
            </section>
        </div>
    );
}