import React from 'react';

interface USPItemProps {
    icon: React.ReactNode;
    title: string;
    desc: string;
    colorClass: string;
}

const USPItem: React.FC<USPItemProps> = ({ icon, title, desc, colorClass }) => (
  <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
    <div className={`w-14 h-14 ${colorClass} rounded-2xl flex items-center justify-center mb-4 shadow-sm`}>
      {icon}
    </div>
    <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
  </div>
);

export const USPSection: React.FC = () => {
  return (
    <div className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <USPItem 
                colorClass="bg-[#ef4444] text-white"
                icon={
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                }
                title="Live Interactive Classes"
                desc="A study-only device perfect for attending live classes without games or social media distractions."
            />
            <USPItem 
                colorClass="bg-[#3b82f6] text-white"
                icon={
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                }
                title="24 x 7 Mentor Support"
                desc="Stuck on a problem? Scan questions and get simple, clear explanations instantly to keep learning moving."
            />
             <USPItem 
                colorClass="bg-[#a855f7] text-white"
                icon={
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                }
                title="Daily Progress Tracking"
                desc="Detailed daily learning reports for parents. Know exactly what your child learned today."
            />
             <USPItem 
                colorClass="bg-[#fbbf24] text-white"
                icon={
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                }
                title="Practice Led Learning"
                desc="Learn by doing with interactive block coding, quizzes, and concept builders designed for engagement."
            />
        </div>
    </div>
  );
};