import React, { useState } from 'react';
import StepButton from './StepButton';

function validatePAN(pan) {
  // Simple PAN format validation (India): 5 letters, 4 digits, 1 letter
  return /^[A-Z]{5}[0-9]{4}[A-Z]$/.test(pan);
}

export default function PANValidation({ formData, onNext, onBack }) {
  const [pan, setPan] = useState(formData.panNumber || '');
  const [valid, setValid] = useState(false);
  const [touched, setTouched] = useState(false);

  const handleChange = (e) => {
    setPan(e.target.value.toUpperCase());
    setTouched(true);
    setValid(validatePAN(e.target.value.toUpperCase()));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (valid) onNext({ panNumber: pan });
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit} aria-label="PAN Number Verification">
      <h2 className="text-3xl font-bold mb-4">Real-Time Validation</h2>
      <div className="mb-6">
        <label htmlFor="panNumber" className="font-medium mb-1 text-gray-700 block">PAN Number Verification</label>
        <div className="relative">
          <input
            id="panNumber"
            name="panNumber"
            type="text"
            value={pan}
            onChange={handleChange}
            required
            aria-invalid={!valid && touched}
            aria-describedby={!valid && touched ? 'pan-error' : 'pan-success'}
            className={`border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 transition-all duration-200 ${valid ? 'border-green-500 focus:ring-green-400' : 'border-gray-300 focus:ring-blue-400'}`}
            maxLength={10}
            autoComplete="off"
          />
          {valid && (
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-green-600" aria-label="Valid">
              &#10003;
            </span>
          )}
        </div>
        {valid ? (
          <span id="pan-success" className="text-green-600 text-sm mt-2 block">Valid PAN number</span>
        ) : touched ? (
          <span id="pan-error" className="text-red-500 text-sm mt-2 block">Invalid PAN number</span>
        ) : null}
        <span className="text-gray-400 text-xs mt-1 block">Field should stay focused until error is resolved</span>
      </div>
      <div className="flex justify-between mt-8">
        <StepButton onClick={onBack} type="button">Back</StepButton>
        <StepButton type="submit" disabled={!valid}>Continue</StepButton>
      </div>
    </form>
  );
}
