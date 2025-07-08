import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import ProjectDetail from './components/ProjectDetail';
import Contact from './components/Contact';
import About from './components/About';
import SEOServices from './components/SEOServices';
import AdsServices from './components/AdsServices';
import SocialMediaServices from './components/SocialMediaServices';
import DigitalMarketingAgency from './components/DigitalMarketingAgency';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/seo-services" element={<SEOServices />} />
          <Route path="/ads-services" element={<AdsServices />} />
          <Route path="/social-media-services" element={<SocialMediaServices />} />
          <Route path="/digital-marketing-agency" element={<DigitalMarketingAgency />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;