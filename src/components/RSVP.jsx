import React from 'react';

export default function RSVP() {
  return (
    <div className="px-8 py-8 text-center bg-[#FAF6EE] border-t border-[#E6DFD3]">
      <h2 className="text-lg font-semibold text-[#C5A880] tracking-wider mb-4 uppercase">Kindly RSVP</h2>
      <div className="space-y-3 text-sm text-[#594F43]">
        <div>
          <p className="font-medium">Dr. Jwaad Akhtar</p>
          <a href="tel:9667966898" className="text-xs text-[#7A8A75] underline font-sans">9667966898</a>
        </div>
        <div className="pt-2">
          <p className="font-medium">Asif</p>
          <a href="tel:9873085440" className="text-xs text-[#7A8A75] underline font-sans">98730 85440</a>
        </div>
      </div>
    </div>
  );
}