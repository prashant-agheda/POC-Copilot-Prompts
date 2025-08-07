import React, { useState } from 'react';
import StepButton from './StepButton';
import InputField from './InputField';

export default function BankInformationForm({ formData, onNext, onBack }) {
  const [fields, setFields] = useState({
    bankName: formData.bankName || '',
    ifscCode: formData.ifscCode || '',
    accountNumber: formData.accountNumber || '',
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    Object.entries(fields).forEach(([key, value]) => {
      if (!value) newErrors[key] = 'Required';
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) onNext(fields);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit} aria-label="Bank Information">
      <h2 className="text-3xl font-bold mb-4">Bank Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField label="Bank Name" name="bankName" value={fields.bankName} onChange={handleChange} required error={errors.bankName} />
        <InputField label="IFSC Code" name="ifscCode" value={fields.ifscCode} onChange={handleChange} required error={errors.ifscCode} />
        <InputField label="Account Number" name="accountNumber" value={fields.accountNumber} onChange={handleChange} required error={errors.accountNumber} type="password" />
      </div>
      <div className="flex justify-between mt-8">
        <StepButton onClick={onBack} type="button">Back</StepButton>
        <StepButton type="submit">Continue</StepButton>
      </div>
    </form>
  );
}
