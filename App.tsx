import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { LeadForm } from './components/LeadForm';
import { USPSection } from './components/USPSection';
import { DemoFlow } from './components/DemoFlow';
import { ThankYou } from './components/ThankYou';
import { AppView } from './types';

function App() {
  const [currentView, setCurrentView] = useState<AppView>(AppView.LANDING);

  const handleSuccess = () => {
    setCurrentView(AppView.THANK_YOU);
  };

  if (currentView === AppView.THANK_YOU) {
    return <ThankYou />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header / Nav */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center">
            {/* Pi Tab Logo Part */}
            <div className="flex items-center gap-1 mr-3">
              <span className="text-3xl font-extrabold text-slate-900 tracking-tighter leading-none pb-1 font-sans">pi</span>
              <span className="bg-[#0f172a] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-[4px] tracking-wider uppercase border border-slate-700 leading-none">
                TAB
              </span>
            </div>
            
            {/* Divider */}
            <div className="h-8 w-px bg-slate-300 mx-2"></div>
            
            {/* CuriousJr Logo Part */}
            <div className="flex items-center">
              <span className="text-2xl font-bold text-slate-900 tracking-tight leading-none">Curious</span>
              <span className="text-2xl font-bold text-[#f97316] tracking-tight leading-none">Jr</span>
            </div>

             {/* PW Part - Hidden on small mobile to save space, visible on larger screens */}
             <div className="hidden sm:flex items-center gap-2 ml-4 pl-4 border-l border-slate-200 h-8">
                 <span className="text-[10px] text-slate-500 font-medium">Powered by</span>
                 <div className="flex items-center gap-1">
                     <div className="w-6 h-6 bg-slate-900 rounded-full flex items-center justify-center text-white text-[8px] font-serif border border-slate-200 shadow-sm">
                        <span className="scale-90 font-bold">PW</span>
                     </div>
                     <span className="text-sm font-bold text-slate-900">PW</span>
                 </div>
             </div>
          </div>
          
          <button 
             onClick={() => document.getElementById('mobile-form')?.scrollIntoView({ behavior: 'smooth' })}
             className="md:hidden text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-2 rounded-full hover:bg-blue-100 transition-colors"
          >
            Book Demo
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column (Content) */}
          <div className="lg:col-span-7 space-y-12 lg:space-y-16">
            <Hero />
            
            {/* Mobile Form: Visible only on mobile, placed between Hero and USPs for high conversion */}
            <div id="mobile-form" className="block lg:hidden scroll-mt-24">
               <LeadForm onSuccess={handleSuccess} className="bg-slate-50 border-slate-200 shadow-lg" />
            </div>

            <USPSection />
            <DemoFlow />
            
            {/* Footer-ish area inside content */}
            <div className="pt-8 border-t border-slate-100 text-sm text-slate-500">
               <p>&copy; {new Date().getFullYear()} Pi Tab + CuriousJr. All rights reserved.</p>
               <p className="mt-2 hover:text-slate-800 cursor-pointer">Privacy Policy • Terms of Service</p>
            </div>
          </div>

          {/* Right Column (Sticky Form) - Desktop Only */}
          <div className="hidden lg:block lg:col-span-5 lg:sticky lg:top-24">
            <LeadForm onSuccess={handleSuccess} />
            
            {/* Additional desktop-only trust signals below form */}
            <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-100 shadow-sm">
              <div className="flex items-start space-x-3">
                 <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-lg">“</span>
                    </div>
                 </div>
                 <div>
                    <p className="text-sm text-slate-700 italic mb-2 leading-relaxed">
                       "My son used to spend 4 hours on games. Now he spends that time learning coding on Pi Tab. It's a lifesaver."
                    </p>
                    <p className="text-xs font-bold text-slate-900 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-green-500"></span>
                      Priya S., Bangalore
                    </p>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

export default App;