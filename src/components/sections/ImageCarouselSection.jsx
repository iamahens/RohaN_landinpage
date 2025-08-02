import React from 'react';
import { FadeInWhenVisible } from '../common/FadeInWhenVisible'; // Assuming this component is available

export const ImageCarouselSection = () => {
    // Original images
    const originalImages = [
        { src: "/images/gallery1.jpeg", alt: "Group Photo 1" },
        { src: "/images/gallery2.jpeg", alt: "Group Photo 2" },
        { src: "/images/gallery3.jpeg", alt: "Group Photo 3" },
        { src: "/images/gallery4.jpeg", alt: "Group Photo 4" },
        { src: "/images/gallery5.jpeg", alt: "Group Photo 1" },
        { src: "/images/gallery6.jpeg", alt: "Group Photo 2" },
        { src: "/images/gallery7.jpeg", alt: "Group Photo 3" },
        { src: "/images/gallery8.jpeg", alt: "Group Photo 4" },
        { src: "/images/gallery9.jpeg", alt: "Group Photo 1" },
        { src: "/images/gallery10.jpeg", alt: "Group Photo 2" },
        { src: "/images/gallery11.jpeg", alt: "Group Photo 3" },
        { src: "/images/gallery12.jpeg", alt: "Group Photo 4" },
        { src: "/images/gallery13.jpeg", alt: "Group Photo 1" },
        { src: "/images/gallery14.jpeg", alt: "Group Photo 2" },
        { src: "/images/gallery15.jpeg", alt: "Group Photo 3" },
        { src: "/images/gallery16.jpeg", alt: "Group Photo 4" },
        
    ];

    // Duplicate images for seamless looping
    const images = [...originalImages, ...originalImages];

    const CarouselRow = ({ direction = 'left', images, animationDuration = '100s' }) => {
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
                                {/* Optional overlay for hover effect */}
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
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                
                @keyframes scroll-right {
                    0% {
                        transform: translateX(-50%);
                    }
                    100% {
                        transform: translateX(0);
                    }
                }
                
                .animate-scroll-left {
                    animation: scroll-left 50s linear infinite;
                }
                
                .animate-scroll-right {
                    animation: scroll-right 100s linear infinite;
                }
                
                /* Pause animation on hover */
                .carousel-container:hover .animate-scroll-left,
                .carousel-container:hover .animate-scroll-right {
                    animation-play-state: paused;
                }
            `}</style>

            <section id="image-carousel" className="py-24 bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden">
                {/* Background gradients for visual depth */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10"></div>
                <div className="absolute inset-0 z-0 opacity-20"
                     style={{
                         background: 'radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, transparent 70%)'
                     }}>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <FadeInWhenVisible>
                        <h2 className="text-4xl md:text-5xl font-black mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Our Community in Action
                        </h2>
                    </FadeInWhenVisible>

                    <div className="carousel-container">
                        {/* First Carousel - Moving Left */}
                        <CarouselRow 
                            direction="left" 
                            images={images} 
                            animationDuration="30s"
                        />

                        {/* Second Carousel - Moving Right */}
                        <CarouselRow 
                            direction="right" 
                            images={images} 
                            animationDuration="25s"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};