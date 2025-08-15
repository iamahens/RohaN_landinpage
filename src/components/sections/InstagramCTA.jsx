import React from 'react';
import { FadeInWhenVisible } from '../common/FadeInWhenVisible';
import instaScreenshot from '/images/instascreenshot.png'; // <-- Add your screenshot in the assets folder

// Instagram Icon SVG
const InstagramIcon = () => (
    <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.05 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm5.25-9.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" clipRule="evenodd" />
    </svg>
);

const InstagramCTA = () => {
    return (
        <>
            <style>
                {`
                    @keyframes pulse-glow {
                        0%, 100% {
                            box-shadow: 0 0 20px rgba(234, 88, 12, 0.4), 0 0 30px rgba(234, 88, 12, 0.3);
                        }
                        50% {
                            box-shadow: 0 0 40px rgba(234, 88, 12, 0.7), 0 0 60px rgba(234, 88, 12, 0.5);
                        }
                    }
                    .cta-button-animated {
                        animation: pulse-glow 3s infinite ease-in-out;
                    }
                `}
            </style>

            <section className="py-20 px-4 bg-gray-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-900/5 to-red-900/5"></div>
                <div className="container mx-auto text-center relative z-10">
                    
                    <FadeInWhenVisible>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent drop-shadow-lg transition-all duration-500 transform hover:scale-105">
                            Don't Miss a Single Tip!
                        </h2>
                    </FadeInWhenVisible>

                    <FadeInWhenVisible delay={100}>
                        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto transition-all duration-500 transform hover:scale-105">
                            Follow the journey on Instagram for daily insights, behind-the-scenes content, and live Q&A sessions.
                        </p>
                    </FadeInWhenVisible>

                    {/* Instagram Screenshot */}
                    <FadeInWhenVisible delay={200}>
                        <img
                            src={instaScreenshot}
                            alt="Instagram Profile Screenshot"
                            className="mx-auto rounded-lg shadow-lg mb-6 w-72 md:w-96"
                        />
                    </FadeInWhenVisible>

                    {/* Follow Button */}
                    <FadeInWhenVisible delay={300}>
                        <a
                            href="https://www.instagram.com/viralrohan/?igsh=YTU5dWZyYXY2dDRs#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-4 px-10 rounded-full text-xl transition-all duration-300 transform hover:scale-110 active:scale-95 cta-button-animated"
                        >
                            <InstagramIcon />
                            Follow on Instagram
                        </a>
                    </FadeInWhenVisible>

                    {/* Optional: Embed a post */}
                    {/* <FadeInWhenVisible delay={400}>
                        <div dangerouslySetInnerHTML={{
                            __html: `<iframe src="https://www.instagram.com/p/POST_ID/embed" width="400" height="480" frameborder="0" scrolling="no" allowtransparency="true"></iframe>`
                        }}></div>
                    </FadeInWhenVisible> */}

                </div>
            </section>
        </>
    );
};

export default InstagramCTA;
