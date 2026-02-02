import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  const [heroImage, setHeroImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateImage = async () => {
    try {
      setIsGenerating(true);
      setError(null);

      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

      const prompt = `
        Professional product photography of a tablet for kids called "Pi Tab" sitting on a modern wooden desk.
        The tablet has a durable blue protective case.
        The screen is on and displaying a colorful, educational app interface designed for children, featuring block coding puzzles and math games.
        The interface should look like "CuriousJr".
        Soft natural lighting coming from a window, shallow depth of field, sharp focus on the tablet screen.
        High quality, 4k, realistic.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [
            { text: prompt },
          ],
        },
      });

      let imageFound = false;
      if (response.candidates && response.candidates[0].content && response.candidates[0].content.parts) {
        for (const part of response.candidates[0].content.parts) {
          if (part.inlineData) {
            const base64String = part.inlineData.data;
            const mimeType = part.inlineData.mimeType || 'image/png';
            setHeroImage(`data:${mimeType};base64,${base64String}`);
            imageFound = true;
            break;
          }
        }
      }

      if (!imageFound) {
        throw new Error("No image generated in response.");
      }

    } catch (err) {
      console.error("Error generating image:", err);
      setError("Failed to generate image. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="hero-section space-y-6 md:space-y-8">
      {/* Headlines */}
      <div className="space-y-4">
        <h1 className="hero-headline text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
          A Study-First Tab for <br/><span className="text-[#f97316]">Curious Young Learners!</span>
        </h1>
        <p className="hero-subtext text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
          Learning without distractions. Built for CuriousJr.
        </p>
        
        {/* Classes Accent */}
        <div className="inline-block relative">
            <span className="text-slate-900 font-bold text-lg relative z-10">For classes 3rd to 10th</span>
            <div className="hero-accent-underline absolute bottom-0 left-0 w-full h-1 bg-[#f97316] rounded-full transform -rotate-1"></div>
        </div>
      </div>

      {/* Value Strip */}
      <div className="flex flex-wrap gap-y-2 gap-x-6 text-sm md:text-base font-medium text-slate-700 bg-orange-50 py-3 px-4 rounded-lg inline-flex border border-orange-100">
        <div className="flex items-center">
          <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
          Zero notifications
        </div>
        <div className="flex items-center">
          <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
          Safe parental control
        </div>
        <div className="flex items-center">
          <div className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></div>
          Clear concept learning
        </div>
      </div>

      {/* Hero Image Area */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[16/9] md:aspect-[16/10] group">
         {heroImage ? (
           <img 
              src={heroImage} 
              alt="Pi Tab displaying educational content" 
              className="w-full h-full object-cover animate-fade-in"
           />
         ) : (
           <div className="w-full h-full relative">
             <img 
                src="https://picsum.photos/800/500?blur=2" 
                alt="Placeholder" 
                className="w-full h-full object-cover opacity-50"
             />
             <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                <Button 
                  onClick={generateImage} 
                  isLoading={isGenerating}
                  className="shadow-lg transform transition-transform hover:scale-105"
                >
                  ✨ Generate Product Image (AI)
                </Button>
                {error && <p className="mt-2 text-red-600 text-sm bg-white/90 px-2 py-1 rounded">{error}</p>}
                <p className="mt-4 text-slate-500 text-sm font-medium">Powered by Gemini 2.5 Flash Image</p>
             </div>
           </div>
         )}
        
        {/* Overlay Caption */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 pointer-events-none">
            <p className="text-white font-semibold">Pi Tab + CuriousJr Interface</p>
        </div>
      </div>
    </div>
  );
};