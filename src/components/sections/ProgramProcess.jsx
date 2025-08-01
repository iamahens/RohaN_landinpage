import React, { useState, useEffect, useRef } from 'react';

// Custom hook to detect when an element is in view
const useInView = (options) => {
    const [isInView, setIsInView] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // If the element is intersecting, set isInView to true and unobserve
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.unobserve(entry.target);
                }
            },
            options
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        // Cleanup function to unobserve when the component unmounts
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, options]); // Dependencies for the effect

    return [ref, isInView];
};

// A generic icon component for the steps
const StepIcon = ({ icon }) => (
    <div className="flex-shrink-0 w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center border-4 border-gray-700 group-hover:border-orange-400 transition-colors duration-300">
        {icon}
    </div>
);

// Component for individual steps to handle their own animations
const ProcessStep = ({ step, index }) => {
    // Use the useInView hook to trigger animation when the step enters the viewport
    const [stepRef, isVisible] = useInView({ threshold: 0.3 }); // Lower threshold for earlier animation

    return (
        <div
            ref={stepRef}
            // Apply transition classes based on visibility and add a delay for staggered effect
            className={`relative flex items-start mb-12 group transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <StepIcon icon={step.icon} />
            <div className="ml-8 text-left">
                <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
            </div>
        </div>
    );
};

// Main component for the Program Process section
const ProgramProcess = ({ onRegisterClick }) => {
    // Use useInView for the main title and paragraph
    const [titleRef, isTitleVisible] = useInView({ threshold: 0.5 });

    // Content for the 4-week program steps
    const processSteps = [
        {
            icon: <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
            title: "Week 1: Niche & Content Strategy",
            description: "Pinpoint your perfect niche and craft a powerful content plan for your first 20 viral-worthy posts."
        },
        {
            icon: <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
            title: "Week 2: Effortless Content Creation",
            description: "Learn the simplest, most effective methods to shoot high-quality content using just your phone."
        },
        {
            icon: <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
            title: "Week 3: Professional Video Editing",
            description: "Master simple yet powerful techniques to edit your content quickly and make it look stunning."
        },
        {
            icon: <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>,
            title: "Week 4: Go Viral & Manage Socials",
            description: "Unlock the secrets to managing your social media effectively and increase your chances of going viral."
        }
    ];

    return (
        <section className="relative py-24 px-4 bg-gray-900 text-white overflow-hidden">
            {/* Background gradient for the white hue effect */}
            <div className="absolute inset-0 z-0 opacity-20"
                 style={{
                     background: 'radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, transparent 70%)'
                 }}>
            </div>
            {/* Another subtle gradient from the original problem section */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-900/5 to-red-900/5 z-0"></div>

            <div className="container mx-auto relative z-10">
                <div ref={titleRef} className="text-center mb-16">
                    <h2 className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent transition-all duration-700 ${isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                        What You'll Learn in <span className="text-orange-400">4 Weeks</span>
                    </h2>
                    <p className={`text-xl text-gray-400 transition-all duration-700 delay-200 ${isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                        A clear path to building a strong personal brand.
                    </p>
                </div>

                <div className="relative max-w-2xl mx-auto">
                    {/* The vertical line */}
                    <div className="absolute left-8 top-0 h-full w-0.5 bg-gray-700"></div>

                    {processSteps.map((step, index) => (
                        <ProcessStep key={index} step={step} index={index} />
                    ))}
                </div>

                <div className="text-center mt-16">
                    <button
                        onClick={onRegisterClick}
                        className="inline-block px-10 py-4 text-xl font-bold text-white bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-lg
                                   transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:scale-95 active:translate-y-0.5
                                   focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-75"
                    >
                        Start Your Journey Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProgramProcess;
