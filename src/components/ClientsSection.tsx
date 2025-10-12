"use client";

import { memo, useEffect, useState } from "react";

const ClientsSection = memo(() => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const animate = () => {
      setRotation((prev) => (prev + 0.1) % 360);
    };
    const interval = setInterval(animate, 16); // ~60fps
    return () => clearInterval(interval);
  }, []);

  // Array of trust logos (1-21)
  const logos = Array.from({ length: 21 }, (_, i) => `/trust${i + 1}.png`);

  // Create 21 arms positioned around the circle, one for each logo
  const arms = Array.from({ length: 21 }, (_, i) => ({
    rotation: i * (360 / 21), // 360/21 ≈ 17.14 degrees each
    logo: logos[i],
  }));

  return (
    <section className="relative pt-0 pb-12 md:pb-20 bg-black overflow-hidden" id="clients">
      <div className="relative w-full">
        <div className="relative flex flex-col items-center">
          {/* Spinning Circle with Images - Positioned higher to show only top half */}
          <div className="relative w-full h-[350px] md:h-[450px] mb-0 overflow-hidden">
            <div 
              className="absolute left-1/2 -top-[150px] md:-top-[400px] -translate-x-1/2 w-[1800px] h-[1800px] md:w-[2400px] md:h-[2400px]"
              style={{ 
                perspective: "1200px",
                transformStyle: "preserve-3d"
              }}
            >
              <div
                className="relative w-full h-full"
                style={{
                  willChange: "transform",
                  transform: `rotate(${rotation}deg)`,
                  transition: "none"
                }}
              >
                {arms.map((arm, index) => (
                  <div
                    key={index}
                    className="absolute top-1/2 left-1/2"
                    style={{
                      transform: `translate(-50%, -50%) rotate(${arm.rotation}deg)`,
                      transformOrigin: "center",
                    }}
                  >
                    <div
                      className="absolute"
                      style={{
                        top: "-55px",
                        left: "50%",
                        transform: `translateX(-50%) translateY(-600px)`,
                      }}
                    >
                      <div
                        className="w-[110px] h-[110px] rounded-full bg-white border-[6px] border-neutral-100 shadow-lg overflow-hidden"
                        style={{
                          boxShadow:
                            "rgba(108, 113, 128, 0.08) 0px 2px 4px 0px, rgba(108, 113, 128, 0.07) 0px 7px 7px 0px, rgba(108, 113, 128, 0.04) 0px 17px 10px 0px, rgba(108, 113, 128, 0.01) 0px 29px 12px 0px",
                        }}
                      >
                        <img
                          src={arm.logo}
                          alt="Client logo"
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Fade/Blur Mask - hides bottom half */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "linear-gradient(to bottom, transparent 0%, transparent 40%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0.9) 85%, rgb(0,0,0) 100%)"
              }}
            />
            
            {/* Side blur edges */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at center top, transparent 0%, transparent 50%, rgba(0,0,0,0.3) 80%, rgb(0,0,0) 100%)"
              }}
            />
          </div>

          {/* Content */}
          <div className="text-center space-y-6 max-w-4xl mx-auto relative z-10 px-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-white tracking-tight">
              <span className="inline-block">Companies</span>{" "}
              <span className="inline-block">We</span>{" "}
              <span className="inline-block">Worked</span>{" "}
              <span className="inline-block">With</span>
            </h2>

            {/* CTA Button */}
            <div className="flex justify-center pt-2">
              <a
                href="#book-a-call"
                className="group relative inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full border-4 border-neutral-100 shadow-lg hover:shadow-xl transition-all duration-300"
                style={{
                  boxShadow:
                    "rgba(108, 113, 128, 0.08) 0px 2px 4px 0px, rgba(108, 113, 128, 0.07) 0px 7px 7px 0px, rgba(108, 113, 128, 0.04) 0px 17px 10px 0px, rgba(108, 113, 128, 0.01) 0px 29px 12px 0px",
                }}
              >
                <div className="flex flex-col items-center">
                  <span className="text-sm font-semibold text-black">
                    Book a 15-min intro call
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-xs text-gray-500">Available now</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

ClientsSection.displayName = "ClientsSection";

export default ClientsSection;

