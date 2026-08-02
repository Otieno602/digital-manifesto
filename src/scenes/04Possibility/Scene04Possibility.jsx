import { possibilityConfig } from "./config";

import { useRef } from "react";
import gsap from "../../lib/gsap";
import { useScene } from "../../hooks/useScene";
import PossibilityMoment from "./components/PossibilityMoment";

export default function Scene04Possibility() {
  const sectionRef = useRef(null);

  const labelRef = useRef(null);

  const titleRef = useRef(null);

  const subtitleRef = useRef(null);

  const backgroundRef = useRef(null);

  const closingRef = useRef(null);

  useScene(() => {
    gsap.fromTo(
      labelRef.current,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power1.out",
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
        y: 35,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      },
    );

    gsap.fromTo(
      backgroundRef.current,
      {
        backgroundColor: "#111827",
      },
      {
        backgroundColor: "#1b2b3a",
        ease: "none",
        scrollTrigger: {
          trigger: backgroundRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      },
    );

    gsap.fromTo(
      subtitleRef.current,
      {
        opacity: 0,
        y: 25,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power1.out",
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      },
    );

    gsap.fromTo(
      closingRef.current,
      {
        opacity: 0,
        y: 25,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power1.out",
        scrollTrigger: {
          trigger: closingRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    );
  }, sectionRef);

  return (
    <section ref={backgroundRef} className="min-h-screen text-white">
      <div className="max-w-6xl mx-auto py-32 px-6">
        <p
          ref={labelRef}
          className="uppercase tracking-[0.3em] text-emerald-300"
        >
          {possibilityConfig.label}
        </p>

        <h2
          ref={titleRef}
          className="mt-8 text-6xl md:text-7xl font-bold leading-tight"
        >
          {possibilityConfig.title}
        </h2>

        <p ref={subtitleRef} className="mt-8 text-2xl text-gray-300 max-w-3xl">
          {possibilityConfig.subtitle}
        </p>

        <div className="mt-40 max-w-4xl">
          {possibilityConfig.pillars.map((pillar, index) => (
            <PossibilityMoment
              key={index}
              title={pillar.title}
              text={pillar.text}
              index={index}
            />
          ))}
        </div>

        <div className="mt-40 pb-40">
          <p
            ref={closingRef}
            className="text-center text-4xl md:text-5xl text-white leading-relaxed max-w-4xl mx-auto"
          >
            {possibilityConfig.closing}
          </p>
        </div>
      </div>
    </section>
  );
}
