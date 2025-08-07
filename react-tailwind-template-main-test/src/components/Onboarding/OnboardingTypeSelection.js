import React, { useState } from 'react';
import StepButton from './StepButton';
import MobileIcon from '../../assets/icons/MobileIcon';
import AgentIcon from '../../assets/icons/AgentIcon';

const options = [
  {
    label: 'Self Boarding',
    description: 'Quick and simple onboarding using mobile or web',
    icon: <MobileIcon className="w-10 h-10 mx-auto mb-2 text-blue-600" />,
    value: 'self',
  },
  {
    label: 'Assisted Boarding',
    description: 'Let our agent help you onboard',
    icon: <AgentIcon className="w-10 h-10 mx-auto mb-2 text-gray-400" />,
    value: 'assisted',
  },
];

export default function OnboardingTypeSelection({ onNext }) {
  const [selected, setSelected] = useState('self');

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-8 text-center">Choose Your Onboarding Method</h2>
      <div className="flex flex-col md:flex-row gap-6 mb-8 w-full justify-center">
        {options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            aria-pressed={selected === opt.value}
            onClick={() => setSelected(opt.value)}
            className={`flex-1 p-8 rounded-xl border-2 focus:outline-none transition-all duration-200 ${selected === opt.value ? 'border-blue-600 bg-blue-50' : 'border-transparent bg-gray-100'} hover:border-blue-400`}
          >
            {opt.icon}
            <div className={`font-semibold text-xl mb-2 ${selected === opt.value ? 'text-blue-700' : 'text-gray-700'}`}>{opt.label}</div>
            <div className="text-gray-500 text-base">{opt.description}</div>
          </button>
        ))}
      </div>
      <StepButton onClick={() => onNext({ onboardingType: selected })}>
        Continue
      </StepButton>
    </div>
  );
}
