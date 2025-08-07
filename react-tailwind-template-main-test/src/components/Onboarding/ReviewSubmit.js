import React from 'react';
import StepButton from './StepButton';

export default function ReviewSubmit({ formData, onNext, onBack }) {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-4">Ready to Submit</h2>
      <p className="mb-8 text-gray-600 text-center">Please review your information and submit your onboarding application.</p>
      <StepButton onClick={() => onNext({ submitted: true })}>
        Submit Application
      </StepButton>
      <button
        type="button"
        onClick={onBack}
        className="mt-6 px-8 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-200 hover:bg-gray-300"
      >
        Back
      </button>
    </div>
  );
}
