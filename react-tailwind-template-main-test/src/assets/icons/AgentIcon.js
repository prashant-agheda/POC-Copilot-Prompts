import React from 'react';
export default function AgentIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="7" y="8" width="10" height="8" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M12 4v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="18" r="2" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
