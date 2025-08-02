import React from 'react';
import { ParticlesBackground } from '../common/ParticlesBackground';
import { ArrowIcon } from '../common/Icons';

export const Hero = () => (
    <section id="hero" className="relative min-h-screen mt-20 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
        <ParticlesBackground />
        
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
                backgroundImage: `linear-gradient(rgba(255,165,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,165,0,0.1) 1px, transparent 1px)`,
                backgroundSize: '50px 50px',
                animation: 'grid-move 20s linear infinite'
            }}></div>
        </div>

        {/* Gradient orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="relative z-20 container mx-auto px-6 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="text-center lg:text-left">
                    <div className="animate-fade-in-down">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 tracking-tight">
                           How to build an  <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent animate-pulse">AI-Proof </span> Career?
                        </h1>
                    </div>
                    <div className="animate-fade-in-up">
                        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 font-light leading-relaxed">
                            Unless you're an <span className="text-orange-400 font-semibold">Become </span>an Expert by building a  <span className="text-orange-400 font-semibold">strong</span> personal brand.
                        </p>
                        
                        <div className="bg-gradient-to-r from-yellow-400/20 to-orange-400/20 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-6 mb-8">
                            <p className="font-semibold text-lg md:text-xl text-yellow-300">
                               Worried AI might replace you?</p>
<p>Learn to stand out, create content, and become irreplaceable — in just 50 minutes.
                            </p>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                            <a href="#community" className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-orange-500/25 flex items-center gap-2 group">
                                Join Community 
                                <ArrowIcon className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href="#eguide" className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                                Download E-Guide
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative animate-fade-in-right">
                    <div className="relative">
                        {/* Glowing border effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 rounded-3xl blur opacity-75 animate-pulse"></div>
                        
                        {/* Main image container */}
                        <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-2">
                            <img 
                                src="/images/herosection.jpg"
                                alt="Expert Professional"
                                className="w-full h-[350px] lg:h-[450px] object-cover rounded-2xl shadow-2xl"
                            />
                            
                            {/* Floating badges */}
                            <div className="absolute -top-4 -left-4 bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce">
                                AI Expert
                            </div>
                            <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce" style={{ animationDelay: '0.5s' }}>
                                10K+ Students
                            </div>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute top-10 -right-6 w-20 h-20 bg-orange-500/30 rounded-full blur-xl animate-pulse"></div>
                        <div className="absolute bottom-20 -left-6 w-16 h-16 bg-red-500/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                    </div>
                </div>
            </div>
        </div>

        {/* Custom CSS for animations */}
        <style jsx>{`
            @keyframes grid-move {
                0% { transform: translate(0, 0); }
                100% { transform: translate(50px, 50px); }
            }
            @keyframes fade-in-down {
                from { opacity: 0; transform: translateY(-30px); }
                to { opacity: 1; transform: translateY(0); }
            }
            @keyframes fade-in-up {
                from { opacity: 0; transform: translateY(30px); }
                to { opacity: 1; transform: translateY(0); }
            }
            @keyframes fade-in-right {
                from { opacity: 0; transform: translateX(30px); }
                to { opacity: 1; transform: translateX(0); }
            }
            .animate-fade-in-down { animation: fade-in-down 1s ease-out; }
            .animate-fade-in-up { animation: fade-in-up 1s ease-out 0.2s both; }
            .animate-fade-in-right { animation: fade-in-right 1s ease-out 0.4s both; }
        `}</style>
    </section>
);