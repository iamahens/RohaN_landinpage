import React, { useState, useEffect, useRef } from 'react';

// Custom hook to detect when an element is in view
const useInView = (options) => {
    const [isInView, setIsInView] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
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

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, options]);

    return [ref, isInView];
};


// A generic icon component for contact details
const ContactIcon = ({ children }) => (
    <div className="w-16 h-16 bg-yellow-400/10 text-yellow-400 rounded-full flex items-center justify-center mb-4">
        {children}
    </div>
);

// Social Media Icons
const SocialIcon = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-yellow-400 text-black rounded-full flex items-center justify-center hover:bg-yellow-500 transition-all duration-300 transform hover:scale-110">
        {children}
    </a>
);

// New component for individual contact details to handle their own animations
const ContactDetail = ({ detail, index }) => {
    const [detailRef, isVisible] = useInView({ threshold: 0.5 });
    return (
        <div 
            ref={detailRef}
            className={`flex flex-col items-center transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${index * 150}ms` }}
        >
            <ContactIcon>{detail.icon}</ContactIcon>
            <p className="text-gray-300">{detail.info}</p>
        </div>
    );
};


const ContactSection = () => {
    const [titleRef, isTitleVisible] = useInView({ threshold: 0.5 });
    const [socialRef, isSocialVisible] = useInView({ threshold: 0.5 });

    const contactDetails = [
        {
            icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
            info: "+918023445577"
        },
        {
            icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
            info: "Laxmi Nagar, Delhi"
        },
        {
            icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
            info: "rohanagrahari16@gmail.com"
        }
    ];

    return (
        <div className="bg-[#0a0a14] relative py-24 px-4 overflow-hidden">
            <div className="absolute inset-0 z-0 moving-hue">
                <div className="absolute inset-0 bg-transparent" style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`, backgroundSize: '40px 40px' }}></div>
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                    <div className="absolute -top-1/4 left-1/4 w-1/2 h-1/2 bg-yellow-400/10 rounded-full filter blur-3xl opacity-50 aurora-shape"></div>
                    <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-500/10 rounded-full filter blur-3xl opacity-50 aurora-shape" style={{animationDelay: '3s', animationDuration: '15s'}}></div>
                </div>
            </div>
            <div ref={titleRef} className="container mx-auto text-center relative z-10">
                <p className={`text-yellow-400 font-semibold mb-2 transition-all duration-700 ${isTitleVisible ? 'opacity-100' : 'opacity-0'}`}>OFFICIAL SOCIAL MEDIA</p>
                <h2 className={`text-4xl text-white font-bold mb-16 transition-all duration-700 delay-200 ${isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>Connect with Me</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    {contactDetails.map((detail, index) => (
                        <ContactDetail key={index} detail={detail} index={index} />
                    ))}
                </div>

                <div ref={socialRef} className={`flex justify-center space-x-6 transition-all duration-700 delay-500 ${isSocialVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <SocialIcon href="#"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg></SocialIcon>
                    <SocialIcon href="#"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg></SocialIcon>
                    <SocialIcon href="https://www.instagram.com/viralrohan?igsh=dXZpN2N0cjg5Zjls&utm_source=qr"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.585.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.415 2.175 8.796 2.163 12 2.163zm0 1.885c-3.144 0-3.483.012-4.698.068-2.612.119-3.766 1.268-3.885 3.885-.056 1.215-.068 1.554-.068 4.698s.012 3.483.068 4.698c.119 2.612 1.273 3.766 3.885 3.885 1.215.056 1.554.068 4.698.068s3.483-.012 4.698-.068c2.612-.119 3.766-1.268 3.885-3.885.056-1.215.068-1.554.068-4.698s-.012-3.483-.068-4.698c-.119-2.612-1.273-3.766-3.885-3.885-1.215-.056-1.554-.068-4.698-.068zm0 3.19c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5zm0 8.115c-1.724 0-3.115-1.391-3.115-3.115S10.276 8.885 12 8.885s3.115 1.391 3.115 3.115-1.391 3.115-3.115 3.115zM16.949 7.051a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" /></svg></SocialIcon>
                    <SocialIcon href="https://www.linkedin.com/in/rohan-agrahari-681555147?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></SocialIcon>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
