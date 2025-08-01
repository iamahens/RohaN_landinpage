import React from 'react';
import { FadeInWhenVisible } from '../common/FadeInWhenVisible';

export const Solution = () => (
    <section id="solution" className="py-24 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/10 to-yellow-900/10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
            <FadeInWhenVisible>
                <h2 className="text-4xl md:text-6xl font-black mb-6">So, how do you become AI proof?</h2>
                <p className="text-orange-400 text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                    Productize Yourself - Become an Expert
                </p>
                <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-6 mb-16 max-w-4xl mx-auto">
                    <p className="text-gray-300 text-lg leading-relaxed">
                        Aaj jo mai apko sikhane jarha hu uske lie sare SMA mujhe hate karenge kyuki mai unke sare secrets aaj yaha khol rha hu.
                    </p>
                </div>
            </FadeInWhenVisible>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {[
                    {
                        title: "1. Specific Knowledge",
                        description: "Focus on the domain where you're uniquely skilled—that feels like play to you and can't easily be replicated.",
                        icon: "🧠"
                    },
                    {
                        title: "2. Accountability (\"Yourself\")",
                        description: "Own your voice and outcomes publicly. Accountability builds brand trust and identity.",
                        icon: "👤"
                    },
                    {
                        title: "3. Leverage (\"Productize\")",
                        description: "Scale your unique knowledge through media, tools, or digital products that detach income from time.",
                        icon: "🚀"
                    }
                ].map((item, index) => (
                    <FadeInWhenVisible key={index} delay={index * 200}>
                        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl shadow-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-500 transform hover:scale-105 hover:shadow-orange-500/10 group">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                            <h3 className="text-2xl font-bold mb-4 text-orange-400">{item.title}</h3>
                            <p className="text-gray-300 leading-relaxed">{item.description}</p>
                        </div>
                    </FadeInWhenVisible>
                ))}
            </div>
        </div>
    </section>
);
