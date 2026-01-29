import React from 'react';

interface USPItemProps {
    icon: React.ReactNode;
    title: string;
    colorClass: string;
}

const USPItem: React.FC<USPItemProps> = ({ icon, title, colorClass }) => (
  <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow h-full">
    <div className={`w-12 h-12 flex-shrink-0 ${colorClass} rounded-xl flex items-center justify-center shadow-sm`}>
      {icon}
    </div>
    <h3 className="text-base font-bold text-slate-900 leading-tight">{title}</h3>
  </div>
);

export const USPSection: React.FC = () => {
  return (
    <div className="py-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Why Parents Choose Pi Tab</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <USPItem 
                colorClass="bg-[#ef4444] text-white"
                icon={
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                }
                title="Distraction-Free Learning"
            />
            <USPItem 
                colorClass="bg-[#3b82f6] text-white"
                icon={
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                }
                title="Instant Doubt Support"
            />
             <USPItem 
                colorClass="bg-[#a855f7] text-white"
                icon={
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                     </svg>
                }
                title="Full Parent Control"
            />
             <USPItem 
                colorClass="bg-[#10b981] text-white"
                icon={
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                     </svg>
                }
                title="Concept Clarity & Revision"
            />
        </div>
    </div>
  );
};