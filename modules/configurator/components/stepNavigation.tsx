import React from 'react';

interface StepNavigationProps {
  currentStep: number; // 1: Exterior, 2: Interior, 3: Summary
}

const StepNavigation: React.FC<StepNavigationProps> = ({ currentStep }) => {
  const steps = [
    { stepNumber: '01', label: 'Exterior' },
    { stepNumber: '02', label: 'Interior' },
    { stepNumber: '03', label: 'Summary' },
  ];

  return (
    <div className="flex items-center gap-10">
      {steps.map((step, index) => (
        <div className="flex gap-1" key={step.stepNumber}>
          <p className={`text-base ${currentStep === index + 1 ? 'text-gray-100 font-bold' : 'text-gray-300'}`}>
            {step.stepNumber}
          </p>
          <p className={`text-base ${currentStep === index + 1 ? 'text-gray-100 font-bold' : 'text-gray-300'}`}>
            {step.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StepNavigation;
