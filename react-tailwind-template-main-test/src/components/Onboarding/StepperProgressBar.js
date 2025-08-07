import React from 'react';

export default function StepperProgressBar({ step, steps }) {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-600 font-medium">Step {step + 1} of {steps.length}</span>
        <span className="text-gray-400 text-sm">{steps[step].label}</span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full">
        <div
          className="h-2 bg-blue-600 rounded-full transition-all duration-300"
          style={{ width: `${((step + 1) / steps.length) * 100}%` }}
        />
      </div>
    </div>
  );
}
