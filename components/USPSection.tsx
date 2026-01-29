import React from 'react';

const USPItem: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
  </div>
);

export const USPSection: React.FC = () => {
  return (
    <div className="py-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Why Parents Choose Pi Tab</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <USPItem 
                icon={
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                }
                title="Distraction-Free Learning"
                desc="A study-only device. No games. No social media. No notifications popping up to distract your child."
            />
            <USPItem 
                icon={
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                }
                title="Instant Doubt Support"
                desc="Stuck on a problem? Scan questions and get simple, clear explanations instantly to keep learning moving."
            />
             <USPItem 
                icon={
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                }
                title="Full Parent Control"
                desc="You are in charge. Set screen limits, lock specific apps, and get detailed daily learning reports."
            />
        </div>
    </div>
  );
};