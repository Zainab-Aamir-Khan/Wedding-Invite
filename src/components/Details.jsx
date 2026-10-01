import React from 'react';

export default function Details() {
  return (
    <>
      {/* Parents Details */}
      <div className="px-8 py-6 text-center space-y-4 border-t border-b border-[#E6DFD3] bg-[#FCF9F2]">
        <div>
          <p className="text-xs text-[#8C8275] font-sans">Son of</p>
          <p className="text-sm font-medium text-[#594F43]">Mr. Kazim Ali & Mrs. Robina Khan</p>
        </div>
        <div className="text-[#C5A880] font-bold">&</div>
        <div>
          <p className="text-xs text-[#8C8275] font-sans">Daughter of</p>
          <p className="text-sm font-medium text-[#594F43]">Mr. Liaqat Chauhan & Mrs. Nazma Chauhan</p>
        </div>
      </div>

      {/* Event Details */}
      <div className="px-8 py-8 text-center bg-[#FAF6EE]">
        <h2 className="text-lg font-semibold text-[#C5A880] tracking-wider mb-4 uppercase">The Details</h2>
        <div className="space-y-4 text-sm text-[#594F43]">
          <div>
            <p className="text-xs uppercase text-[#7A8A75] tracking-widest font-sans">Date</p>
            <p className="font-medium mt-1">14th November 2026</p>
          </div>
          <div>
            <p className="text-xs uppercase text-[#7A8A75] tracking-widest font-sans">Time</p>
            <p className="font-medium mt-1">7:30 PM Onwards</p>
          </div>
          <div>
            <p className="text-xs uppercase text-[#7A8A75] tracking-widest font-sans">Venue</p>
            <p className="font-medium mt-1">Le Seasons Park</p>
            <p className="text-xs text-[#736A5E]">R-2, Builders Area, P-3 Circle, Greater Noida 201310</p>
          </div>
        </div>
      </div>
    </>
  );
}