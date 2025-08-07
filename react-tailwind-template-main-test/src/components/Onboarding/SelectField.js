import React from 'react';

export default function SelectField({ label, name, value, onChange, options, required, error }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="font-medium mb-1 text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 ${error ? 'border-red-500' : 'border-gray-300'}`}
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
      {error && <span id={`${name}-error`} className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
}
