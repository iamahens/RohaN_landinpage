import React from 'react';
import { FadeInWhenVisible } from '../common/FadeInWhenVisible';

export const Offer = () => (
    <section id="offer" className="py-24 bg-gradient-to-b from-gray-800 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-pink-900/10"></div>
        <div className="container mx-auto px-6 relative z-10">
            <FadeInWhenVisible>
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        How to Design Your Grand Slam Offer
                    </h2>
                    <p className="text-orange-400 text-2xl font-bold max-w-3xl mx-auto leading-relaxed">
                        Create an offer so good that people feel stupid saying "NO"
                    </p>
                </div>
            </FadeInWhenVisible>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
                {[
                    { title: '1:1 Coaching', icon: '👥', color: 'from-blue-500 to-cyan-500' },
                    { title: 'Content Services', icon: '📝', color: 'from-green-500 to-emerald-500' },
                    { title: 'Paid Workshops', icon: '🎓', color: 'from-purple-500 to-violet-500' },
                    { title: 'Affiliate Marketing', icon: '💼', color: 'from-orange-500 to-red-500' },
                    { title: 'Brand Deals', icon: '🤝', color: 'from-pink-500 to-rose-500' }
                ].map((item, index) => (
                    <FadeInWhenVisible key={index} delay={index * 100}>
                        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl text-center border border-gray-700 hover:border-gray-600 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group">
                            <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                                <span className="text-2xl">{item.icon}</span>
                            </div>
                            <p className="font-bold text-lg">{item.title}</p>
                        </div>
                    </FadeInWhenVisible>
                ))}
            </div>
        </div>
    </section>
);
