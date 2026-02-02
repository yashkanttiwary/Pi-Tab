import React from 'react';

// Icons
const FormIcon = () => (
  <svg className="w-8 h-8 text-[#f97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-8 h-8 text-[#f97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const HomeIcon = () => (
  <svg className="w-8 h-8 text-[#f97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const TabletIcon = () => (
  <svg className="w-8 h-8 text-[#f97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);

const ScaleIcon = () => (
   <svg className="w-8 h-8 text-[#f97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
   </svg>
);

const steps = [
  { id: 1, title: 'Book Demo', desc: 'Fill the form', icon: <FormIcon /> },
  { id: 2, title: 'Counsellor Confirmation', desc: 'We confirm details', icon: <PhoneIcon /> },
  { id: 3, title: 'Home Visit', desc: 'We come to you', icon: <HomeIcon /> },
  { id: 4, title: 'Live Usage', desc: 'Child tries Pi Tab', icon: <TabletIcon /> },
  { id: 5, title: 'Decide', desc: 'No pressure', icon: <ScaleIcon /> },
];

export const DemoFlow: React.FC = () => {
  return (
    <div className="py-12 bg-white overflow-hidden demo-flow-section">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-16 text-center">How the Home Demo Works</h2>
        
        <div className="flex flex-col md:flex-row items-start justify-between relative px-2 md:px-0">
            {steps.map((step, index) => (
                <React.Fragment key={step.id}>
                    {/* Step Item */}
                    <div className="flex flex-col items-center relative z-10 group w-full md:w-auto mb-8 md:mb-0">
                        
                        {/* Wrapper for Icon + Hexagon to keep them tight */}
                        <div className="relative flex flex-col items-center">
                            {/* Icon Circle - Absolute relative to the hexagon container or negative margin */}
                            <div className="w-16 h-16 bg-white rounded-full border border-green-200 shadow-md flex items-center justify-center relative z-20 mb-[-20px] transform transition-transform group-hover:scale-110">
                                {step.icon}
                            </div>
                            
                            {/* Hexagon Number */}
                            <div className="w-24 h-24 relative flex items-center justify-center filter drop-shadow-md">
                                <svg 
                                    className="absolute inset-0 w-full h-full" 
                                    viewBox="0 0 100 100" 
                                    fill="url(#hex-gradient)"
                                    style={{ overflow: 'visible' }}
                                >
                                    <defs>
                                        <linearGradient id="hex-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" stopColor="#fb923c" />
                                            <stop offset="100%" stopColor="#ea580c" />
                                        </linearGradient>
                                    </defs>
                                    <path 
                                        d="M50 3 L93 28 V72 L50 97 L7 72 V28 L50 3 Z" 
                                        stroke="white" 
                                        strokeWidth="3" 
                                        strokeLinejoin="round" 
                                    />
                                </svg>
                                <span className="text-4xl font-bold text-white relative z-10 drop-shadow-sm">{step.id}</span>
                            </div>
                        </div>
                        
                        {/* Text */}
                        <div className="text-center mt-4 max-w-[150px]">
                            <h3 className="text-lg font-bold text-slate-900 leading-tight mb-1">{step.title}</h3>
                            <p className="text-slate-500 text-sm">{step.desc}</p>
                        </div>
                    </div>
                    
                    {/* Desktop Arrow (between items) */}
                    {index < steps.length - 1 && (
                        <div className="hidden md:flex flex-1 items-center justify-center self-start mt-[50px] -mx-4 z-0 opacity-90 transform -translate-y-2">
                             <svg className="w-full h-12 max-w-[120px]" viewBox="0 0 100 30" preserveAspectRatio="none">
                                <defs>
                                  <linearGradient id="arrow-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#fdba74" />
                                    <stop offset="100%" stopColor="#f97316" />
                                  </linearGradient>
                                </defs>
                                <path 
                                    d="M2 12 L80 6 L80 0 L98 15 L80 30 L80 24 L2 18 Z" 
                                    fill="url(#arrow-gradient-2)" 
                                    stroke="white" 
                                    strokeWidth="1.5"
                                    filter="drop-shadow(0px 2px 1px rgba(0,0,0,0.1))"
                                />
                             </svg>
                        </div>
                    )}
                    
                    {/* Mobile Arrow (Down) */}
                    {index < steps.length - 1 && (
                        <div className="md:hidden self-center text-orange-300 mb-8 mt-[-10px]">
                            <svg className="w-8 h-8 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </div>
                    )}
                </React.Fragment>
            ))}
        </div>
      </div>
    </div>
  );
};