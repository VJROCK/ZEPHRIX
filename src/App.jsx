import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import ServiceDetailModal from './components/ServiceDetailModal';
import Industries from './components/Industries';
import CaseStudies from './components/CaseStudies';
import CaseStudyModal from './components/CaseStudyModal';
import About from './components/About';
import TechStack from './components/TechStack';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Careers from './components/Careers';
import JobApplyModal from './components/JobApplyModal';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScheduleModal from './components/ScheduleModal';
import { SERVICES } from './data/websiteData';

export default function App() {
  const [activeServiceModal, setActiveServiceModal] = useState(null);
  const [activeCaseModal, setActiveCaseModal] = useState(null);
  const [activeJobModal, setActiveJobModal] = useState(null);
  const [scheduleModalOpen, setScheduleModalOpen] = useState(false);
  const [preselectedContactService, setPreselectedContactService] = useState('AI Product Development');

  const handleSelectServiceFromConsole = (serviceId) => {
    const found = SERVICES.find((s) => s.id === serviceId);
    if (found) {
      setActiveServiceModal(found);
    }
  };

  const handleConsultService = (serviceTitle) => {
    setPreselectedContactService(serviceTitle);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="zephrix-app">
      {/* Navigation */}
      <Navbar onOpenScheduleModal={() => setScheduleModalOpen(true)} />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero
          onOpenScheduleModal={() => setScheduleModalOpen(true)}
          onSelectService={handleSelectServiceFromConsole}
        />

        <Stats />

        <Services
          onOpenServiceModal={(service) => setActiveServiceModal(service)}
        />

        <Industries />

        <CaseStudies
          onOpenCaseModal={(caseItem) => setActiveCaseModal(caseItem)}
        />

        <About />

        <TechStack />

        <Team />

        <Testimonials />

        <Careers
          onOpenJobModal={(job) => setActiveJobModal(job)}
        />

        <Contact
          preselectedService={preselectedContactService}
        />
      </main>

      {/* Footer */}
      <Footer
        onSelectService={(serviceTitle) => handleConsultService(serviceTitle)}
      />

      {/* Interactive Modals & Drawers */}
      <ServiceDetailModal
        service={activeServiceModal}
        onClose={() => setActiveServiceModal(null)}
        onSelectForQuote={handleConsultService}
      />

      <CaseStudyModal
        caseStudy={activeCaseModal}
        onClose={() => setActiveCaseModal(null)}
        onDiscussProject={(title) => handleConsultService(`Case Study: ${title}`)}
      />

      <JobApplyModal
        job={activeJobModal}
        onClose={() => setActiveJobModal(null)}
      />

      <ScheduleModal
        isOpen={scheduleModalOpen}
        onClose={() => setScheduleModalOpen(false)}
      />
    </div>
  );
}
