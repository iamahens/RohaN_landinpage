import React, { useEffect } from 'react';
import { FadeInWhenVisible } from '../common/FadeInWhenVisible'; // Assuming this component is available

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export const TestimonialCarouselSection = () => {
    // Data for the screenshot testimonials
    const testimonials = [
        {
            name: "Aqil Testimonial",
            source: "https://placehold.co/300x500/1a202c/ffffff?text=Aqil+Testimonial", // Replace with actual screenshot URL
            platform: "Owned Media"
        },
        {
            name: "Sweta Testimonial",
            source: "https://placehold.co/300x500/1a202c/ffffff?text=Sweta+Testimonial", // Replace with actual screenshot URL
            platform: "Owned Media"
        },
        {
            name: "Kushagra Mittal Testimonial",
            source: "https://placehold.co/300x500/1a202c/ffffff?text=Kushagra+Mittal", // Replace with actual screenshot URL
            platform: "Owned Media"
        },
        {
            name: "Roshni Testimonial",
            source: "https://placehold.co/300x500/1a202c/ffffff?text=Roshni+Testimonial", // Example additional testimonial
            platform: "Owned Media"
        },
        {
            name: "Rutaja Testimonial",
            source: "https://placehold.co/300x500/1a202c/ffffff?text=Rutaja+Testimonial", // Example additional testimonial
            platform: "Owned Media"
        }
    ];

    return (
        <section id="testimonial-carousel" className="py-24 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
            {/* Background gradients for visual depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-900/5 to-red-900/5"></div>
            <div className="absolute inset-0 z-0 opacity-20"
                 style={{
                     background: 'radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, transparent 70%)'
                 }}>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <FadeInWhenVisible>
                    <h2 className="text-4xl md:text-5xl font-black mb-12 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                        Testimonials
                    </h2>
                </FadeInWhenVisible>

                <div className="max-w-7xl mx-auto">
                    <Swiper
                        spaceBetween={30} // Space between slides
                        slidesPerView={1} // Default for mobile
                        loop={true} // Enable continuous loop
                        autoplay={{
                            delay: 2500, // Autoplay delay in ms
                            disableOnInteraction: false, // Continue autoplay after user interaction
                        }}
                        pagination={{
                            clickable: true, // Enable clickable pagination dots
                        }}
                        navigation={true} // Enable navigation arrows
                        modules={[Autoplay, Pagination, Navigation]}
                        breakpoints={{
                            640: {
                                slidesPerView: 2, // 2 slides on small screens (sm)
                            },
                            768: {
                                slidesPerView: 3, // 3 slides on medium screens (md)
                            },
                            1024: {
                                slidesPerView: 3, // 3 slides on large screens (lg)
                            },
                            1280: {
                                slidesPerView: 4, // 4 slides on extra large screens (xl)
                            },
                        }}
                        className="mySwiper" // Custom class for Swiper instance
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <FadeInWhenVisible delay={index * 100}>
                                    <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-700/50 transform hover:scale-105 transition-all duration-300 group cursor-pointer">
                                        <div className="relative w-full h-0 pb-[150%]"> {/* Aspect ratio for vertical screenshots */}
                                            <img
                                                src={testimonial.source}
                                                alt={testimonial.name}
                                                className="absolute inset-0 w-full h-full object-cover"
                                                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/300x500/1a202c/ffffff?text=Image+Unavailable"; }}
                                            />
                                            {/* Optional overlay for play button or hover effect, if needed */}
                                            <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                {/* You can add a play icon here if the screenshot implies a video, or just a general hover effect */}
                                                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M8 5v14l11-7z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <p className="text-lg font-semibold text-white">{testimonial.name}</p>
                                            <p className="text-sm text-gray-400">{testimonial.platform}</p>
                                        </div>
                                    </div>
                                </FadeInWhenVisible>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};
