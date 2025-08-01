import React from 'react';
import { FadeInWhenVisible } from '../common/FadeInWhenVisible';

export const Identity = () => (
    <section id="identity" className="py-24 bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10"></div>
        <div className="container mx-auto px-6 relative z-10">
            <FadeInWhenVisible>
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        How to Define Your Unique Identity
                    </h2>
                    <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
                        Find what you are best at in the world by answering these 3 questions.
                    </p>
                </div>
            </FadeInWhenVisible>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {[
                    {
                        question: "1. What do you love?",
                        answer: "What are you passionate about? What excites you, even if you weren't paid for it?",
                        color: "from-pink-500 to-rose-500",
                        icon: "❤️"
                    },
                    {
                        question: "2. What are you good at?",
                        answer: "What skills or strengths do you consistently get complimented on or see results from?",
                        color: "from-green-500 to-emerald-500",
                        icon: "⭐"
                    },
                    {
                        question: "3. What do people need?",
                        answer: "What problems do others have that you can solve with your skills, and they are willing to pay for?",
                        color: "from-blue-500 to-cyan-500",
                        icon: "💰"
                    }
                ].map((item, index) => (
                    <FadeInWhenVisible key={index} delay={index * 200}>
                        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group text-center">
                            <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                                <span className="text-2xl">{item.icon}</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-white">{item.question}</h3>
                            <p className="text-gray-400 leading-relaxed">{item.answer}</p>
                        </div>
                    </FadeInWhenVisible>
                ))}
            </div>
            
            <FadeInWhenVisible delay={600}>
                <div className="text-center mt-12">
                    <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border-2 border-purple-500/30 rounded-2xl p-8 max-w-3xl mx-auto">
                        <p className="font-bold text-2xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            If you answer ONE Thing for all three questions, that's your niche.
                        </p>
                    </div>
                </div>
            </FadeInWhenVisible>
        </div>
    </section>
);
