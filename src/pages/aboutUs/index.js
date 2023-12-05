import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import PageTitle from '../../components/pageTitle';
import Card from '../../components/common/card';
import MissionSection from '../homePage/components/missionSection';
import ImageURLs from '../../assets/images';

export default function AboutUs() {
    return (
        <div className="about-us">
            <Header />
            <PageTitle
                title="About Us"
                backgroundImage={ImageURLs.forumBannerImageURL}
            />
            <div className="container">

                <section>
                    <p className='h5'>We are a vibrant grassroot group dedicated to empowering grassroots black immigrants. We are driven by a passionate commitment to fostering unity, resilience, and collaboration within the black immigrant community. At Black Immigrant Thrives, we believe that every individual's journey is unique, and their stories, challenges, and triumphs deserve to be heard and celebrated</p>
                </section><hr/>
                <MissionSection />
            </div>
            <section className="cards-section">
                <div className='container'>
                    <h2 className='section-title'>Our approach</h2>
                    <div className='row'>
                        <div className='col col-12 col-md-6 col-lg-4 mb-3'>
                            <Card
                                img={ImageURLs.storyTellingImageBoxURL}
                                title="Storytelling and Media Engagement"
                                body="Our interactive platforms bring to life the stories, challenges, and triumphs of black immigrants. We offer a stage for personal narratives, with guest speakers who share their unique experiences, enriching our understanding of the diverse journeys within our community."
                            />

                        </div>
                        <div className='col col-12 col-md-6 col-lg-4 mb-3'>
                            <Card
                                img={ImageURLs.event500ImageBoxURL}
                                title="Community Gatherings and Forums"
                                body="We host community gatherings and forums that provide a space for individuals to connect, find inspiration, and access valuable resources. These events foster collaboration, enhancing the overall well-being of our members."
                            />
                        </div>
                        <div className='col col-12 col-md-6 col-lg-4 mb-3'>
                            <Card
                                img={ImageURLs.mentorshipImageBoxURL}
                                title="Peer Mentorship"
                                body="Through mentorship, we provide guidance and resources to help black immigrants navigate the complexities of immigration, settlement, and integration. Our mentorship programs create a strong support network, ensuring that no one is left to face their challenges alone."
                            />
                        </div>
                    </div>
                </div>

            </section>

            <Footer />
        </div>
    );
}
