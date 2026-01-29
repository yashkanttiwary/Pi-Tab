import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="space-y-6 md:space-y-8">
      {/* Headlines */}
      <div className="space-y-4">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
          A Study-First Tab for <span className="text-blue-600">Curious Young Learners</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
          Learning without distractions. Built for CuriousJr. Give your child a head start without the screen time guilt.
        </p>
      </div>

      {/* Value Strip */}
      <div className="flex flex-wrap gap-y-2 gap-x-6 text-sm md:text-base font-medium text-slate-700 bg-blue-50 py-3 px-4 rounded-lg inline-flex">
        <div className="flex items-center">
          <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          Zero notifications
        </div>
        <div className="flex items-center">
          <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          Safe parental control
        </div>
        <div className="flex items-center">
          <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          Clear concept learning
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[16/9] md:aspect-[16/10]">
         {/* Placeholder for Product Image */}
        <img 
            src="https://picsum.photos/800/500" 
            alt="Pi Tab displaying educational content without distractions" 
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
            <p className="text-white font-semibold">Pi Tab + CuriousJr Interface</p>
        </div>
      </div>
    </div>
  );
};