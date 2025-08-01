import React from 'react';
import { FadeInWhenVisible } from '../common/FadeInWhenVisible';

export const Identity = () => (
    <section id="identity" className="py-24 bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10"></div>
        <div className="container mx-auto px-6 relative z-10">
            <FadeInWhenVisible>
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Why Should You Join The Community?
                    </h2>
                    <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
                        Here's how we ensure your success.
                    </p>
                </div>
            </FadeInWhenVisible>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {[
                    {
                        title: "Guided Implementation",
                        description: "We will help you implement the guide with you, ensuring you take consistent action.",
                        icon: (
                            <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        )
                    },
                    {
                        title: "Solve All Your Doubts",
                        description: "Never get stuck again. We will solve all your doubts about creating compelling content.",
                        icon: (
                            <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.105A9.702 9.702 0 015 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                        )
                    },
                    {
                        title: "Build Your Brand",
                        description: "We will motivate and empower you with the strategies needed to build a powerful personal brand.",
                        icon: (
                            <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        )
                    },
                    {
                        title: "Weekly LIVE Sessions",
                        description: "Get consistent guidance and stay on track with our exclusive weekly live sessions for your journey.",
                        icon: (
                            <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                        )
                    }
                ].map((item, index) => (
                    <FadeInWhenVisible key={index} delay={index * 200}>
                        <div className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 p-8 rounded-2xl shadow-xl border border-orange-700/50 hover:border-orange-500/70 transition-all duration-500 transform hover:scale-105 hover:shadow-orange-500/15 group hover:-translate-y-1 text-left">
                            <div className="flex items-center mb-4">
                                <div className="w-16 h-16 bg-gray-800/50 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                            </div>
                            <p className="text-gray-300 leading-relaxed">{item.description}</p>
                        </div>
                    </FadeInWhenVisible>
                ))}
            </div>

            {/* The "If you answer ONE Thing..." section has been removed as per the request to use the new content and card style. */}
        </div>
    </section>
);
