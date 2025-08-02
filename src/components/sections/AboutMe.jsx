import React from 'react';
import { FadeInWhenVisible } from '../common/FadeInWhenVisible'; // Assuming this component is available


export const AboutMe = () => {
    return (
        <section id="about" className="py-24 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden px-8 md:px-16 lg:px-24">
            {/* Background gradients for visual depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10"></div>
            <div className="absolute inset-0 z-0 opacity-20"
                 style={{
                     background: 'radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, transparent 70%)'
                 }}>
            </div>

            {/* Removed px from container, as padding is now handled by the section */}
            <div className="container mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Text Content */}
                    <div className="text-left">
                        <FadeInWhenVisible>
                            <p className="text-gray-400 text-xl mb-4">Hi, I'm</p>
                            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                Rohan Agrahari
                            </h2>
                            <p className="text-orange-400 text-2xl font-bold mb-8">
                                I'll be your guide on this journey to building your Personal Brand
                            </p>
                            <p className="text-gray-300 text-lg leading-relaxed mb-12 max-w-xl">
                                I started as a Filmmaker, worked in India’s best branding agency, student of Dr. Vivek Bindra. And I breathe content. I want you to help build your Personal Brand.
                            </p>
                        </FadeInWhenVisible>

                        {/* Social Media Links (Mockups) */}
                        <FadeInWhenVisible delay={400}>
                            <div className="flex space-x-6">
                                <a href="https://www.instagram.com/viralrohan?igsh=YTU5dWZyYXY2dDRs" className="inline-flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.05 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm5.25-9.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" clipRule="evenodd" />
                                    </svg>
                                    Instagram
                                </a>
                                {/* WhatsApp Link */}
                                <a href="https://wa.me/YOURPHONENUMBER" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M12.04 2C6.59 2 2.13 6.45 2.13 11.99c0 1.74.45 3.42 1.3 4.9l-1.4 5.14 5.23-1.37c1.45.79 3.08 1.21 4.78 1.21 5.45 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm3.62 14.15c-.17.28-.62.4-1.22.1-.6-.3-.99-.49-1.87-.84-.88-.35-1.89-.88-2.66-1.65-.78-.78-1.28-1.8-1.63-2.68-.35-.88-.12-1.4.15-1.58.27-.17.59-.22.79-.22.19 0 .33.01.44.03.11.02.26.06.41.4.16.34.54 1.3.58 1.4.04.1.07.2.01.31-.06.11-.1.18-.2.27-.1.1-.21.2-.31.31-.1.11-.2.22-.3.32-.1.1-.19.19-.08.38.11.19.4.65.86.99.46.34.82.49 1.09.6.27.11.45.08.62-.09.17-.17.7-.82.95-1.1.25-.28.45-.23.62-.15.17.08 1.08.51 1.27.6.19.09.32.14.37.21.05.07.05.4.01.76-.04.36-.14.4-.24.49z" />
                                    </svg>
                                    WhatsApp
                                </a>
                            </div>
                        </FadeInWhenVisible>
                    </div>

                    {/* Right Column: Image Collage */}
                    <div className="relative flex justify-center items-center lg:justify-end">
                        <FadeInWhenVisible delay={200}>
                            {/* New grid structure for the collage with controlled max-width */}
                            <div className="grid grid-cols-2 gap-4 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none"> {/* Adjusted max-w for better responsiveness */}
                                {/* Main Portrait Image (Left) */}
                                <div className="relative col-span-1 row-span-2 rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50 transform hover:scale-105 transition-transform duration-300">
                                    <img src="/images/about2.jpg" alt="Rohan Agrahari Main" className="w-full h-[400px] object-cover rounded-2xl" />
                                    {/* Forbes Badge overlaid on the main image */}
                                    
                                </div>
                                {/* Top Right Image */}
                                <div className="col-span-1 rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50 transform hover:scale-105 transition-transform duration-300">
                                    <img src="/images/about3.jpg" alt="Rohan Agrahari Image 2" className="w-full h-[192px] object-cover rounded-2xl" />
                                </div>
                                {/* Bottom Right Image */}
                                <div className="col-span-1 rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50 transform hover:scale-105 transition-transform duration-300">
                                    <img src="/images/about1.jpeg" alt="Rohan Agrahari Image 3" className="w-full h-[192px] object-cover rounded-2xl" />
                                </div>
                            </div>
                        </FadeInWhenVisible>
                    </div>
                </div>
            </div>
        </section>
    );
};
