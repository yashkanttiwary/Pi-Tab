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
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      {/* Liquid Background Blobs for Glass Effect */}
      <div className="absolute top-[-100px] left-[-100px] w-[600px] h-[600px] bg-orange-300/30 rounded-full blur-[120px] pointer-events-none z-0 mix-blend-multiply animate-pulse"></div>
      <div className="absolute top-[-50px] right-[-50px] w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-[100px] pointer-events-none z-0 mix-blend-multiply"></div>

      {/* Header / Nav - Glass Effect applied via CSS class */}
      <header className="site-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 md:h-16 flex items-center justify-between">
          <div className="flex items-center logo-group">
            {/* Pi Tab Logo Part */}
            <div className="flex items-center gap-1 mr-3 brand-pi">
              <span className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tighter leading-none pb-1 font-sans">pi</span>
            </div>
            
            {/* Divider */}
            <div className="logo-divider h-6 w-px bg-slate-300 mx-2"></div>
            
            {/* CuriousJr Logo Part */}
            <div className="flex items-center brand-curious">
              <span className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight leading-none">Curious</span>
              <span className="text-xl md:text-2xl font-bold text-[#f97316] tracking-tight leading-none">Jr</span>
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
             className="md:hidden text-xs font-semibold text-white bg-[#f97316] px-3 py-2 rounded-full hover:bg-[#ea580c] transition-colors"
          >
            Book Demo
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-6 lg:pt-24 lg:pb-8 relative z-10">
        {/* Top Section: Hero + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mb-8 lg:mb-12">
          
          {/* Left Column (Hero) */}
          <div className="lg:col-span-7 space-y-6">
            <Hero />
            
            {/* Mobile Form: Visible only on mobile */}
            <div id="mobile-form" className="block lg:hidden scroll-mt-20">
               <LeadForm onSuccess={handleSuccess} className="bg-slate-50 border-slate-200 shadow-lg" />
            </div>
          </div>

          {/* Right Column (Form + Testimonial) - Desktop Only */}
          <div className="hidden lg:block lg:col-span-5">
            <LeadForm onSuccess={handleSuccess} />
            
            {/* Additional desktop-only trust signals below form */}
            <div className="mt-6 p-4 bg-orange-50 rounded-xl border border-orange-100 shadow-sm">
              <div className="flex items-start space-x-3">
                 <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                        <span className="text-[#f97316] font-bold text-lg">“</span>
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

        {/* Bottom Section: USPs, Demo Flow, Footer - Centered Layout */}
        <div className="max-w-5xl mx-auto space-y-8 lg:space-y-12">
          <USPSection />
          <DemoFlow />
          
          {/* Footer Area */}
          <div className="site-footer pt-6 pb-6 border-t border-slate-100 text-sm text-slate-500 text-center">
             <p>&copy; {new Date().getFullYear()} Pi Tab + CuriousJr. All rights reserved.</p>
             <p className="mt-2">
               <span className="footer-link cursor-pointer">Privacy Policy</span> • <span className="footer-link cursor-pointer">Terms of Service</span>
             </p>
          </div>
        </div>

      </main>
    </div>
  );
}

export default App;