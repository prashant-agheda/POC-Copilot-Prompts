import React from 'react';

export default function StepButton({ children, onClick, type = 'button', disabled = false }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-full md:w-auto px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {children}
    </button>
  );
}
