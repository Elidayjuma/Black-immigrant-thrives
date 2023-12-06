import React from 'react';

import Header from '../../components/header';
import Footer from '../../components/footer';
import PageTitleWithColor from '../../components/common/pageTitleWithColor';
import Section from '../../components/common/section';

function CareersPage() {
    return (
      <div className="careers-page">
        <Header/>
        <PageTitleWithColor
          title="Careers"
          backgroundColor="#023020"
        />
        <div className="banner-career-get-involved">
            <a href='/contact-us' >
              <Section
                heading="Career at Black Immigrant Thrives:"
                body="Embark on a fulfilling career journey with Black Immigrant Thrives. We believe in the power of diverse talents coming together to drive positive change. Click here to explore available career opportunities "
              /></a>
          </div>

        <Footer/>
      </div>
    );
  }
  
  export default CareersPage;