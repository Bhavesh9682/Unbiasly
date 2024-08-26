// src/routes/AppRoutes.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import AboutPage from '../pages/AboutPage';
import TarotServicesPage from '../pages/TarotServicesPage';
import NumerologyServicesPage from '../pages/NumerologyServicesPage';

import CommunityPage from '../pages/CommunityPage';
import ContactPage from '../pages/ContactPage';
import UserAccountPage from '../pages/UserAccountPage';
import Pricing from '../pages/Pricing';
import BookingForm from '../components/BookingForm';
import CrystalShopPage from '../pages/CrystalShopPage';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/tarot-services" element={<TarotServicesPage />} />
      <Route path="/numerology-services" element={<NumerologyServicesPage />} />
      <Route path="/crystal-shop" element={<CrystalShopPage />} />
      <Route path="/PagesBlogPage " element={<PagesBlogPage />} />
      <Route path="/BookingForm " element={<BookingForm />} />
      <Route path="/community" element={<CommunityPage />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="events" element={<EventsPage />} />
      <Route path="/account" element={<UserAccountPage />} />
    </Routes>
  </Router>
);

export default AppRoutes;
