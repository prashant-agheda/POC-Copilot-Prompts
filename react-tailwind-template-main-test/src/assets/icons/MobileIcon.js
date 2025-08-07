import React from 'react';
export default function MobileIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="6" y="2" width="12" height="20" rx="3" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="18" r="1" fill="currentColor" />
    </svg>
  );
}
