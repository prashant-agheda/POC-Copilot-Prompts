import React, { useState } from 'react';
import StepButton from './StepButton';
import LocationDetectButton from './LocationDetectButton';

export default function BusinessLocationForm({ formData, onNext, onBack }) {
  const [location, setLocation] = useState(formData.location || '');

  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  const handleDetect = () => {
    // Simulate geolocation
    setLocation('123 Business Street, Mumbai, Maharashtra 400001');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location) onNext({ location });
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit} aria-label="Business Location">
      <h2 className="text-3xl font-bold mb-4">Business Location</h2>
      <div className="mb-6">
        <label htmlFor="location" className="font-medium mb-1 text-gray-700 block">Business Location</label>
        <input
          id="location"
          name="location"
          type="text"
          value={location}
          onChange={handleChange}
          required
          className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
        />
      </div>
      <div className="flex flex-col items-center mb-6">
        <LocationDetectButton onClick={handleDetect} />
      </div>
      <div className="flex justify-between mt-8">
        <StepButton onClick={onBack} type="button">Back</StepButton>
        <StepButton type="submit" disabled={!location}>Continue</StepButton>
      </div>
    </form>
  );
}
