import { realityConfig } from "./config";

import { useRef } from "react";
import gsap from "../../lib/gsap";
import { useScene } from "../../hooks/useScene";

import RealityMoment from "./components/RealityMoment";

export default function Scene03Reality() {
  const sectionRef = useRef(null);

  const labelRef = useRef(null);

  const titleRef = useRef(null);

  const subtitleRef = useRef(null);

  useScene(() => {
    gsap.set([labelRef.current, titleRef.current, subtitleRef.current], {
      opacity: 0,
    });

    gsap.fromTo(
      labelRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.4,
        scrollTrigger: {
          trigger: labelRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    );

    gsap.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      },
    );

    gsap.fromTo(
      subtitleRef.current,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      },
    );
  }, sectionRef);
  return (
    <section ref={sectionRef} className="min-h-screen bg-[#0b0b0b] text-white">
      <div className="max-w-6xl mx-auto py-32 px-6">
        <p ref={labelRef} className="uppercase tracking-[0.3em] text-gray-500">
          {realityConfig.label}
        </p>

        <h2
          ref={titleRef}
          className="mt-8 text-6xl md:text-7xl font-bold leading-tight"
        >
          {realityConfig.title}
        </h2>

        <p ref={subtitleRef} className="mt-8 text-2xl text-gray-400 max-w-3xl">
          {realityConfig.subtitle}
        </p>

        <div className="mt-40">
          {realityConfig.realities.map((reality, index) => (
            <RealityMoment
              key={index}
              title={reality.title}
              text={reality.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
