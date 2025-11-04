import React from 'react';
import { Home, MessageCircle, BookOpen, User } from 'lucide-react';

const navItems = [
  { key: 'Chat', label: 'Chat Global', icon: MessageCircle },
  { key: 'Home', label: 'Home', icon: Home },
  { key: 'Quran', label: 'Baca Quran', icon: BookOpen },
  { key: 'Profile', label: 'Profile', icon: User },
];

export default function Navbar({ current, onChange }) {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-white/90 shadow-sm">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-sky-200 via-blue-500 to-blue-900 shadow-md" />
            <span className="text-xl font-semibold text-blue-700">Mufadz App</span>
          </div>
          <nav className="flex items-center gap-1">
            {navItems.map(({ key, label, icon: Icon }) => {
              const active = current === key;
              return (
                <button
                  key={key}
                  onClick={() => onChange(key)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-blue-50 hover:-translate-y-0.5 ${
                    active ? 'text-blue-600 bg-blue-50 shadow-sm' : 'text-slate-600'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  <Icon className="h-4 w-4" />
                  <span className="text-sm font-medium">{label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
