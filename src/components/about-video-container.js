"use client";
import React, { useEffect, useRef } from 'react';

export default function AboutVideoContainer() {
    const videoRef = useRef(null);

    useEffect(() => {
        if (typeof window === 'undefined') return; // Ensure code runs only in the browser

        // Function to check if element is in viewport
        const isElementInViewport = (el) => {
            if (!el) return false; // Return false if el is null
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || window.clientHeight) &&
                rect.right <= (window.innerWidth || window.clientWidth)
            );
        };

        // Function to handle autoplay when element is in viewport
        const handleAutoplay = () => {
            const video = videoRef.current;
            if (video && isElementInViewport(video) && video.paused) {
                video.play().catch(error => console.error('Autoplay error:', error));
            }
        };

        // Event listener for scroll to handle autoplay
        const scrollHandler = () => {
            handleAutoplay();
        };

        // Attach scroll event listener
        window.addEventListener('scroll', scrollHandler);

        // Initial check for autoplay when component mounts
        handleAutoplay();

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    }, []);

    return (
        <div className="about-video position-relative">
            <video
                ref={videoRef}
                className="w-100 h-100"
                src="assets/video/0624.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
            />
        </div>
    );
}
