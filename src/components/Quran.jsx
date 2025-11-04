import React from 'react';
import { motion } from 'framer-motion';

export default function Quran() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-3xl p-4 sm:p-6"
    >
      <div className="rounded-xl bg-white/70 backdrop-blur border border-white/40 shadow-sm p-6 text-center">
        <p className="text-slate-700">Fitur Baca Quran sedang dikembangkan.</p>
      </div>
    </motion.div>
  );
}
