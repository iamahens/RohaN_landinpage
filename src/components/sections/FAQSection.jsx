import React, { useState } from 'react'; // Import useState
import { FadeInWhenVisible } from '../common/FadeInWhenVisible'; // Assuming this component is available

export const FAQSection = () => {
    // State to manage which FAQ item is currently open
    const [activeIndex, setActiveIndex] = useState(null);

    // Function to toggle the active FAQ item
    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What is the main problem this program addresses?",
            answer: "This program helps individuals become 'AI-proof' experts, ensuring they are not replaced by AI and can thrive in the evolving digital landscape."
        },
        {
            question: "How can I define my unique identity or niche?",
            answer: "You can define your unique identity by answering three core questions: What do you love doing? What are you really good at? What do people need and are willing to pay for? The intersection of these answers reveals your niche."
        },
        {
            question: "What will I learn in the 4-week program?",
            answer: "The 4-week program covers Niche & Content Strategy, Effortless Content Creation (shooting with your phone), Professional Video Editing, and strategies to Go Viral & Manage Socials effectively."
        },
        {
            question: "What are the benefits of joining the community?",
            answer: "Joining the community offers Guided Implementation, a platform to Solve All Your Doubts, assistance to Build Your Brand, and access to Weekly LIVE Sessions for consistent guidance."
        },
        {
            question: "What is the 'Dream Outcome' of the 50-minute session?",
            answer: "By the end of the 50-minute session, you will know exactly how to build a business as an expert within just 30 days."
        },
        {
            question: "How can I get more information or join the program?",
            answer: "You can download the free e-book for implementation details or join the 'Eat That Frog WhatsApp Group' for ongoing support and to connect with the community."
        }
    ];

    return (
        <section id="faq" className="py-24 bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden">
            {/* Background gradients for visual depth, consistent with previous sections */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10"></div>
            <div className="absolute inset-0 z-0 opacity-20"
                 style={{
                     background: 'radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, transparent 70%)'
                 }}>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <FadeInWhenVisible>
                    <h2 className="text-4xl md:text-5xl font-black mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Frequently Asked Questions
                    </h2>
                </FadeInWhenVisible>

                <div className="max-w-3xl mx-auto text-left">
                    {faqs.map((faq, index) => (
                        <FadeInWhenVisible key={index} delay={index * 100}>
                            <div className="mb-6 p-6 rounded-xl bg-gray-900 border border-gray-700/50 shadow-lg
                                        transition-all duration-300 transform hover:scale-[1.02] hover:border-purple-500/70 hover:shadow-purple-500/10">
                                <h3
                                    className="text-xl font-bold text-white mb-2 cursor-pointer flex justify-between items-center
                                             bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent"
                                    onClick={() => toggleFAQ(index)} // Add onClick handler
                                >
                                    {faq.question}
                                    {/* Plus/Minus icon for accordion */}
                                    <span className="text-white text-2xl ml-4">
                                        {activeIndex === index ? '−' : '+'}
                                    </span>
                                </h3>
                                {/* Conditionally render answer with transition */}
                                <p className={`text-gray-300 leading-relaxed transition-all duration-500 ease-in-out overflow-hidden
                                              ${activeIndex === index ? 'max-h-screen mt-4' : 'max-h-0'}`}>
                                    {faq.answer}
                                </p>
                            </div>
                        </FadeInWhenVisible>
                    ))}
                </div>
            </div>
        </section>
    );
};
