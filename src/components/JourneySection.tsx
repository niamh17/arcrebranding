"use client";

import { useEffect, useState, useRef } from "react";
import { Flag, Rocket, LineChart, Globe, Lightbulb } from "lucide-react";

const JourneySection = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const journeyData = [
    {
      year: "2022",
      title: "ARC Digital Canvas Founded",
      description: "Started our journey revolutionizing businesses through AI automation and intelligent workflow solutions.",
      icon: Flag,
      gradient: "from-[#FF4925] to-[#E63E1F]",
    },
    {
      year: "2023",
      title: "AI-Powered Marketing Suite Launched",
      description: "Introduced comprehensive AI-driven marketing automation tools, helping 50+ businesses scale their digital presence.",
      icon: Rocket,
      gradient: "from-[#FF4925] to-[#D6371B]",
    },
    {
      year: "2024",
      title: "100+ Clients & Advanced Chatbot Platform",
      description: "Reached 100+ satisfied clients and launched our AI chatbot platform, transforming customer engagement.",
      icon: LineChart,
      gradient: "from-[#E63E1F] to-[#FF4925]",
    },
    {
      year: "2025",
      title: "Global Expansion & AI Content Engine",
      description: "Expanding to UK and international markets with our revolutionary AI content generation system.",
      icon: Globe,
      gradient: "from-[#D6371B] to-[#FF4925]",
    },
    {
      year: "2026",
      title: "Enterprise AI Automation Suite",
      description: "Launching enterprise-grade AI automation platform for Fortune 500 companies.",
      icon: Lightbulb,
      gradient: "from-[#FF4925] to-[#E63E1F]",
    },
    {
      year: "2028",
      title: "AI Innovation Lab & Strategic Partnerships",
      description: "Establishing AI research lab and forming strategic partnerships with leading tech giants.",
      icon: Lightbulb,
      gradient: "from-[#E63E1F] to-[#FF4925]",
    },
    {
      year: "2030",
      title: "Leading Global AI Marketing Authority",
      description: "Becoming the world's most trusted AI automation and marketing company, serving 10,000+ businesses worldwide.",
      icon: Globe,
      gradient: "from-[#FF4925] to-[#E63E1F]",
    },
  ];

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !visibleItems.includes(index)) {
              setVisibleItems((prev) => [...prev, index]);
            }
          });
        },
        {
          threshold: 0.2,
        }
      );

      if (ref) {
        observer.observe(ref);
      }

      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section className="py-16 px-6 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-16 text-center"
          style={{
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif"
          }}
        >
          Our Journey
        </h2>
        <div className="relative">
          {/* Timeline Line */}
          <div 
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5"
            style={{
              background: 'linear-gradient(rgb(255, 73, 37), rgb(230, 62, 31), rgb(255, 73, 37))'
            }}
          />

          <div className="space-y-12">
            {journeyData.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;
              const isVisible = visibleItems.includes(index);

              return (
                <div
                  key={index}
                  ref={(el) => { itemRefs.current[index] = el; }}
                  className={`relative flex flex-col ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } gap-8 md:gap-12`}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'none' : 'translateY(20px)',
                    transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
                  }}
                >
                  {/* Timeline Node */}
                  <div 
                    className="absolute left-4 md:left-1/2 w-8 h-8 -translate-x-1/2"
                    style={{
                      transform: 'translateX(-50%)'
                    }}
                  >
                    <div className={`w-full h-full rounded-full bg-gradient-to-r ${item.gradient} p-0.5`}>
                      <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                        <Icon className="w-4 h-4 text-[#FF4925]" />
                      </div>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`flex-1 ${
                      isEven ? 'md:text-right' : 'md:text-left'
                    } pl-16 md:pt-6 md:pb-6 ${
                      isEven
                        ? 'md:pl-[calc(50%_+_4rem)] md:pr-6'
                        : 'md:pr-[calc(50%_+_4rem)] md:pl-6'
                    }`}
                  >
                    <div className="group relative">
                      {/* Glow Effect */}
                      <div 
                        className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-300`}
                      />
                      
                      {/* Card */}
                      <div className="relative bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10 hover:border-[#FF4925]/30 transition-all duration-300">
                        <span 
                          className={`text-3xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}
                          style={{
                            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif"
                          }}
                        >
                          {item.year}
                        </span>
                        <h3 
                          className="text-xl font-bold text-white mt-2 mb-3"
                          style={{
                            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif"
                          }}
                        >
                          {item.title}
                        </h3>
                        <p 
                          className="text-gray-300"
                          style={{
                            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif"
                          }}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
