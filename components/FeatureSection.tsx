import React from 'react';

export const FeatureSection: React.FC = () => {
  return (
    <section className="py-16 bg-white border-t border-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why Parents Choose PiTab Curious Junior
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Includes the Curious Jr learning program, ready from Day One, no extra setup, no additional apps.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Interactive Live Classes (Wide, Beige/Orange) */}
          <div className="md:col-span-2 bg-[#FFF7ED] rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 border border-orange-100 transition-transform hover:-translate-y-1 duration-300">
            <div className="flex-1 text-left order-2 md:order-1">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Interactive Live Classes</h3>
              <p className="text-slate-600 leading-relaxed">
                Small-group live classes with engaging visuals and animations that help children stay attentive and actively participate.
              </p>
            </div>
            <div className="w-full md:w-2/5 flex justify-center order-1 md:order-2">
               {/* Illustration Placeholder */}
               <div className="w-full aspect-[4/3] bg-orange-200/40 rounded-2xl flex items-center justify-center text-orange-400">
                  <span className="text-7xl">🎓</span>
               </div>
            </div>
          </div>

          {/* Card 2: Real-Time Homework Assistance (Standard, Yellow) */}
          <div className="md:col-span-1 bg-[#FEFCE8] rounded-3xl p-8 flex flex-col items-center text-center border border-yellow-100 transition-transform hover:-translate-y-1 duration-300">
            <div className="w-full aspect-[4/3] mb-6 bg-yellow-200/40 rounded-2xl flex items-center justify-center text-yellow-500">
               <span className="text-7xl">💡</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Real-Time Homework Assistance</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Guided homework support that helps children solve doubts step by step — while parents enjoy stress-free evenings.
            </p>
          </div>

          {/* Card 3: Concept-Based Learning & Revision (Standard, Green) */}
          <div className="md:col-span-1 bg-[#F0FDF4] rounded-3xl p-8 flex flex-col items-center text-center border border-green-100 transition-transform hover:-translate-y-1 duration-300">
             <div className="w-full aspect-[4/3] mb-6 bg-green-200/40 rounded-2xl flex items-center justify-center text-green-500">
               <span className="text-7xl">🧠</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Concept-Based Learning & Revision</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Recorded lessons, visual explanations, and practice support designed to build strong understanding — not rote learning.
            </p>
          </div>

          {/* Card 4: Distraction-Free Learning Environment (Standard, Blue) */}
          <div className="md:col-span-1 bg-[#EFF6FF] rounded-3xl p-8 flex flex-col items-center text-center border border-blue-100 transition-transform hover:-translate-y-1 duration-300">
             <div className="w-full aspect-[4/3] mb-6 bg-blue-200/40 rounded-2xl flex items-center justify-center text-blue-500">
               <span className="text-7xl">🎯</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Distraction-Free Learning Environment</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              A study-only device with zero notifications and no entertainment apps, so learning stays focused every day.
            </p>
          </div>

          {/* Card 5: Parent Control & Learning Visibility (Standard, Yellow) */}
          <div className="md:col-span-1 bg-[#FEFCE8] rounded-3xl p-8 flex flex-col items-center text-center border border-yellow-100 transition-transform hover:-translate-y-1 duration-300">
             <div className="w-full aspect-[4/3] mb-6 bg-yellow-200/40 rounded-2xl flex items-center justify-center text-yellow-500">
               <span className="text-7xl">🛡️</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Parent Control & Learning Visibility</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Set screen limits, control app access, and track learning progress — all with simple parent controls.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};