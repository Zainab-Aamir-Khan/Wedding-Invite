import React from 'react';

export default function Envelope({ onOpen }) {
  return (
    <div className="absolute inset-0 bg-[#3E3831] z-50 flex flex-col items-center justify-center p-6 text-center">
      <div className="w-full max-w-[360px] bg-[#FAF6EE] border-8 border-[#E4DCCE] p-8 rounded-lg shadow-xl relative flex flex-col items-center">
        <span className="text-xs tracking-widest uppercase text-[#8C8275] mb-2 font-sans">You Have Mail From</span>
        <h1 className="text-2xl font-semibold tracking-wide text-[#594F43] mb-6">Areeb & Nahid</h1>
        
        <div 
          onClick={onOpen}
          className="w-24 h-24 bg-[#EAE3D2] rounded-full border-2 border-[#C5BAA5] flex items-center justify-center cursor-pointer shadow-inner hover:scale-105 transition-transform"
        >
          <div className="text-center">
            <span className="text-xl">💌</span>
            <p className="text-[10px] tracking-wider uppercase text-[#70665A] mt-1 font-sans">Open</p>
          </div>
        </div>
        <p className="text-xs text-[#8C8275] mt-6 font-sans">Click envelope to open your invitation</p>
      </div>
    </div>
  );
}