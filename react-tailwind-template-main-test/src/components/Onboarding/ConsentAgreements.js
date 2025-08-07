import React, { useState } from 'react';
import StepButton from './StepButton';
import CheckboxField from './CheckboxField';

export default function ConsentAgreements({ formData, onNext, onBack }) {
  const [checked, setChecked] = useState({
    terms: formData.terms || false,
    consent: formData.consent || false,
  });

  const handleChange = (e) => {
    const { name, checked: isChecked } = e.target;
    setChecked((prev) => ({ ...prev, [name]: isChecked }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checked.terms && checked.consent) onNext(checked);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit} aria-label="Consent & Agreements">
      <h2 className="text-3xl font-bold mb-4">Consent & Agreements</h2>
      <div className="flex flex-col gap-4 mb-8">
        <CheckboxField
          label={<span>I agree to the <a href="#" className="text-blue-600 underline">Terms and Conditions</a></span>}
          name="terms"
          checked={checked.terms}
          onChange={handleChange}
          required
        />
        <CheckboxField
          label="I consent to data processing for onboarding purposes"
          name="consent"
          checked={checked.consent}
          onChange={handleChange}
          required
        />
      </div>
      <div className="flex justify-between mt-8">
        <StepButton onClick={onBack} type="button">Back</StepButton>
        <StepButton type="submit" disabled={!(checked.terms && checked.consent)}>Continue</StepButton>
      </div>
    </form>
  );
}
