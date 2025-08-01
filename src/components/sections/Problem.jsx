import React from 'react';
import { FadeInWhenVisible } from '../common/FadeInWhenVisible';

export const Problem = () => (
    <section id="problem" className="py-24 bg-gradient-to-b from-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 to-orange-900/10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
            <FadeInWhenVisible>
                <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                    Do any of these sound familiar?
                </h2>
                <p className="text-xl text-gray-400 mb-16 max-w-3xl mx-auto">
                    If you recognize yourself in these scenarios, you're not alone.
                </p>
            </FadeInWhenVisible>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {[
                    "Do you regret not learning and using AI as you should?",
                    "Do you feel scared that AI might replace you in the near future?",
                    "Have you tried and failed multiple times at creating content?",
                    "Does content creation feel like eating a frog to you?"
                ].map((question, index) => (
                    <FadeInWhenVisible key={index} delay={index * 200}>
                        <div className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 p-8 rounded-2xl border border-red-500/20 hover:border-red-500/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10 group">
                            <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-white font-bold text-xl">!</span>
                            </div>
                            <p className="text-lg font-medium leading-relaxed">{question}</p>
                        </div>
                    </FadeInWhenVisible>
                ))}
            </div>
        </div>
    </section>
);