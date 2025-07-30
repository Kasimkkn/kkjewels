import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const AnimatedText = ({ children, className, delay = 0 }) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(textRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          delay: delay,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 85%", // When the top of the element is 85% down the viewport
            toggleActions: "play none none none", // Play animation once
          }
        }
      );
    }
  }, [delay]);

  return (
    <div ref={textRef} className={className}>
      {children}
    </div>
  );
};

export default AnimatedText;