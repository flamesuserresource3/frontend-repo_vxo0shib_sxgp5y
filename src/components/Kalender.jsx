import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

const WEEKDAYS = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
const G_MONTHS = [
  'Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'
];
const H_MONTHS = [
  'Muharram','Safar','Rabiul Awal','Rabiul Akhir','Jumadil Ula','Jumadil Akhir','Rajab','Sya’ban','Ramadhan','Syawal','Dzulqa’dah','Dzulhijjah'
];

function getMonthMatrix(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1);
  const startWeekday = (firstDay.getDay() + 6) % 7; // make Monday=0, but our WEEKDAYS starts with Sunday, so we'll adapt below
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // We want Sunday-first layout, so compute Sunday index
  const firstWeekdaySundayFirst = firstDay.getDay(); // 0..6 where 0=Sun

  const cells = [];
  for (let i = 0; i < firstWeekdaySundayFirst; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d));
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

function hijriApproxFor(date) {
  // Simple, friendly dummy conversion: not accurate, but consistent for UI preview.
  const gDay = date.getDate();
  const gMonth = date.getMonth();
  const hDay = ((gDay + 10) % 30) + 1;
  const hMonth = (gMonth + 3) % 12;
  return { hDay, hMonthName: H_MONTHS[hMonth] };
}

export default function Kalender() {
  const [useHijri, setUseHijri] = useState(false);
  const today = new Date();
  const cells = useMemo(() => getMonthMatrix(today), [today]);

  const gMonthName = G_MONTHS[today.getMonth()];
  const gYear = today.getFullYear();
  const { hMonthName } = hijriApproxFor(today);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.05 }}
      className="rounded-xl bg-white/70 backdrop-blur border border-white/40 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
    >
      <div className="p-5">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-800">Kalender</h3>
            <p className="text-xs text-slate-500">
              {useHijri ? `Hijriah: ${hMonthName} ${gYear}` : `Masehi: ${gMonthName} ${gYear}`}
            </p>
          </div>
          <button
            onClick={() => setUseHijri((v) => !v)}
            className="px-3 py-2 rounded-lg text-sm font-medium bg-blue-600 text-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
          >
            {useHijri ? 'Tampilkan Masehi' : 'Tampilkan Hijriah'}
          </button>
        </div>

        <div className="grid grid-cols-7 gap-2 text-center text-xs font-medium text-slate-500">
          {WEEKDAYS.map((w) => (
            <div key={w} className="py-1">{w}</div>
          ))}
        </div>

        <div className="mt-2 grid grid-cols-7 gap-2">
          {cells.map((date, idx) => {
            if (!date) return <div key={idx} className="h-16 rounded-lg bg-slate-50/60 border border-slate-100" />;
            const isToday =
              date.getDate() === today.getDate() &&
              date.getMonth() === today.getMonth() &&
              date.getFullYear() === today.getFullYear();
            const { hDay } = hijriApproxFor(date);
            return (
              <div
                key={idx}
                className={`h-16 rounded-lg border p-2 text-left transition shadow-xs hover:shadow-md hover:-translate-y-0.5 ${
                  isToday
                    ? 'bg-gradient-to-br from-sky-100 via-blue-50 to-white border-blue-200'
                    : 'bg-white/70 backdrop-blur border-slate-100'
                }`}
              >
                <div className="text-slate-700 text-sm font-semibold">{date.getDate()}</div>
                {useHijri && (
                  <div className="text-[10px] text-blue-700 mt-1">{hDay}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
