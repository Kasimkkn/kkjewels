import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const AnimatedText = ({ children, className, delay = 0 }) => {
  const textRef = useRef(null);
  const charsRef = useRef([]);

  useEffect(() => {
    if (textRef.current) {
      // Clear previous animations to prevent duplicates on re-renders
      gsap.killTweensOf(charsRef.current);

      gsap.fromTo(charsRef.current,
        { opacity: 0, y: 20 }, // Start slightly below and invisible
        {
          opacity: 1,
          y: 0,
          duration: 0.5, // Duration for each character
          ease: "power3.out",
          stagger: 0.03, // Stagger delay for typing effect
          delay: delay, // Overall delay for the animation to start
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 85%", // When the top of the element is 85% down the viewport
            toggleActions: "play none none none", // Play animation once
          }
        }
      );
    }
  }, [children, delay]); // Re-run effect if children or delay changes

  // Split the text into characters and wrap each in a span
  const characters = children.toString().split('');

  return (
    <div ref={textRef} className={className} style={{ display: 'inline-block' }}> {/* Use inline-block to maintain text flow */}
      {characters.map((char, index) => (
        <span
          key={index} // Using index as key is acceptable for static text that doesn't reorder
          ref={el => charsRef.current[index] = el}
          style={{ display: 'inline-block', whiteSpace: 'pre' }} // Keep spaces and allow individual animation
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default AnimatedText;