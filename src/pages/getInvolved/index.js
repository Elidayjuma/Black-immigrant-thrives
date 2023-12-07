import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import './components/style.css';
import Card from '../../components/common/card';
import CardImage from '../../components/common/cardImage';
import ImageURLs from '../../assets/images';
import PageTitleWithHalfColor from '../../components/common/pageTitleWithHalfColor';

function GetInvolvedPage() {
  return (
    <div className="get-involved-page">
      <Header />
      <PageTitleWithHalfColor
        title="Lets get you involved"
        backgroundColor="#023020"
      />
      <div className="row">
        <div className="text-center col col-sm-12 col-md-6 col-lg-4">
          <Card
            link="./careers"
            linkText="Learn more"
            title="Careers"
            body="Embark on a fulfilling career journey with us. We believe in the power of diverse talents coming together to drive positive change. Click here to explore available career opportunities."
          />
        </div>
        <div className=" col col-sm-12 col-md-6 col-lg-4">
          <CardImage ImageURL={ImageURLs.networking500ImageBoxURL} />
        </div>
        <div className="text-center col col-sm-12 col-md-6 col-lg-4">
          <Card
            link="./about-us"
            linkText="Volunteer today"
            title="Volunteer"
            body="If you're passionate about our mission, click on the link, fill the form and begin the journey to become an integral part of our community initiatives by becoming a volunteer."
          />
        </div>
      </div>
      <div className="row">
        <div className="text-center col col-sm-12 col-md-6 col-lg-4">
          <CardImage ImageURL={ImageURLs.event500ImageBoxURL} />
        </div>
        <div className="text-center col col-sm-12 col-md-6 col-lg-4">
          <Card
            link="/membership"
            linkText="Membership application"
            title="Become a member"
            body="Join our community and become a member of Black Immigrant Thrives. Membership opens the door to a network of support, resources, and shared experiences. If you're ready to connect, learn, and grow, become a member."
          />
        </div>
        <div className="text-center col col-sm-12 col-md-6 col-lg-4">
          <CardImage ImageURL={ImageURLs.visionImageURL} />
        </div>
      </div>
      <div className="row">
        <div className="text-center col col-sm-12 col-md-6 col-lg-4">
          <Card
            link="/partnership"
            linkText="Partner with us"
            title="Partner"
            body="Collaboration is at the heart of our impact. If you represent a business, nonprofit organization, or educational institution aligned with our mission, we invite you to partner with Black Immigrant Thrives."
          />
        </div>
        <div className="col col-sm-12 col-md-6 col-lg-4">
          <CardImage ImageURL={ImageURLs.peer500ImageBoxURL} />
        </div>
        <div className="text-center col col-sm-12 col-md-6 col-lg-4">
          <Card
            link="/#"
            linkText="Make an impact"
            title="Donate"
            body="Empower change with your generosity. Every contribution makes a difference in creating a brighter future. Thank you for supporting our mission"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default GetInvolvedPage;