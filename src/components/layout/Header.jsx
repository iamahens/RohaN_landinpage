// Header.jsx
import React, { useState, useEffect } from 'react';
import { MenuIcon } from '../common/Icons';
import RegistrationModal from '../sections/RegistrationModal'; // Adjust the path if needed

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [modalOpen, setModalOpen] = useState(false); // ← modal control

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
         { href: '#about', text: 'About ' },
        { href: '#offer', text: 'Your Offer' },
       
        { href: '#problem', text: 'The Problem' },
        { href: '#solution', text: 'Planner' },
        { href: '#identity', text: 'In Webinar' },
        { href: '#faq', text: 'FAQ' },
        
    ];

    return (
        <>
            <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
                scrolled 
                    ? 'bg-gray-900/95 backdrop-blur-xl shadow-2xl border-b border-orange-500/20' 
                    : 'bg-transparent'
            }`}>
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <a href="#" className="text-3xl font-black text-white tracking-wider hover:text-orange-400 transition-all duration-300 transform hover:scale-105">
                        <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Rohan</span>-Agrahari
                    </a>
                    <nav className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <a 
                                key={link.href} 
                                href={link.href} 
                                className="text-gray-300 hover:text-orange-400 transition-all duration-300 relative group font-medium"
                            >
                                {link.text}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                        <button 
                            onClick={() => setModalOpen(true)}
                            className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-orange-500/25"
                        >
                            Join Now
                        </button>
                    </nav>
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none p-2 rounded-lg hover:bg-gray-800 transition-colors">
                            <MenuIcon />
                        </button>
                    </div>
                </div>
                {isOpen && (
                    <div className="md:hidden bg-gray-900/98 backdrop-blur-xl border-t border-orange-500/20">
                        <nav className="px-8 pt-4 pb-6 flex flex-col space-y-4">
                            {navLinks.map(link => (
                                <a 
                                    key={link.href} 
                                    href={link.href} 
                                    className="text-gray-300 hover:text-orange-400 transition-colors py-2" 
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.text}
                                </a>
                            ))}
                            <button 
                                onClick={() => {
                                    setIsOpen(false);
                                    setModalOpen(true);
                                }}
                                className="bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-3 px-4 rounded-xl text-center mt-4"
                            >
                                Join Now
                            </button>
                        </nav>
                    </div>
                )}
            </header>

            {/* Registration Modal */}
            <RegistrationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </>
    );
};
