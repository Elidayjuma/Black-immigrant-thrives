import React from 'react';

import Header from '../../components/header';
import Footer from '../../components/footer';
import ImageURLs from '../../assets/images';
import PageTitleWithColor from '../../components/common/pageTitleWithColor';
import ContactForm from './components/contactForm';

function ContactPage() {
    return (
      <div className="contact-page">
        <Header/>
        <PageTitleWithColor
          title="Contact Us"
          backgroundColor='black'
        />
        <div className="container">
        <ContactForm />
        </div>

        <Footer/>
      </div>
    );
  }
  
  export default ContactPage;