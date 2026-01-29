import React from 'react';

const steps = [
  { id: 1, title: 'Book Demo', desc: 'Fill the form' },
  { id: 2, title: 'Home Visit', desc: 'We come to you' },
  { id: 3, title: 'Live Usage', desc: 'Child tries Pi Tab' },
  { id: 4, title: 'Decide', desc: 'No pressure' },
];

export const DemoFlow: React.FC = () => {
  return (
    <div className="py-8 border-t border-slate-200">
      <h2 className="text-2xl font-bold text-slate-900 mb-8">How the Home Demo Works</h2>
      <div className="relative">
        {/* Connector Line (Desktop) */}
        <div className="hidden md:block absolute top-6 left-6 right-6 h-0.5 bg-slate-200 -z-10"></div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 shadow-lg border-4 border-white">
                {step.id}
              </div>
              <h4 className="font-bold text-slate-900 mb-1">{step.title}</h4>
              <p className="text-sm text-slate-500">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-10 text-center">
         <p className="text-lg font-medium text-slate-700 italic">"A safer way to turn curiosity into understanding."</p>
      </div>
    </div>
  );
};