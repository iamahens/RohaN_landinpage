import React from 'react';
import { FadeInWhenVisible } from '../common/FadeInWhenVisible';
import { ParticlesBackground } from '../common/ParticlesBackground';

export const CTA = () => (
    <section id="cta" className="py-24 bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <ParticlesBackground />
        
        <div className="container mx-auto px-6 text-center relative z-10">
            <FadeInWhenVisible>
                <h2 className="text-4xl md:text-6xl font-black mb-6 text-white drop-shadow-lg">
                    You're at the final step.
                </h2>
                <div className="max-w-4xl mx-auto mb-8">
                    <p className="text-orange-100 text-xl mb-4 leading-relaxed">
                        By the end of 50 minutes you'll exactly know how to build a business being an expert within 30 days.
                    </p>
                    <p className="text-orange-100 text-xl mb-8 leading-relaxed">
                        Within 3 months you will be considered as an expert in your industry you will be irreplaceable by AI.
                    </p>
                </div>
                
                <div className="mb-8">
                    <a href="https://chat.whatsapp.com/BSPLbsvl9mW5ptGXl4pPZv?mode=ac_t" className="inline-block bg-white text-orange-600 font-black py-6 px-12 rounded-2xl text-xl transition-all duration-300 transform hover:scale-105 hover:bg-gray-100 shadow-2xl hover:shadow-3xl">
                        Join The Group
                    </a>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 max-w-3xl mx-auto">
                    <p className="text-orange-100 leading-relaxed">
                        Click the link to Join the community.  <span className="font-bold text-yellow-300">"How To Be A Thought Leader"</span>
                    </p>
                </div>
            </FadeInWhenVisible>
        </div>
    </section>
);