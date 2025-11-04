import React from 'react';
import { motion } from 'framer-motion';

const schedules = [
  { name: 'Subuh', time: '04:35' },
  { name: 'Zuhur', time: '12:03' },
  { name: 'Ashar', time: '15:21' },
  { name: 'Maghrib', time: '18:03' },
  { name: 'Isya', time: '19:12' },
];

export default function JadwalSholat() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-xl bg-white/70 backdrop-blur border border-white/40 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
    >
      <div className="p-5">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-800">Jadwal Sholat Hari Ini</h3>
          <span className="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100">Dummy</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {schedules.map((s) => (
            <div
              key={s.name}
              className="rounded-lg bg-gradient-to-br from-sky-50 to-white border border-blue-50 p-3 text-center shadow-xs hover:shadow-md transition"
            >
              <div className="text-sm text-slate-500">{s.name}</div>
              <div className="mt-1 text-xl font-semibold text-blue-700">{s.time}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
