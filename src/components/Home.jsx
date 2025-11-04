import React from 'react';
import { motion } from 'framer-motion';
import JadwalSholat from './JadwalSholat';
import Kalender from './Kalender';
import Kiblat from './Kiblat';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-6xl p-4 sm:p-6"
    >
      <div className="mb-6">
        <div className="rounded-2xl p-6 bg-white/60 backdrop-blur border border-white/40 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-800">Assalamu'alaikum 👋</h2>
          <p className="mt-1 text-slate-600">Selamat datang di Mufadz App — Islami Modern Web App.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="lg:col-span-3">
          <JadwalSholat />
        </div>
        <Kalender />
        <Kiblat />
      </div>
    </motion.div>
  );
}
