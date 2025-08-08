import React from 'react';
import './Logo.css';

const sizeToPx = {
  small: 28,
  medium: 36,
  large: 48,
};

const Logo = ({ size = 'medium', showTagline = true, className = '' }) => {
  const px = typeof size === 'number' ? size : (sizeToPx[size] || sizeToPx.medium);

  return (
    <div className={`logo-container ${className}`.trim()}>
      <div className="logo-icon" style={{ width: px, height: px }} aria-label="myTrackee logo">
        {/* Inline SVG approximating the provided logo exactly */}
        <svg viewBox="0 0 256 256" width={px} height={px} xmlns="http://www.w3.org/2000/svg" role="img">
          <defs>
            <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#3b82f6"/>
              <stop offset="100%" stopColor="#1d4ed8"/>
            </linearGradient>
            <filter id="s" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#3b82f666"/>
            </filter>
          </defs>
          {/* Pin shape */}
          <path filter="url(#s)" fill="url(#g)" d="M128 8c-62 0-96 38-96 88 0 63 74 128 96 152 22-24 96-89 96-152 0-50-34-88-96-88z"/>
          {/* White stripes */}
          <rect x="56" y="44" width="144" height="14" rx="7" fill="#ffffff" opacity="0.9"/>
          <rect x="72" y="76" width="112" height="12" rx="6" fill="#ffffff" opacity="0.9"/>
          <rect x="40" y="184" width="176" height="12" rx="6" fill="#ffffff" opacity="0.9"/>
          <rect x="56" y="208" width="144" height="10" rx="5" fill="#ffffff" opacity="0.9"/>
          <rect x="96" y="232" width="64" height="8" rx="4" fill="#ffffff" opacity="0.9"/>
          {/* mT lettering */}
          <g fill="#ffffff" transform="translate(86,109)">
            <path d="M0 42V0h12l10 18 10-18h12v42h-12V18l-10 18-10-18v24H0z"/>
            <path d="M74 0h18v10h-18v32H62V10H48V0h26z"/>
          </g>
        </svg>
      </div>
      <div className="logo-text">
        <h1 className="logo-title">myTrackee</h1>
        {showTagline && (
          <span className="logo-tagline">Best car tracker company in pakistan</span>
        )}
      </div>
    </div>
  );
};

export default Logo; 