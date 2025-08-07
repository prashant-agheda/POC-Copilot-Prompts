import React, { useState } from 'react';
import StepButton from './StepButton';
import InputField from './InputField';
import SelectField from './SelectField';

const businessTypes = [
  'Public Limited',
  'Private Limited',
  'Partnership',
  'Sole Proprietorship',
  'LLP',
];
const states = [
  'Maharashtra',
  'Karnataka',
  'Delhi',
  'Tamil Nadu',
  'Gujarat',
];

export default function BusinessInformationForm({ formData, onNext, onBack }) {
  const [fields, setFields] = useState({
    businessName: formData.businessName || '',
    businessType: formData.businessType || businessTypes[0],
    address: formData.address || '',
    city: formData.city || '',
    state: formData.state || states[0],
    panNumber: formData.panNumber || '',
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
    <form className="space-y-6" onSubmit={handleSubmit} aria-label="Business Information">
      <h2 className="text-3xl font-bold mb-4">Business Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField label="Business Name" name="businessName" value={fields.businessName} onChange={handleChange} required error={errors.businessName} />
        <SelectField label="Business Type" name="businessType" value={fields.businessType} onChange={handleChange} options={businessTypes} required error={errors.businessType} />
        <InputField label="Address" name="address" value={fields.address} onChange={handleChange} required error={errors.address} />
        <InputField label="City" name="city" value={fields.city} onChange={handleChange} required error={errors.city} />
        <SelectField label="State" name="state" value={fields.state} onChange={handleChange} options={states} required error={errors.state} />
        <InputField label="PAN Number" name="panNumber" value={fields.panNumber} onChange={handleChange} required error={errors.panNumber} />
      </div>
      <div className="flex justify-between mt-8">
        <StepButton onClick={onBack} type="button">Back</StepButton>
        <StepButton type="submit">Continue</StepButton>
      </div>
    </form>
  );
}
