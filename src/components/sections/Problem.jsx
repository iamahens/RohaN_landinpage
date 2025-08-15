import React from 'react';
import { FadeInWhenVisible } from '../common/FadeInWhenVisible';

// Function to shuffle an array randomly
const shuffleArray = (array) => {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
};

export const Problem = () => {
    // Define the problems
    const problems = [
        { emoji: "🤔", text: "Niche not clear" },
        { emoji: "😔", text: "Scripting takes hours of time" },
        { emoji: "😟", text: "Professional  shoot is Expensive" },
        { emoji: "💪", text: "Good editors are rare" },
        { emoji: "📊", text: "social media feels like a full time job" },
    ];

    // Shuffle the problems array to display them in a random order
    const shuffledProblems = shuffleArray([...problems]); // Create a shallow copy to avoid mutating the original array

    // Split the problems for arrangement: first 3 and last 2
    const firstThreeProblems = shuffledProblems.slice(0, 3);
    const lastTwoProblems = shuffledProblems.slice(3);

    return (
        <section id="problem" className="py-24 bg-gray-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-900/5 to-red-900/5"></div>
            <div className="container mx-auto px-6 text-center relative z-10">
                <FadeInWhenVisible>
                    <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                       5 reasons you haven’t build your brand till now
                    </h2>
                    <p className="text-xl text-gray-400 mb-16 max-w-3xl mx-auto">
                        If you recognize yourself in these scenarios, you're not alone.
                    </p>
                </FadeInWhenVisible>

                {/* Grid for the first three problems */}
                <div className="grid md:grid-cols-3 gap-4 sm:gap-6 max-w-none md:max-w-6xl mx-auto mb-6">
                    {firstThreeProblems.map((problem, index) => (
                        <FadeInWhenVisible key={index} delay={index * 100}>
                            {/* Adjusted padding for smaller screens: p-4 on mobile, p-6 on sm and up */}
                            <div className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 p-4 sm:p-6 rounded-xl border border-orange-700/50 hover:border-orange-500/70 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/15 group hover:-translate-y-1">
                                <div className="flex items-center gap-2 sm:gap-4"> {/* Adjusted inner gap for responsiveness */}
                                    <span className="text-2xl flex-shrink-0">{problem.emoji}</span>
                                    {/* Added classes for single-line text with ellipsis */}
                                    <p className="text-white font-medium text-left whitespace-nowrap overflow-hidden text-ellipsis min-w-0">
                                        {problem.text}
                                    </p>
                                </div>
                            </div>
                        </FadeInWhenVisible>
                    ))}
                </div>

                {/* Grid for the last two problems, centered */}
                {lastTwoProblems.length > 0 && (
                    <div className="grid md:grid-cols-2 gap-4 sm:gap-6 max-w-none md:max-w-4xl mx-auto"> {/* Adjusted max-w and gap for responsiveness */}
                        {lastTwoProblems.map((problem, index) => (
                            <FadeInWhenVisible key={index + 3} delay={(index + 3) * 100}> {/* Adjust delay for continuity */}
                                {/* Adjusted padding for smaller screens: p-4 on mobile, p-6 on sm and up */}
                                <div className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 p-4 sm:p-6 rounded-xl border border-orange-700/50 hover:border-orange-500/70 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/15 group hover:-translate-y-1">
                                    <div className="flex items-center gap-2 sm:gap-4"> {/* Adjusted inner gap for responsiveness */}
                                        <span className="text-2xl flex-shrink-0">{problem.emoji}</span>
                                        {/* Added classes for single-line text with ellipsis */}
                                        <p className="text-white font-medium text-left whitespace-nowrap overflow-hidden text-ellipsis min-w-0">
                                            {problem.text}
                                        </p>
                                    </div>
                                </div>
                            </FadeInWhenVisible>
                        ))}
                    </div>
                )}

                <div className="mt-16">
                    <a
                        href="https://chat.whatsapp.com/BSPLbsvl9mW5ptGXl4pPZv?mode=ac_t"
                        className="inline-block px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-lg hover:from-orange-600 hover:to-red-600 transition-colors duration-300 transform hover:scale-105"
                    >
                        Join the Community Now
                    </a>
                </div>
            </div>
        </section>
    );
};
