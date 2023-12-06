import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/style.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import HomePage from "./pages/homePage";
import ErrorPage from './pages/errorPage';
import AboutUsPage from './pages/aboutUs';
import TrainingPage from './pages/training';
import CommunityActivitiesPage from './pages/communityActivities';
import BlackImmigrantVoicesPage from './pages/blackImmigrantVoices';
import AwardsPage from './pages/awards';
import ActionForumsPage from './pages/actionForums';
import SupportServicesPage from './pages/supportServices';
import AdvocacyPage from './pages/advocacy';
import GetInvolvedPage from './pages/getInvolved';
import HireUsPage from './pages/hireUs';
import ContactUsPage from './pages/contact';
import EventsPage from './pages/events';
import CareersPage from './pages/careers';
import VolunteerPage from './pages/volunteer';
import MembershipPage from './pages/membership';
import PartnershipPage from './pages/partnership';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about-us",
    element: <AboutUsPage />
  },
  {
    path: "/training",
    element: <TrainingPage/>
  },
  {
    path: "/community-activities",
    element: <CommunityActivitiesPage/>
  },
  {
    path: "/black-immigrant-voices",
    element: <BlackImmigrantVoicesPage/>
  },
  {
    path: "/awards",
    element: <AwardsPage/>
  },
  {
    path: "/action-forums",
    element: <ActionForumsPage/>
  },
  {
    path: "/support-services",
    element: <SupportServicesPage/>
  },
  {
    path: "/advocacy",
    element: <AdvocacyPage/>
  },
  {
    path: "/get-involved",
    element: <GetInvolvedPage/>
  },
  {
    path: "/hire-us",
    element: <HireUsPage/>
  },
  {
    path: "/contact-us",
    element: <ContactUsPage/>
  },
  {
    path: "/events",
    element: <EventsPage/>
  },
  {
    path: "/careers",
    element: <CareersPage/>
  },
  {
    path: "/volunteer",
    element: <VolunteerPage/>
  },
  {
    path: "/membership",
    element: <MembershipPage/>
  },
  {
    path: "/partnership",
    element: <PartnershipPage/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


