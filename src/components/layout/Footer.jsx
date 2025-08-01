import React from 'react';

export const Footer = () => (
    <footer className="bg-black text-gray-400 py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-black/50"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
            <div className="mb-8">
                <h3 className="text-3xl font-black text-white mb-4">
                    <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Rohan</span>Agrahari
                </h3>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Transform yourself from a commodity into an irreplaceable expert using the power of AI.
                </p>
            </div>
            
            <div className="border-t border-gray-800 pt-8">
                <p className="text-gray-500">
                    &copy; {new Date().getFullYear()} AI-Proof Career. All Rights Reserved.
                </p>
                <p className="text-sm text-gray-600 mt-2">
                    Built to help you stay ahead of the AI revolution.
                </p>
            </div>
        </div>
    </footer>
);
