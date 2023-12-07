import React from 'react';

import Header from '../../components/header';
import Footer from '../../components/footer';
import PageTitle from '../../components/pageTitle';
import Card from '../../components/common/card';
import ImageURLs from '../../assets/images';

function TrainingPage() {
  return (
    <div className="trainingpage">
      <Header />
      <PageTitle
        title="Our Trainings"
        backgroundImage={ImageURLs.trainningBannerImageURL}
        />
      <div className='container'>
        <h2>Our Trainings</h2>
        <ul className="training-list">
          <li>Newcomer Canadian Workplace training</li>
          <li>Newcomer Workplace Communication training</li>
          <li>Job support training</li>
        </ul>
        <h2>Why train with us:</h2>
        <div className="row mt-4">
          <div className='col col-12 col-md-6 col-lg-4 mb-3'>
            <Card
              img={ImageURLs.peerSupportImageBoxURL}
              title="Peer Trainers with Real-World Experience:"
              body="Learn from peer mentors who have successfully navigated the Canadian workforce as Black immigrants. Our trainers are not just educators; they are individuals who understand your journey because they've walked a similar path. Benefit from their firsthand experiences, insights, and practical advice."
            />
          </div>
          <div className='col col-12 col-md-6 col-lg-4 mb-3'>
            <Card
              img={ImageURLs.mentorshipImageBoxURL}
              title="Tailored Curriculum:"
              body="Our training programs are specifically crafted to address the unique needs of Black immigrants, ensuring relevance and applicability to your career goals."
            />
          </div>
          <div className='col col-12 col-md-6 col-lg-4 mb-3'>
            <Card
              img={ImageURLs.peer500ImageBoxURL}
              title="Internship Opportunities for Students:"
              body="As part of our commitment to your success, we offer exclusive internship opportunities for our students. Gain hands-on experience in your field of study, apply the skills you've learned in real-world scenarios, and build a valuable professional network."
            />
          </div>
        </div>
        <div className="row my-4">
          <div className='col col-12 col-md-6 col-lg-4 mb-3'>
            <Card
              img={ImageURLs.bitVoices500ImageURL}
              title="Practical Application:"
              body="Apply the knowledge gained during training in a real-world setting, bridging the gap between theory and practice."
            />
          </div>
          <div className='col col-12 col-md-6 col-lg-4 mb-3'>
            <Card
              img={ImageURLs.event500ImageBoxURL}
              title="Professional Networking:"
              body="Establish connections with industry professionals, mentors, and potential employers to enhance your career prospects."
            />
          </div>
          <div className='col col-12 col-md-6 col-lg-4 mb-3'>
            <Card
              img={ImageURLs.visionImageURL}
              title="Possibility of Getting Hired"
              body="Our programs aren't just about training; they're about preparing you for successful integration into the Canadian workforce. Many of our students have gone on to secure permanent positions with our partner organizations, demonstrating the effectiveness of our training in opening doors to employment opportunities."
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TrainingPage;