import React, { useState } from 'react';
import { TabType, Creator } from './types';
import { INITIAL_CREATORS } from './data/mockData';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { TalentPage } from './components/TalentPage';
import { AboutPage } from './components/AboutPage';
import { BookingPage } from './components/BookingPage';
import { TalentModal } from './components/TalentModal';
import { Footer } from './components/Footer';

export default function App() {
  const [currentTab, setCurrentTab] = useState<TabType>('home');
  const [creators, setCreators] = useState<Creator[]>(INITIAL_CREATORS);
  const [activeDossierCreator, setActiveDossierCreator] = useState<Creator | null>(null);
  const [bookingTalentId, setBookingTalentId] = useState<string | undefined>(undefined);

  const handleOpenDossier = (creator: Creator) => {
    setActiveDossierCreator(creator);
  };

  const handleCloseDossier = () => {
    setActiveDossierCreator(null);
  };

  const handleQuickBook = (creator: Creator) => {
    setBookingTalentId(creator.id);
    setCurrentTab('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenGeneralBooking = (talentId?: string) => {
    setBookingTalentId(talentId || 'all');
    setCurrentTab('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectTab = (tab: TabType) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddCreator = (newCreator: Creator) => {
    setCreators((prev) => [newCreator, ...prev]);
  };

  return (
    <div className="min-h-screen bg-[#07131F] text-slate-100 flex flex-col justify-between selection:bg-sky-500/30 selection:text-white relative">
      {/* Top Fixed Luxury Navigation */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        onOpenBookingForTalent={handleOpenGeneralBooking}
      />

      {/* Main Tab Content Display */}
      <main className="flex-1">
        {currentTab === 'home' && (
          <HomePage
            creators={creators}
            onSelectTab={handleSelectTab}
            onOpenDossier={handleOpenDossier}
            onQuickBook={handleQuickBook}
          />
        )}

        {currentTab === 'talent' && (
          <TalentPage
            creators={creators}
            onOpenDossier={handleOpenDossier}
            onQuickBook={handleQuickBook}
            onSelectTab={handleSelectTab}
            onAddCreator={handleAddCreator}
          />
        )}

        {currentTab === 'about' && (
          <AboutPage onSelectTab={handleSelectTab} />
        )}

        {currentTab === 'booking' && (
          <BookingPage
            creators={creators}
            preSelectedTalentId={bookingTalentId}
            onSelectTab={handleSelectTab}
          />
        )}
      </main>

      {/* Full Creator Media Kit / Dossier Modal (Triggered via Double-Click or Open Dossier) */}
      <TalentModal
        creator={activeDossierCreator}
        onClose={handleCloseDossier}
        onBookCreator={handleQuickBook}
      />

      {/* Universal Footer */}
      <Footer onSelectTab={handleSelectTab} />
    </div>
  );
}
