import React, { useEffect } from 'react';
import { Button } from './ui/Button';

export const ThankYou: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center border border-slate-100">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Request Received!</h1>
        <p className="text-slate-600 mb-8 leading-relaxed">
          Thank you for your interest in Pi Tab. We have received your request for a free home demo.
        </p>
        
        <div className="bg-blue-50 rounded-xl p-6 text-left mb-8">
          <h3 className="text-sm font-bold text-blue-900 uppercase tracking-wide mb-4">What happens next?</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center text-blue-700 font-bold text-xs mr-3 flex-shrink-0">1</div>
              <p className="text-sm text-blue-800">We will call or WhatsApp you within 24 hours.</p>
            </li>
            <li className="flex items-start">
              <div className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center text-blue-700 font-bold text-xs mr-3 flex-shrink-0">2</div>
              <p className="text-sm text-blue-800">We'll schedule a time that works for you.</p>
            </li>
            <li className="flex items-start">
              <div className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center text-blue-700 font-bold text-xs mr-3 flex-shrink-0">3</div>
              <p className="text-sm text-blue-800">Our expert visits your home for the free demo.</p>
            </li>
          </ul>
        </div>
        
        <div className="space-y-3">
          <Button fullWidth onClick={() => window.location.reload()}>
            Back to Home
          </Button>
          <p className="text-xs text-slate-400 mt-4">
            Questions? Call us at <span className="font-semibold text-slate-500">+91 98765 43210</span>
          </p>
        </div>
      </div>
    </div>
  );
};