import React from 'react';
import { FadeInWhenVisible } from '../common/FadeInWhenVisible';

export const Offer = () => (
    <section id="offer" className="py-24 bg-gradient-to-b from-gray-800 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-pink-900/10"></div>
        <div className="container mx-auto px-6 relative z-10">
            <FadeInWhenVisible>
                <div className="text-center mb-16">
                    {/* Main heading */}
                    <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        DREAM OUTCOME BY THE END OF 50 MINUTES
                    </h2>
                    {/* Sub-paragraph */}
                    <p className="text-orange-400 text-2xl font-bold max-w-3xl mx-auto leading-relaxed">
                        You'll Know Exactly How to <span className="font-bold text-white">Build an Expert Business</span> Within 30 Days.
                    </p>
                </div>
            </FadeInWhenVisible>

            {/* Grid for the 5 offers */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-7xl mx-auto">
                {[
                    {
                        title: "Exclusive WhatsApp Group",
                        icon: "💬"
                    },
                    {
                        title: "Personalized 1:1 Coaching",
                        icon: "🧑‍🏫"
                    },
                    {
                        title: "Done-For-You Content Services",
                        icon: "✍️"
                    },
                    {
                        title: "Live Value Workshops",
                        icon: "💡"
                    },
                    {
                        title: "Free E-book Download",
                        icon: "📚"
                    }
                ].map((item, index) => (
                    <FadeInWhenVisible key={index} delay={index * 100}>
                        <div className="bg-gray-900 p-5 rounded-xl shadow-lg border border-gray-700/50 hover:border-orange-500/70 transition-all duration-500 transform hover:scale-105 hover:shadow-orange-500/20 group hover:-translate-y-1 text-center">
                            {/* Title above the icon */}
                            <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>

                            {/* Icon container */}
                            <div className="w-14 h-14 bg-gray-950 rounded-xl flex items-center justify-center mx-auto transition-transform duration-300 group-hover:scale-110">
                                <span className="text-3xl">{item.icon}</span>
                            </div>
                        </div>
                    </FadeInWhenVisible>
                ))}
            </div>
        </div>
    </section>
);
