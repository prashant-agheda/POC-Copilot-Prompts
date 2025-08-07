import React from 'react';

export default function CheckboxField({ label, name, checked, onChange, required }) {
  return (
    <label className="flex items-center gap-3 text-lg font-medium text-gray-700">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        required={required}
        className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-400 focus:outline-none"
      />
      {label}
    </label>
  );
}
