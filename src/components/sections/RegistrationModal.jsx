import React, { useState, useEffect } from 'react';

// Import Firebase modules
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { getAuth, signInAnonymously } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

// --- UPDATED FIREBASE CONFIGURATION ---
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBs_zhwBxeyw8gJEVvcw8teHGMThfELGqE",
  authDomain: "user-data-a81e6.firebaseapp.com",
  projectId: "user-data-a81e6",
  storageBucket: "user-data-a81e6.firebasestorage.app",
  messagingSenderId: "338691537326",
  appId: "1:338691537326:web:6377b8c64acfa080b1703f",
  measurementId: "G-RE35SEL9MD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
// Initialize Analytics
const analytics = getAnalytics(app);

// Sign in the user anonymously
const signIn = async () => {
    try {
        await signInAnonymously(auth);
    } catch (error) {
        console.error("Error signing in anonymously: ", error);
    }
};
signIn();


const RegistrationModal = ({ isOpen, onClose }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !email || !phone) {
            setError('Please fill in all fields.');
            return;
        }
        setIsSubmitting(true);
        setError('');

        try {
            // Path to your Firestore collection
            const registrationsCollectionRef = collection(db, 'registrations');
            await addDoc(registrationsCollectionRef, {
                name,
                email,
                phone,
                registeredAt: serverTimestamp(),
            });
            setIsSubmitted(true);
        } catch (err) {
            console.error("Error adding document: ", err);
            setError('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };
    
    // Reset form when modal is closed
    useEffect(() => {
        if (!isOpen) {
            setTimeout(() => {
                setIsSubmitted(false);
                setName('');
                setEmail('');
                setPhone('');
                setError('');
            }, 300); // Delay reset to allow for closing animation
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex justify-center items-center z-50 transition-opacity duration-300">
            <div className="bg-gray-800 text-white rounded-xl shadow-2xl p-8 w-full max-w-md m-4 relative transform transition-all duration-300 scale-100">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>

                {isSubmitted ? (
                    <div className="text-center">
                        <svg className="w-16 h-16 mx-auto mb-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <h2 className="text-2xl font-bold mb-3">Registration Successful!</h2>
                        <p className="text-gray-300 mb-6">Thank you for registering. Click the link below to join our WhatsApp community.</p>
                        <a 
                            href="https://wa.me/910000000000" // <-- IMPORTANT: Replace with your WhatsApp number
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-block bg-green-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-600 transition-colors"
                        >
                            Join on WhatsApp
                        </a>
                    </div>
                ) : (
                    <>
                        <h2 className="text-3xl font-bold text-center mb-2">Register for the Webinar</h2>
                        <p className="text-center text-gray-400 mb-6">Secure your spot now!</p>
                        <form onSubmit={handleSubmit} noValidate>
                            <div className="space-y-4">
                                <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 focus:border-yellow-400 focus:ring-yellow-400 focus:outline-none" required />
                                <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 focus:border-yellow-400 focus:ring-yellow-400 focus:outline-none" required />
                                <input type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 focus:border-yellow-400 focus:ring-yellow-400 focus:outline-none" required />
                            </div>
                            {error && <p className="text-red-400 text-sm mt-4 text-center">{error}</p>}
                            <button type="submit" disabled={isSubmitting} className="w-full mt-6 bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-500 transition-all duration-300 disabled:bg-gray-500">
                                {isSubmitting ? 'Registering...' : 'Register and Join'}
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default RegistrationModal;
