import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ChatGlobal from './components/ChatGlobal';
import Quran from './components/Quran';
import Profile from './components/Profile';

function App() {
  const [current, setCurrent] = useState('Home');

  const renderPage = () => {
    switch (current) {
      case 'Chat':
        return <ChatGlobal />;
      case 'Quran':
        return <Quran />;
      case 'Profile':
        return <Profile />;
      case 'Home':
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans relative">
      {/* Subtle blue gradient background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-b from-[#E0F2FE] via-white to-white" />
        <div className="absolute -top-32 right-0 h-80 w-80 rounded-full bg-gradient-to-br from-[#E0F2FE] via-[#3B82F6]/40 to-[#1E3A8A]/30 blur-3xl opacity-60" />
        <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-gradient-to-tr from-[#E0F2FE] via-[#3B82F6]/30 to-[#1E3A8A]/20 blur-3xl opacity-60" />
      </div>

      <Navbar current={current} onChange={setCurrent} />
      <main className="relative">
        {renderPage()}
      </main>

      <footer className="relative mt-10 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Mufadz App — Islami Modern Web App
      </footer>
    </div>
  );
}

export default App;
