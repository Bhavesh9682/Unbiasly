import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';
import AboutPage from './pages/AboutPage';
import Pricing from './pages/Pricing';
import BookingForm from './components/BookingForm';
import CrystalShopPage from './pages/CrystalShopPage';
import PagesBlogPage from './pages/PagesBlogPage';
import NumerologyServicesPage from './pages/NumerologyServicesPage';
import CommunityPage from './pages/CommunityPage';
import EventsPage from './pages/EventsPage';
import ServiceCard from './components/ServiceCard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/BookingForm" element={<BookingForm />} />
      <Route path="/crystal-shop" element={<CrystalShopPage />} />
      <Route path="/PagesBlogPage" element={<PagesBlogPage />} />
      <Route path="/services" element={<ServiceCard/>} />
      <Route path="/community" element={<CommunityPage/>} />
      <Route path="/events" element={<EventsPage/>} />
    </Routes>
  );
}

export default App;
