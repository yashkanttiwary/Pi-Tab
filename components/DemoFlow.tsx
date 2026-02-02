import React from 'react';

const steps = [
  { id: 1, title: 'Book Demo', desc: 'Fill the form', x: 300, y: 0 },
  { id: 2, title: 'Counsellor Confirmation', desc: 'We confirm details', x: 540, y: 140 },
  { id: 3, title: 'Home Visit', desc: 'We come to you', x: 440, y: 340 },
  { id: 4, title: 'Live Usage', desc: 'Child tries Pi Tab', x: 160, y: 340 },
  { id: 5, title: 'Decide', desc: 'No pressure', x: 60, y: 140 },
];

export const DemoFlow: React.FC = () => {
  return (
    <div className="py-4 bg-white overflow-hidden demo-flow-section">
      <div className="max-w-4xl mx-auto px-4 relative">
        <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-8 text-center">How the Home Demo Works</h2>
        
        {/* Mobile View: Vertical List */}
        <div className="md:hidden space-y-6 relative pl-4">
           {/* Vertical Line */}
           <div className="absolute left-[2.5rem] top-4 bottom-4 w-0.5 bg-blue-100 -z-10"></div>
           
           {steps.map((step) => (
             <div key={step.id} className="flex items-start">
               <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md border-4 border-white z-10 flow-step-circle">
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
        <div className="hidden md:block relative w-[600px] h-[480px] mx-auto scale-90 origin-top">
             {/* SVG Connecting Lines (Arrows) */}
             <svg className="absolute inset-0 w-full h-full -z-10 pointer-events-none overflow-visible" viewBox="0 0 600 480">
               <defs>
                 <marker id="arrowhead" markerWidth="12" markerHeight="8" refX="10" refY="4" orient="auto">
                   <polygon points="0 0, 12 4, 0 8" fill="#94a3b8" />
                 </marker>
               </defs>

               {/* 1 -> 2 */}
               <path 
                 d="M335 40 Q400 60 510 130" 
                 fill="none" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" 
               />
               
               {/* 2 -> 3 */}
               <path 
                 d="M540 210 Q540 280 470 340" 
                 fill="none" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" 
               />

               {/* 3 -> 4 */}
               <path 
                 d="M390 372 L210 372" 
                 fill="none" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" 
               />

               {/* 4 -> 5 */}
               <path 
                 d="M130 340 Q60 280 60 210" 
                 fill="none" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" 
               />
             </svg>

             {/* Render Steps */}
             {steps.map((step) => (
                 <div 
                    key={step.id}
                    className="absolute w-48 flex flex-col items-center"
                    style={{ 
                        left: step.x, 
                        top: step.y,
                        transform: 'translate(-50%, 0)'
                    }}
                 >
                   <div className="flow-step-circle w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-lg border-4 border-white z-10 mb-2 transition-transform hover:scale-110">
                        {step.id}
                   </div>
                   <h4 className="font-bold text-slate-900 text-center text-base leading-tight">{step.title}</h4>
                   <p className="text-xs text-slate-500 text-center mt-1">{step.desc}</p>
                 </div>
             ))}
        </div>
        
        <div className="mt-4 text-center">
           <p className="text-base font-medium text-slate-700 italic">"A safer way to turn curiosity into understanding."</p>
        </div>
      </div>
    </div>
  );
};