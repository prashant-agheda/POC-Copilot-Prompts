import React from 'react';
import LocationIcon from '../../assets/icons/LocationIcon';

export default function LocationDetectButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 hover:bg-blue-700"
      aria-label="Detect My Location"
    >
      <LocationIcon className="w-6 h-6" />
      Detect My Location
      <span className="ml-2 text-gray-300 text-xs" aria-label="info">&#9432;</span>
    </button>
  );
}
