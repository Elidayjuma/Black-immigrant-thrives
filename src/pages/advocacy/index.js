import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Section from '../../components/common/section';
import Card from '../../components/common/card';
import PageTitle from '../../components/pageTitle';
import ImageURLs from '../../assets/images';


function Advocacy() {
    return (
      <div className="advocacy-page">
        <Header/>
        <PageTitle
                title="Advocacy"
                backgroundImage={ImageURLs.forumBannerImageURL}
            />
            <Section 
            heading="Advocacy for Equity, Inclusion, and Justice: Taking Action for a Better Tomorrow."
            body="We are dedicated to running impactful campaigns and taking action on issues related to equity, inclusion, and justice. Our commitment goes beyond words; we believe in actively addressing the challenges faced by our community to build a more equitable and inclusive society."/>
        
        <section className="cards-section">
                <div className='container'>
                    <h2 className='section-title'>Our Ongoing Campaigns</h2>
                    <div className='row'>
                    <div className='col col-12 col-md-6 col-lg-4 mb-3'>
                            <Card
                                // img={ImageURLs.storyTellingImageBoxURL}
                                title="Health and Safety at Work for New Immigrants:"
                                body="Ensuring the well-being of new immigrants by advocating for robust health and safety measures in workplaces, fostering an environment that prioritizes the health of every worker."
                            />

                        </div>
                        <div className='col col-12 col-md-6 col-lg-4 mb-3'>
                            <Card
                                // img={ImageURLs.mentorshipImageBoxURL}
                                title="Right Compensation for New immigrants/Refugees:"
                                body="Advocating for fair and just compensation for refugees, recognizing their valuable contributions and ensuring that they receive the remuneration they rightfully deserve."
                            />
                        </div>
                        <div className='col col-12 col-md-6 col-lg-4 mb-3'>
                            <Card
                                // img={ImageURLs.storyTellingImageBoxURL}
                                title="Support Immigrant Businesses:"
                                body="Fostering economic empowerment by championing policies that support and uplift immigrant-owned businesses, recognizing the vital role they play in our communities."
                            />

                        </div>
                    </div>

                    <div className='row'>
                        <div className='col col-12 col-md-6 col-lg-4 mb-3'>
                            <Card
                                // img={ImageURLs.storyTellingImageBoxURL}
                                title="Low Wages for Highly Skilled Workers:"
                                body="CaAddressing the issue of low wages for highly skilled workers, advocating for fair compensation that reflects their expertise and contributions to the Canadian workforce.mpaign"
                            />

                        </div>
                        <div className='col col-12 col-md-6 col-lg-4 mb-3'>
                            <Card
                                // img={ImageURLs.mentorshipImageBoxURL}
                                title="Canadian Experience for New Workers:"
                                body="Breaking down barriers to employment by advocating for fair recognition of skills and qualifications, ensuring that new workers have equal opportunities to contribute their talents."
                            />
                        </div>
                        <div className='col col-12 col-md-6 col-lg-4 mb-3'>
                            <Card
                                // img={ImageURLs.mentorshipImageBoxURL}
                                title="Easier Routes for New Immigrants to Get Started with Their Skills/Jobs:"
                                body="Streamlining pathways for new immigrants to integrate seamlessly into the workforce, advocating for easier access to opportunities that align with their skills and aspirations."
                            />

                        </div>
                    </div>
                </div>

            </section>  
        <Footer/>
      </div>
    );
  }
  
  export default Advocacy;