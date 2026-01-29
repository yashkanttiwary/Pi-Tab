import React from 'react';

const steps = [
  { id: 1, title: 'Book Demo', desc: 'Fill the form' },
  { id: 2, title: 'Counsellor Confirmation', desc: 'We confirm details' },
  { id: 3, title: 'Home Visit', desc: 'We come to you' },
  { id: 4, title: 'Live Usage', desc: 'Child tries Pi Tab' },
  { id: 5, title: 'Decide', desc: 'No pressure' },
];

export const DemoFlow: React.FC = () => {
  return (
    <div className="py-12 border-t border-slate-200 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 relative">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-12 text-center">How the Home Demo Works</h2>
        
        {/* Mobile View: Vertical List */}
        <div className="md:hidden space-y-8 relative pl-4">
           {/* Vertical Line */}
           <div className="absolute left-[2.5rem] top-4 bottom-4 w-0.5 bg-blue-100 -z-10"></div>
           
           {steps.map((step) => (
             <div key={step.id} className="flex items-start">
               <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md border-4 border-white z-10">
                 {step.id}
               </div>
               <div className="ml-4 pt-1">
                 <h4 className="font-bold text-slate-900 text-lg">{step.title}</h4>
                 <p className="text-slate-500">{step.desc}</p>
               </div>
             </div>
           ))}
        </div>

        {/* Desktop View: Pentagon Layout */}
        <div className="hidden md:block relative w-[600px] h-[500px] mx-auto">
             {/* SVG Connecting Line */}
             <svg className="absolute inset-0 w-full h-full -z-10 pointer-events-none overflow-visible" viewBox="0 0 600 500">
               <defs>
                 <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                   <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8" />
                 </marker>
               </defs>

               {/* 1 to 2 */}
               <path d="M330 60 Q450 60 520 160" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="6 6" markerEnd="url(#arrowhead)" />
               {/* 2 to 3 */}
               <path d="M550 240 Q550 350 480 430" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="6 6" markerEnd="url(#arrowhead)" />
               {/* 3 to 4 */}
               <path d="M420 450 L180 450" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="6 6" markerEnd="url(#arrowhead)" />
               {/* 4 to 5 */}
               <path d="M120 430 Q50 350 50 240" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="6 6" markerEnd="url(#arrowhead)" />
               {/* 5 to 1 (Loop closed?) - keeping open as per linear flow, but user said pentagon. Usually flows don't loop back to start unless it's a cycle. Leaving open for A->B->C->D->E */}
             </svg>

             {/* Items positioned absolutely to form a pentagon */}
             
             {/* 1. Top Center */}
             <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center w-48">
               <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-lg border-4 border-white z-10 mb-3">1</div>
               <h4 className="font-bold text-slate-900 text-center text-lg">{steps[0].title}</h4>
               <p className="text-sm text-slate-500 text-center">{steps[0].desc}</p>
             </div>

             {/* 2. Right Top */}
             <div className="absolute top-[170px] -right-10 flex flex-col items-center w-48">
               <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-lg border-4 border-white z-10 mb-3">2</div>
               <h4 className="font-bold text-slate-900 text-center text-lg">{steps[1].title}</h4>
               <p className="text-sm text-slate-500 text-center">{steps[1].desc}</p>
             </div>

             {/* 3. Right Bottom */}
             <div className="absolute bottom-0 right-[40px] flex flex-col items-center w-48">
               <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-lg border-4 border-white z-10 mb-3">3</div>
               <h4 className="font-bold text-slate-900 text-center text-lg">{steps[2].title}</h4>
               <p className="text-sm text-slate-500 text-center">{steps[2].desc}</p>
             </div>

             {/* 4. Left Bottom */}
             <div className="absolute bottom-0 left-[40px] flex flex-col items-center w-48">
               <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-lg border-4 border-white z-10 mb-3">4</div>
               <h4 className="font-bold text-slate-900 text-center text-lg">{steps[3].title}</h4>
               <p className="text-sm text-slate-500 text-center">{steps[3].desc}</p>
             </div>

             {/* 5. Left Top */}
             <div className="absolute top-[170px] -left-10 flex flex-col items-center w-48">
               <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-lg border-4 border-white z-10 mb-3">5</div>
               <h4 className="font-bold text-slate-900 text-center text-lg">{steps[4].title}</h4>
               <p className="text-sm text-slate-500 text-center">{steps[4].desc}</p>
             </div>
        </div>
        
        <div className="mt-16 text-center">
           <p className="text-lg font-medium text-slate-700 italic">"A safer way to turn curiosity into understanding."</p>
        </div>
      </div>
    </div>
  );
};