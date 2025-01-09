import React, { useEffect, useState, useRef } from "react";

const NumberCounter = ({ endValue, duration }) => {
  const [value, setValue] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCounting();
        }
      },
      { threshold: 0.5 } // Adjust threshold for when the element is considered "in view"
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  const startCounting = () => {
    let start = 0;
    setValue(0); // Reset value before starting

    const increment = endValue / (duration / 10); // Calculate increment per interval

    const timer = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        clearInterval(timer);
        start = endValue;
      }
      setValue(Math.floor(start)); // Update value
    }, 10);
  };

  return (
    <div
      ref={counterRef}
      style={{
        fontSize: "2rem",
        fontWeight: "bold",
        textAlign: "center",
      }}
    >
      {value}+
    </div>
  );
};


export default NumberCounter;
