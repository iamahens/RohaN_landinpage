import React from 'react';
import { FadeInWhenVisible } from '../common/FadeInWhenVisible'; // Assuming this component is available

export const VideoTestimonialsSection = () => {
    // Data for the video testimonials
    // You can replace the 'source' values with paths to your local video files (e.g., '/videos/my-testimonial-1.mp4')
    // Or external video URLs if you prefer.
    const testimonials = [
        {
            name: "Your Testimonial 1",
            source: "", // <--- REPLACE WITH YOUR VIDEO FILE PATH (e.g., '/videos/my-testimonial-1.mp4')
            placeholderImage: "https://placehold.co/300x450/1a202c/ffffff?text=Add+Your+Video+1" // Adjusted placeholder size
        },
        {
            name: "Your Testimonial 2",
            source: "", // <--- REPLACE WITH YOUR VIDEO FILE PATH (e.g., '/videos/my-testimonial-2.mp4')
            placeholderImage: "https://placehold.co/300x450/1a202c/ffffff?text=Add+Your+Video+2" // Adjusted placeholder size
        },
        {
            name: "Your Testimonial 3",
            source: "", // <--- REPLACE WITH YOUR VIDEO FILE PATH (e.g., '/videos/my-testimonial-3.mp4')
            placeholderImage: "https://placehold.co/300x450/1a202c/ffffff?text=Add+Your+Video+3" // Adjusted placeholder size
        }
    ];

    return (
        <section id="video-testimonials" className="py-24 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
            {/* Background gradients for visual depth, consistent with previous sections */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-900/5 to-red-900/5"></div>
            <div className="absolute inset-0 z-0 opacity-20"
                 style={{
                     background: 'radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, transparent 70%)'
                 }}>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <FadeInWhenVisible>
                    <h2 className="text-4xl md:text-5xl font-black mb-12 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                        Video Testimonials
                    </h2>
                </FadeInWhenVisible>

                {/* Adjusted max-w to make the grid of videos more compact */}
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {testimonials.map((video, index) => (
                        <FadeInWhenVisible key={index} delay={index * 150}>
                            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-700/50 transform hover:scale-105 transition-all duration-300 group">
                                {/* Adjusted padding-bottom for a smaller frame height (9:16 aspect ratio) */}
                                <div className="relative w-full h-0 pb-[150%]"> 
                                    {video.source ? (
                                        <video
                                            src={video.source}
                                            controls
                                            className="absolute inset-0 w-full h-full object-cover"
                                            // Add onError to handle broken video links
                                            onError={(e) => {
                                                console.error("Video loading error:", e);
                                                e.target.onerror = null; // Prevent infinite loop
                                                e.target.src = video.placeholderImage; // Fallback to placeholder image
                                            }}
                                        >
                                            Your browser does not support the video tag.
                                        </video>
                                    ) : (
                                        // Placeholder image if no video source is provided
                                        <img
                                            src={video.placeholderImage}
                                            alt={video.name}
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />
                                    )}

                                    {/* Play button overlay for videos (mockup) - appears on hover if a source is present */}
                                    {video.source && (
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                                <div className="p-4">
                                    <p className="text-lg font-semibold text-white">{video.name}</p>
                                    <p className="text-sm text-gray-400">Owned Media</p>
                                </div>
                            </div>
                        </FadeInWhenVisible>
                    ))}
                </div>
            </div>
        </section>
    );
};
