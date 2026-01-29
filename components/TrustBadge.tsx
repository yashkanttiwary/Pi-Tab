import React from 'react';

export const TrustBadge: React.FC = () => {
  return (
    <div className="flex items-center justify-center space-x-2 text-xs sm:text-sm text-slate-500 mt-4">
      <svg className="w-4 h-4 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
      </svg>
      <span>No spam. No obligation. Your data is safe.</span>
    </div>
  );
};