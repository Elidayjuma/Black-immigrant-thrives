import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import ImageURLs from '../../assets/images';
import PageTitle from '../../components/pageTitle';
import EventCard from './components/eventCard';

function EventsPage() {
  return (
    <div className="events-page">
      <Header />
      <PageTitle
        title="Events"
        backgroundImage={ImageURLs.trainningBannerImageURL}
      />
      <div className="container">
        <h3>Our Events</h3>
        <div className="row">
        <div className='col col-12 col-md-6 col-lg-4 mb-3'>
            <EventCard
              eventImageUrl={ImageURLs.mentorshipImageURL} 
              title="Black Immigrant entrepreneurship Conference"
              body="Bi-Monthly, we hold immigrant leaders meeting to discuss uprising concerns and solutions for the community. To join, send an email to blackimmigrantthrives@gmail.com"
              date="25 December 2023"
              time="1430"
              location="7, Bayview yards, Ottawa"
              organizersName="Sheldon Team"
              donationLink="/"
            />
          </div>
          <div className='col col-12 col-md-6 col-lg-4 mb-3'>
            <EventCard
              eventImageUrl={ImageURLs.strorytellingImageURL} 
              title="Black Immigrant entrepreneurship Conference"
              body="Bi-Monthly, we hold immigrant leaders meeting to discuss uprising concerns and solutions for the community. To join, send an email to blackimmigrantthrives@gmail.com"
              date="25 December 2023"
              time="1430"
              location="7, Bayview yards, Ottawa"
              organizersName="Sheldon Team"
              donationLink="/"
            />
          </div>
          <div className='col col-12 col-md-6 col-lg-4 mb-3'>
            <EventCard
              eventImageUrl={ImageURLs.mentorshipImageURL} 
              title="Black Immigrant entrepreneurship Conference"
              body="Bi-Monthly, we hold immigrant leaders meeting to discuss uprising concerns and solutions for the community. To join, send an email to blackimmigrantthrives@gmail.com"
              date="25 December 2023"
              time="1430"
              location="7, Bayview yards, Ottawa"
              organizersName="Sheldon Team"
              donationLink="/"
            />
          </div>


        </div>
        <div className="row">
          <div className='col col-12 col-md-6 col-lg-4 mb-3'>
            <EventCard
              eventImageUrl={ImageURLs.strorytellingImageURL} 
              title="Black Immigrant entrepreneurship Conference"
              body="Bi-Monthly, we hold immigrant leaders meeting to discuss uprising concerns and solutions for the community. To join, send an email to blackimmigrantthrives@gmail.com"
              date="25 December 2023"
              time="1430"
              location="7, Bayview yards, Ottawa"
              organizersName="Sheldon Team"
              donationLink="/"
            />
          </div>
          <div className='col col-12 col-md-6 col-lg-4 mb-3'>
            <EventCard
              eventImageUrl={ImageURLs.mentorshipImageURL} 
              title="Black Immigrant entrepreneurship Conference"
              body="Bi-Monthly, we hold immigrant leaders meeting to discuss uprising concerns and solutions for the community. To join, send an email to blackimmigrantthrives@gmail.com"
              date="25 December 2023"
              time="1430"
              location="7, Bayview yards, Ottawa"
              organizersName="Sheldon Team"
              donationLink="/"
            />
          </div>
          <div className='col col-12 col-md-6 col-lg-4 mb-3'>
            <EventCard
              eventImageUrl={ImageURLs.mentorshipImageURL} 
              title="Black Immigrant entrepreneurship Conference"
              body="Bi-Monthly, we hold immigrant leaders meeting to discuss uprising concerns and solutions for the community. To join, send an email to blackimmigrantthrives@gmail.com"
              date="25 December 2023"
              time="1430"
              location="7, Bayview yards, Ottawa"
              organizersName="Sheldon Team"
              donationLink="/"
            />
          </div>


        </div>

      </div>

      <Footer />
    </div>
  );
}

export default EventsPage;