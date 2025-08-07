import React, { useState } from 'react';
import StepperProgressBar from './StepperProgressBar';
import OnboardingTypeSelection from './OnboardingTypeSelection';
import BusinessInformationForm from './BusinessInformationForm';
import PANValidation from './PANValidation';
import BusinessLocationForm from './BusinessLocationForm';
import BankInformationForm from './BankInformationForm';
import ConsentAgreements from './ConsentAgreements';
import ReviewSubmit from './ReviewSubmit';
import SubmissionStatus from './SubmissionStatus';

const steps = [
  { label: 'Onboarding Type Selection', component: OnboardingTypeSelection },
  { label: 'Business Information', component: BusinessInformationForm },
  { label: 'PAN/TAN Validation', component: PANValidation },
  { label: 'Geolocation Capture', component: BusinessLocationForm },
  { label: 'Bank Information', component: BankInformationForm },
  { label: 'Consent & Agreements', component: ConsentAgreements },
  { label: 'Submission & Status', component: ReviewSubmit },
];

export default function OnboardingStepper() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const CurrentStepComponent = steps[step].component;

  const handleNext = (data) => {
    setFormData({ ...formData, ...data });
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      setSubmitted(true);
    }
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <div className="w-full max-w-2xl mx-auto py-8 px-4">
      <StepperProgressBar step={step} steps={steps} />
      {!submitted ? (
        <CurrentStepComponent
          formData={formData}
          onNext={handleNext}
          onBack={handleBack}
        />
      ) : (
        <SubmissionStatus formData={formData} />
      )}
    </div>
  );
}
