import React from 'react';
import { motion } from 'framer-motion';

export default function Kiblat() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="rounded-xl bg-white/70 backdrop-blur border border-white/40 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
    >
      <div className="p-5">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">Arah Kiblat</h3>
        <div className="flex flex-col items-center">
          <div className="relative h-48 w-48 rounded-full border-2 border-blue-200 bg-gradient-to-br from-white to-sky-50 shadow-inner overflow-hidden">
            {/* Cardinal points */}
            <div className="absolute inset-0 flex items-center justify-center text-[10px] text-slate-500">
              <div className="absolute top-1">U</div>
              <div className="absolute bottom-1">S</div>
              <div className="absolute left-1">B</div>
              <div className="absolute right-1">T</div>
            </div>
            {/* Needle */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative h-40 w-40">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div
                    className="origin-bottom h-16 w-1 rounded-full bg-gradient-to-b from-blue-600 to-blue-900 shadow"
                    style={{ transform: 'rotate(-45deg)' }}
                  />
                  <div className="mt-1 h-2 w-2 rounded-full bg-blue-700 mx-auto" />
                </div>
              </div>
            </div>
          </div>
          <p className="mt-3 text-sm text-slate-600">Arah Ka'bah: Barat Laut (dummy)</p>
        </div>
      </div>
    </motion.div>
  );
}
