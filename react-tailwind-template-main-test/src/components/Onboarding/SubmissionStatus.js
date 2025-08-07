import React from 'react';
import SuccessIcon from '../../assets/icons/SuccessIcon';

export default function SubmissionStatus({ formData }) {
  // Simulate queue number and submission time
  const queueNumber = '#MB-20250806-0012';
  const status = 'Pending Verification';
  const submitted = '8/6/2025, 12:39:18 AM';

  return (
    <div className="flex flex-col items-center py-12">
      <SuccessIcon className="w-16 h-16 text-green-500 mb-6" />
      <h2 className="text-3xl font-bold mb-4">Application Submitted!</h2>
      <p className="mb-8 text-gray-600 text-center">Your onboarding application has been received successfully.</p>
      <div className="bg-gray-50 rounded-xl p-6 shadow w-full max-w-md mb-8">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">Application Details</h3>
        <div className="flex flex-col gap-2 text-gray-700">
          <div><span className="font-medium">Queue Number:</span> {queueNumber}</div>
          <div><span className="font-medium">Status:</span> <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-sm">{status}</span></div>
          <div><span className="font-medium">Submitted:</span> {submitted}</div>
        </div>
      </div>
      <p className="text-gray-400 text-sm text-center">You will receive updates via email and SMS. Expected processing time: 2-3 business days.</p>
    </div>
  );
}
