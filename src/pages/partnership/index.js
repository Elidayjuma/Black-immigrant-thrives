import React from 'react';

import Header from '../../components/header';
import Footer from '../../components/footer';
import PageTitleWithColor from '../../components/common/pageTitleWithColor';
import ImageURLs from '../../assets/images';
import ImageAndSideHeading from '../../components/common/imageAndSideHeading';
import Section from '../../components/common/section';

function PartnershipPage() {
    return (
        <div className="voluteer-page">
            <Header />
            <PageTitleWithColor
                title="Partnership Opportunities"
                backgroundColor="#023020"
            />
            
            <div className="banner-career-get-involved">
                <a href='/contact-us' >
                    <Section
                        heading="Partner with us:"
                        body="Collaboration is at the heart of our impact. If you represent a business, nonprofit organization, or educational institution aligned with our mission, we invite you to partner with Black Immigrant Thrives. Get in touch with our team here"
                    /></a>
            </div>
            <ImageAndSideHeading
                heading="Partnership with us"
                ImageURL={ImageURLs.networking500ImageBoxURL}
                body="If you're passionate about our mission, fill in the form and begin the journey to become an integral part of our community initiatives."
            />
            <Footer />
        </div>
    );
}

export default PartnershipPage;