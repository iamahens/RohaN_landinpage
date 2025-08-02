import React, { useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { Problem } from './components/sections/Problem';
import { Solution } from './components/sections/Solution';
import { Identity } from './components/sections/Identity';
import { ContentSystem } from './components/sections/ContentSystem';
import { Offer } from './components/sections/Offer';
import { CTA } from './components/sections/CTA';
import { Footer } from './components/layout/Footer';
import InstagramCTA from './components/sections/InstagramCTA';
import ContactSection from './components/sections/ContactSection';
import { AboutMe } from './components/sections/AboutMe';
import { VideoTestimonialsSection } from './components/sections/VideoTestimonialSection';
import { TestimonialCarouselSection } from './components/sections/TestimonialCarouselSection';
import { FAQSection } from './components/sections/FAQSection';
import { ImageCarouselSection } from './components/sections/ImageCarouselSection';


export default function App() {
    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
            html { 
                scroll-behavior: smooth; 
                overflow-x: hidden; 
            }
            body { 
                background-color: #111827; 
                overflow-x: hidden; 
            }
            
            @keyframes fade-in-down {
                0% { opacity: 0; transform: translateY(-30px); }
                100% { opacity: 1; transform: translateY(0); }
            }
            
            @keyframes fade-in-up {
                0% { opacity: 0; transform: translateY(30px); }
                100% { opacity: 1; transform: translateY(0); }
            }
            
            @keyframes grid-move {
                0% { transform: translate(0, 0); }
                100% { transform: translate(50px, 50px); }
            }
            
            @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-20px); }
            }
            
            @keyframes glow {
                0%, 100% { box-shadow: 0 0 20px rgba(249, 115, 22, 0.3); }
                50% { box-shadow: 0 0 40px rgba(249, 115, 22, 0.6), 0 0 60px rgba(249, 115, 22, 0.3); }
            }
            
            .animate-fade-in-down { 
                animation: fade-in-down 1.2s ease-out forwards; 
            }
            
            .animate-fade-in-up { 
                animation: fade-in-up 1.2s ease-out 0.6s forwards; 
                opacity: 0;
            }
            
            .animate-float {
                animation: float 6s ease-in-out infinite;
            }
            
            .animate-glow {
                animation: glow 2s ease-in-out infinite;
            }
            
            /* Custom scrollbar */
            ::-webkit-scrollbar {
                width: 8px;
            }
            
            ::-webkit-scrollbar-track {
                background: #1f2937;
            }
            
            ::-webkit-scrollbar-thumb {
                background: linear-gradient(to bottom, #f97316, #dc2626);
                border-radius: 4px;
            }
            
            ::-webkit-scrollbar-thumb:hover {
                background: linear-gradient(to bottom, #ea580c, #b91c1c);
            }
            
            /* Smooth transitions for all elements */
            * {
                transition: all 0.3s ease;
            }
            
            /* Enhanced button hover effects */
            .hover-lift:hover {
                transform: translateY(-2px);
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
            }
            
            /* Gradient text animation */
            @keyframes gradient-shift {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            
            .animate-gradient {
                background-size: 200% 200%;
                animation: gradient-shift 3s ease infinite;
            }
        `;
        document.head.appendChild(style);
        
        return () => {
            if (document.head.contains(style)) {
                document.head.removeChild(style);
            }
        };
    }, []);

    return (
        <div className="font-sans leading-normal tracking-normal antialiased">
            <Header />
            <main>
                <Hero />
                <InstagramCTA/>
                <AboutMe/>
                <Offer />
                <Problem />
                <Solution />
              
                <Identity />
                <VideoTestimonialsSection/>
                <ImageCarouselSection/>
                <TestimonialCarouselSection/>
                 <FAQSection/>
                <ContactSection/>
                <CTA />
            </main>
            <Footer />
        </div>
    );
}
