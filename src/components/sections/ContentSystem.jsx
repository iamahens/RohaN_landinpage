import React from 'react';
import { FadeInWhenVisible } from '../common/FadeInWhenVisible';

export const ContentSystem = () => (
    <section id="content" className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/10 to-teal-900/10"></div>
        <div className="container mx-auto px-6 relative z-10">
            <FadeInWhenVisible>
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                        How to Create Your Content System
                    </h2>
                    <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
                        Use ChatGPT to generate 20 ideas and scripts related to your field. Here's how.
                    </p>
                </div>
            </FadeInWhenVisible>
            
            <FadeInWhenVisible delay={200}>
                <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-8 max-w-5xl mx-auto shadow-2xl border border-green-500/20">
                    <div className="mb-8">
                        <h3 className="font-bold text-2xl text-green-400 mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center text-black font-black text-sm">1</span>
                            Define Your Niche Clearly
                        </h3>
                        <div className="bg-black/60 p-6 rounded-xl font-mono text-sm text-gray-300 border-l-4 border-green-500">
                            <p className="leading-relaxed">
                                Act as a content strategist. My niche is <span className="text-green-400 font-semibold">[INSERT NICHE]</span>. I help <span className="text-green-400 font-semibold">[TARGET AUDIENCE]</span> to <span className="text-green-400 font-semibold">[SOLVE THIS PROBLEM]</span> using <span className="text-green-400 font-semibold">[METHOD/APPROACH]</span>. I want to create content that builds trust and shows my authority in this niche.
                            </p>
                        </div>
                    </div>
                    
                    <div className="mb-8">
                        <h3 className="font-bold text-2xl text-teal-400 mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center text-black font-black text-sm">2</span>
                            Generate 20 High-Impact Content Ideas
                        </h3>
                        <div className="bg-black/60 p-6 rounded-xl font-mono text-sm text-gray-300 border-l-4 border-teal-500">
                            <p className="leading-relaxed">
                                Based on the niche I gave above, give me 20 content ideas that:
                                <br/>• Establish me as a trusted authority
                                <br/>• Educate or inspire my audience  
                                <br/>• Are likely to perform well on <span className="text-teal-400 font-semibold">[Instagram/LinkedIn/YouTube/Twitter]</span>
                                <br/>• Include a hook for the first 5 seconds (if video) or first line (if text)
                                <br/>• Solve a problem or answer a burning question my audience has
                            </p>
                        </div>
                    </div>
                    
                    <div>
                        <h3 className="font-bold text-2xl text-blue-400 mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-black font-black text-sm">3</span>
                            Turn Each Idea into a Detailed Script
                        </h3>
                        <div className="bg-black/60 p-6 rounded-xl font-mono text-sm text-gray-300 border-l-4 border-blue-500">
                            <p className="leading-relaxed">
                                Take this content idea: "<span className="text-blue-400 font-semibold">[INSERT IDEA]</span>" and write a full script for it.
                                <br/><br/>
                                <span className="text-blue-400 font-semibold">Format:</span>
                                <br/>• Hook (first line to grab attention)
                                <br/>• Main Content (3-5 key points, explained simply)  
                                <br/>• CTA (engagement, follow, or offer)
                                <br/>
                                <br/><span className="text-blue-400 font-semibold">Tone:</span> [friendly, expert, funny, emotional — pick one]
                                <br/><span className="text-blue-400 font-semibold">Platform:</span> [Instagram Reels, YouTube Short, LinkedIn Post, etc.]
                            </p>
                        </div>
                    </div>
                </div>
            </FadeInWhenVisible>
        </div>
    </section>
);