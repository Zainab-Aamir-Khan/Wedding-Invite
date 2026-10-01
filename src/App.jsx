import React, { useState, useRef } from 'react';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [rsvpStatus, setRsvpStatus] = useState(null);
  const [guestName, setGuestName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const audioRef = useRef(null);

  const handleOpenInvitation = () => {
    setIsOpen(true);
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => console.log("Audio autoplay restricted:", err));
    }
  };

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleRsvpSubmit = (e) => {
    e.preventDefault();
    if (guestName.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#38322B', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: '0', fontFamily: 'serif' }}>
      
      {/* Background Audio */}
      <audio ref={audioRef} loop src="https://assets.mixkit.co/music/preview/mixkit-romantic-ambient-217.mp3" />

      {/* Main Container */}
      <div style={{ width: '100%', maxWidth: '480px', backgroundColor: '#FDFBF7', color: '#594F43', minHeight: '100vh', position: 'relative', overflowX: 'hidden', boxShadow: '0 0 40px rgba(0,0,0,0.8)', borderLeft: '1px solid #E3D9C6', borderRight: '1px solid #E3D9C6' }}>
        
        {/* ENVELOPE OPENING SCREEN */}
        {!isOpen && (
          <div style={{ position: 'fixed', inset: 0, maxWidth: '480px', margin: '0 auto', backgroundColor: '#FDFBF7', zIndex: 100, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '30px', textAlign: 'center', backgroundImage: 'radial-gradient(circle, #FAF6EE 0%, #F3ECE1 100%)' }}>
            
            {/* Floral Border Accents simulation */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '110px', borderBottom: '1px solid #D1C7B7', clipPath: 'polygon(0 0, 100% 0, 50% 100%)', backgroundColor: '#F2ECE1', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: '15px' }}>
              <span style={{ fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: '#7A8A75', fontFamily: 'sans-serif' }}>
                Walima Invitation
              </span>
            </div>

            {/* Gold Wax Seal */}
            <div 
              onClick={handleOpenInvitation}
              style={{ width: '75px', height: '75px', backgroundColor: '#C5A880', borderRadius: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 8px 25px rgba(197,168,128,0.5)', zIndex: 2, border: '3px solid #E3D3B8', margin: '20px 0' }}
            >
              <span style={{ fontSize: '26px' }}>⚜️</span>
            </div>

            <div onClick={handleOpenInvitation} style={{ cursor: 'pointer', zIndex: 2 }}>
              <h1 style={{ fontSize: '28px', fontStyle: 'italic', color: '#594F43', marginBottom: '8px', fontWeight: '400' }}>
                Areeb & Nahid
              </h1>
              <span style={{ fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#7A8A75', fontFamily: 'sans-serif', fontWeight: '600' }}>
                Tap the seal to open
              </span>
            </div>

          </div>
        )}

        {/* FLOATING MUSIC TOGGLE BUTTON */}
        {isOpen && (
          <div 
            onClick={toggleMusic}
            style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 90, backgroundColor: '#7A8A75', color: '#FDFBF7', width: '42px', height: '42px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 15px rgba(0,0,0,0.2)', fontSize: '15px' }}
            title="Toggle Music"
          >
            {isPlaying ? '🎵' : '🔇'}
          </div>
        )}

        {/* SCROLLABLE INVITATION CONTENT */}
        <div style={{ opacity: isOpen ? 1 : 0, transition: 'opacity 1.2s ease-in-out', width: '100%' }}>
          
          {/* SECTION 1: HERO / COUPLE NAMES & VILLA THEME */}
          <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 20px', textAlign: 'center', borderBottom: '1px solid #E3D9C6', position: 'relative' }}>
            <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '3px', color: '#7A8A75', marginBottom: '15px', fontFamily: 'sans-serif' }}>
              Together With Their Families
            </span>
            
            <h2 style={{ fontSize: '42px', fontStyle: 'italic', fontWeight: '300', color: '#594F43', margin: '10px 0' }}>
              Areeb
            </h2>
            <span style={{ fontSize: '22px', fontStyle: 'italic', color: '#C5A880', margin: '5px 0' }}>&</span>
            <h2 style={{ fontSize: '42px', fontStyle: 'italic', fontWeight: '300', color: '#594F43', margin: '10px 0' }}>
              Nahid
            </h2>

            {/* Villa Illustration Placeholder card */}
            <div style={{ width: '220px', height: '140px', backgroundColor: '#F3ECE1', borderRadius: '12px', border: '1px solid #D1C7B7', margin: '25px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 20px rgba(0,0,0,0.05)' }}>
              <span style={{ fontSize: '32px' }}>🏰🌿</span>
            </div>

            <p style={{ fontSize: '12px', letterSpacing: '2px', color: '#8C8275', fontFamily: 'sans-serif', textTransform: 'uppercase', margin: '10px 0 0 0' }}>
              Saturday, The Fourteenth Of November<br />Twenty Twenty Six
            </p>

            <div style={{ marginTop: '30px', animation: 'bounce 2s infinite' }}>
              <span style={{ fontSize: '14px', color: '#7A8A75' }}>↓ Scroll</span>
            </div>
          </section>

          {/* SECTION 2: COUNTDOWN & QUOTE */}
          <section style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '50px 20px', textAlign: 'center', borderBottom: '1px solid #E3D9C6' }}>
            <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '3px', color: '#7A8A75', fontFamily: 'sans-serif' }}>
              Walima Reception
            </span>
            <h3 style={{ fontSize: '26px', fontStyle: 'italic', fontWeight: '400', color: '#594F43', margin: '15px 0' }}>
              "And of His signs is that He created for you mates..."
            </h3>
            <p style={{ fontSize: '13px', color: '#8C8275', maxWidth: '320px', lineHeight: '1.6', fontFamily: 'sans-serif', margin: '15px 0 30px 0' }}>
              A joyous celebration of love, food, and timeless memories as we begin our journey together.
            </p>

            {/* Countdown Box */}
            <div style={{ backgroundColor: '#FAF6EE', border: '1px solid #D1C7B7', borderRadius: '16px', padding: '20px 30px', display: 'flex', gap: '20px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
              <div>
                <span style={{ fontSize: '20px', fontWeight: '600', color: '#594F43', display: 'block' }}>14</span>
                <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '2px', color: '#7A8A75', fontFamily: 'sans-serif' }}>Nov</span>
              </div>
              <div style={{ borderLeft: '1px solid #E3D9C6', paddingLeft: '20px' }}>
                <span style={{ fontSize: '20px', fontWeight: '600', color: '#594F43', display: 'block' }}>2026</span>
                <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '2px', color: '#7A8A75', fontFamily: 'sans-serif' }}>Year</span>
              </div>
            </div>
          </section>

          {/* SECTION 3: PROGRAM / TIMELINE */}
          <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '60px 20px', textAlign: 'center', borderBottom: '1px solid #E3D9C6' }}>
            <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '3px', color: '#7A8A75', fontFamily: 'sans-serif' }}>
              Program
            </span>
            <h3 style={{ fontSize: '28px', fontStyle: 'italic', fontWeight: '400', color: '#594F43', margin: '10px 0 30px 0' }}>
              The Order of the Day
            </h3>

            {/* Timeline cards */}
            <div style={{ width: '100%', maxWidth: '360px', display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'left' }}>
              
              <div style={{ backgroundColor: '#FAF6EE', border: '1px solid #D1C7B7', borderRadius: '12px', padding: '16px 20px', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
                <span style={{ fontSize: '14px', color: '#C5A880', fontWeight: '600', fontFamily: 'sans-serif' }}>7:30 PM</span>
                <h4 style={{ fontSize: '16px', color: '#594F43', margin: '4px 0 2px 0', fontStyle: 'italic' }}>Guests Arrival & Reception</h4>
                <p style={{ fontSize: '12px', color: '#8C8275', margin: 0, fontFamily: 'sans-serif' }}>Grand entrance at Le Seasons Park</p>
              </div>

              <div style={{ backgroundColor: '#FAF6EE', border: '1px solid #D1C7B7', borderRadius: '12px', padding: '16px 20px', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
                <span style={{ fontSize: '14px', color: '#C5A880', fontWeight: '600', fontFamily: 'sans-serif' }}>8:30 PM</span>
                <h4 style={{ fontSize: '16px', color: '#594F43', margin: '4px 0 2px 0', fontStyle: 'italic' }}>Walima Dinner</h4>
                <p style={{ fontSize: '12px', color: '#8C8275', margin: 0, fontFamily: 'sans-serif' }}>Serving royal feast & cuisines</p>
              </div>

              <div style={{ backgroundColor: '#FAF6EE', border: '1px solid #D1C7B7', borderRadius: '12px', padding: '16px 20px', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
                <span style={{ fontSize: '14px', color: '#C5A880', fontWeight: '600', fontFamily: 'sans-serif' }}>10:30 PM</span>
                <h4 style={{ fontSize: '16px', color: '#594F43', margin: '4px 0 2px 0', fontStyle: 'italic' }}>Couple Greeting & Concluding</h4>
                <p style={{ fontSize: '12px', color: '#8C8275', margin: 0, fontFamily: 'sans-serif' }}>Photo sessions with Areeb & Nahid</p>
              </div>

            </div>
          </section>

          {/* SECTION 4: VENUE DETAILS */}
          <section style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '60px 20px', textAlign: 'center', borderBottom: '1px solid #E3D9C6' }}>
            <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '3px', color: '#7A8A75', fontFamily: 'sans-serif' }}>
              Venue
            </span>
            <h3 style={{ fontSize: '28px', fontStyle: 'italic', fontWeight: '400', color: '#594F43', margin: '10px 0' }}>
              Le Seasons Park
            </h3>
            <p style={{ fontSize: '13px', color: '#8C8275', maxWidth: '300px', lineHeight: '1.6', fontFamily: 'sans-serif', margin: '10px 0 20px 0' }}>
              R-2, Builders Area, P-3 Circle, Greater Noida 201310
            </p>

            <a 
              href="https://maps.google.com/?q=Le+Seasons+Park+Greater+Noida" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ backgroundColor: '#FAF6EE', color: '#594F43', border: '1px solid #D1C7B7', padding: '12px 28px', borderRadius: '25px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px', textDecoration: 'none', fontFamily: 'sans-serif', fontWeight: '600', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}
            >
              View on Maps
            </a>

            <p style={{ fontSize: '11px', color: '#7A8A75', marginTop: '30px', fontStyle: 'italic', fontFamily: 'sans-serif' }}>
              Complimentary valet parking available at the main entrance.
            </p>
          </section>

          {/* SECTION 5: RSVP */}
          <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '60px 20px', textAlign: 'center' }}>
            <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '3px', color: '#7A8A75', fontFamily: 'sans-serif' }}>
              RSVP
            </span>
            <h3 style={{ fontSize: '28px', fontStyle: 'italic', fontWeight: '400', color: '#594F43', margin: '10px 0 20px 0' }}>
              Will You Attend?
            </h3>

            {!submitted ? (
              <form onSubmit={handleRsvpSubmit} style={{ width: '100%', maxWidth: '340px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                  {['Attending', 'Decline', 'Maybe'].map((status) => (
                    <button
                      type="button"
                      key={status}
                      onClick={() => setRsvpStatus(status)}
                      style={{
                        flex: 1,
                        padding: '10px 0',
                        backgroundColor: rsvpStatus === status ? '#7A8A75' : '#FAF6EE',
                        color: rsvpStatus === status ? '#FAF6EE' : '#594F43',
                        border: '1px solid #D1C7B7',
                        borderRadius: '20px',
                        fontSize: '11px',
                        cursor: 'pointer',
                        fontFamily: 'sans-serif',
                        letterSpacing: '1px'
                      }}
                    >
                      {status}
                    </button>
                  ))}
                </div>

                <input 
                  type="text" 
                  placeholder="Your Full Name" 
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  required
                  style={{ width: '100%', padding: '12px 16px', backgroundColor: '#FAF6EE', border: '1px solid #D1C7B7', borderRadius: '8px', fontSize: '13px', outline: 'none', color: '#594F43', boxSizing: 'border-box' }}
                />

                <button 
                  type="submit"
                  style={{ width: '100%', padding: '12px', backgroundColor: '#594F43', color: '#FAF6EE', border: 'none', borderRadius: '8px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', cursor: 'pointer', fontFamily: 'sans-serif', fontWeight: '600' }}
                >
                  Send RSVP
                </button>
              </form>
            ) : (
              <div style={{ backgroundColor: '#FAF6EE', border: '1px solid #D1C7B7', borderRadius: '12px', padding: '25px', maxWidth: '320px' }}>
                <h4 style={{ fontSize: '18px', color: '#594F43', margin: '0 0 8px 0', fontStyle: 'italic' }}>Thank You, {guestName}!</h4>
                <p style={{ fontSize: '12px', color: '#8C8275', margin: 0, fontFamily: 'sans-serif' }}>Your response has been recorded.</p>
              </div>
            )}

            <div style={{ marginTop: '50px', fontSize: '12px', color: '#8C8275', lineHeight: '1.8', fontFamily: 'sans-serif' }}>
              <p style={{ margin: '0 0 5px 0' }}>For inquiries, please contact:</p>
              <p style={{ margin: 0 }}><strong>Dr. Jwaad Akhtar:</strong> <a href="tel:9667966898" style={{ color: '#7A8A75', textDecoration: 'none' }}>9667966898</a></p>
              <p style={{ margin: 0 }}><strong>Asif:</strong> <a href="tel:9873085440" style={{ color: '#7A8A75', textDecoration: 'none' }}>98730 85440</a></p>
            </div>

            <div style={{ marginTop: '40px', paddingBottom: '30px', color: '#A09585', fontSize: '11px', fontFamily: 'sans-serif', letterSpacing: '2px', textTransform: 'uppercase' }}>
              <p style={{ margin: 0 }}>With Love • Areeb & Nahid</p>
            </div>

          </section>

        </div>

      </div>
    </div>
  );
}