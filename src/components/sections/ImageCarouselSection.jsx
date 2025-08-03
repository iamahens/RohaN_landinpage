import React from 'react';
import { FadeInWhenVisible } from '../common/FadeInWhenVisible'; // Assuming this component is available

// Import your images from assets folder
import image1 from '/images/gallery1.jpeg';
import image2 from '/images/gallery2.jpeg';
import image3 from '/images/gallery3.jpeg';
import image4 from '/images/gallery4.jpeg';
import image5 from '/images/gallery5.jpeg';
import image6 from '/images/gallery6.jpeg';
import image7 from '/images/gallery7.jpeg';
import image8 from '/images/gallery8.jpeg';
import image9 from '/images/gallery9.jpeg';
import image10 from '/images/gallery10.jpeg';
import image11 from '/images/gallery11.jpeg';
import image12 from '/images/gallery12.jpeg';
import image13 from '/images/gallery13.jpeg';
import image14 from '/images/gallery14.jpeg';
import image15 from '/images/gallery15.jpeg';
import image16 from '/images/gallery16.jpeg';

export const ImageCarouselSection = () => {
    // 1. Create two separate arrays for the images.
    const firstRowOriginalImages = [
        { src: image1, alt: "Community Event 1" },
        { src: image2, alt: "Workshop Photo 2" },
        { src: image3, alt: "Team Building 3" },
        { src: image4, alt: "Conference Pic 4" },
        { src: image5, alt: "Group Photo 5" },
        { src: image6, alt: "Networking Session 6" },
        { src: image7, alt: "Project Showcase 7" },
        { src: image8, alt: "Volunteer Day 8" },
    ];

    const secondRowOriginalImages = [
        { src: image9, alt: "Hackathon Team 9" },
        { src: image10, alt: "Coding Challenge 10" },
        { src: image11, alt: "Guest Speaker 11" },
        { src: image12, alt: "Celebration 12" },
        { src: image13, alt: "Mentorship 13" },
        { src: image14, alt: "Collaboration 14" },
        { src: image15, alt: "Innovation Fair 15" },
        { src: image16, alt: "Annual Meetup 16" },
    ];

    // 2. Duplicate each list for seamless looping
    const imagesForFirstCarousel = [...firstRowOriginalImages, ...firstRowOriginalImages];
    const imagesForSecondCarousel = [...secondRowOriginalImages, ...secondRowOriginalImages];

    const CarouselRow = ({ direction = 'left', images, animationDuration = '30s' }) => {
        return (
            <div className="relative overflow-hidden mb-8">
                <div 
                    className={`flex gap-5 ${direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'}`}
                    style={{
                        animation: `scroll-${direction} ${animationDuration} linear infinite`,
                        width: 'max-content'
                    }}
                >
                    {images.map((image, index) => (
                        <div 
                            key={index}
                            className="flex-shrink-0 w-[300px]"
                        >
                            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-xl border border-gray-700/50 transform hover:scale-105 transition-all duration-300 group cursor-pointer">
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-[250px] object-cover rounded-xl"
                                    onError={(e) => { 
                                        e.target.onerror = null; 
                                        e.target.src="https://placehold.co/300x250/1a202c/ffffff?text=Image+Error"; 
                                    }}
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                                    <p className="text-white text-sm font-semibold">{image.alt}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <>
            {/* CSS Animations */}
            <style jsx>{`
                @keyframes scroll-left {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                
                @keyframes scroll-right {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
                
                .animate-scroll-left { animation: scroll-left 30s linear infinite; }
                .animate-scroll-right { animation: scroll-right 30s linear infinite; }
                
                .carousel-container:hover .animate-scroll-left,
                .carousel-container:hover .animate-scroll-right {
                    animation-play-state: paused;
                }
            `}</style>

            <section id="image-carousel" className="py-24 bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10"></div>
                <div className="absolute inset-0 z-0 opacity-20"
                     style={{ background: 'radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, transparent 70%)' }}>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <FadeInWhenVisible>
                        <h2 className="text-4xl md:text-5xl font-black mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Our Community in Action
                        </h2>
                    </FadeInWhenVisible>

                    <div className="carousel-container">
                        {/* 3. Pass the correct image list to each carousel */}
                        <CarouselRow 
                            direction="left" 
                            images={imagesForFirstCarousel} 
                            animationDuration="90s"
                        />
                        
                        <CarouselRow 
                            direction="right" 
                            images={imagesForSecondCarousel} 
                            animationDuration="110s"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};