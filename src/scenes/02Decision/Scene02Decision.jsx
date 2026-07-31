import { useRef } from "react";

import gsap from "../../lib/gsap";
import { useScene } from "../../hooks/useScene";

import { decisionConfig } from "./config";
import memoryImage from "./assets/memory.png";

export default function Scene02Decision() {
  const sectionRef = useRef(null);
  const introRef = useRef(null);

  useScene(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "top 30%",
        scrub: true,
      },
    });

    tl.fromTo(
      introRef.current,
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        ease: "none",
      },
    );
  }, sectionRef);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-[#111111] text-white py-32"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Intro */}
        <div ref={introRef} className="text-center mb-32">
          <p className="uppercase tracking-[0.3em] text-gray-500 mb-6">
            The Decision
          </p>

          <h2 className="text-5xl md:text-7xl font-bold leading-tight">
            {decisionConfig.introTitle}
          </h2>

          <p className="mt-8 text-2xl text-gray-400">
            {decisionConfig.introSubtitle}
          </p>
        </div>

        {/* Story */}
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Left */}
          <div className="space-y-6">
            {decisionConfig.story.map((paragraph, index) => (
              <p key={index} className="text-lg leading-9 text-gray-300">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Right */}
          <div className="rounded-3xl overflow-hidden shadow-2xl lg:translate-y-12">
            <img
              src={memoryImage}
              alt="Community memory"
              className="w-full h-\[600px] object-cover"
            />
          </div>
        </div>

        {/* Final Statement */}
        <div className="text-center mt-40">
          <p className="text-6xl md:text-8xl font-bold leading-tight">
            {decisionConfig.finalStatement}
          </p>
        </div>
      </div>
    </section>
  );
}
