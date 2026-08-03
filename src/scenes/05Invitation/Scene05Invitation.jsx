import { invitationConfig } from "./config";
import { useRef } from "react";
import gsap from "../../lib/gsap";
import { useScene } from "../../hooks/useScene";

export default function Scene05Invitation() {
  const sectionRef = useRef(null);

  const titleRef = useRef(null);

  const subtitleRef = useRef(null);

  const buttonsRef = useRef(null);

  const closingRef = useRef(null);

  useScene(() => {
    gsap.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: 25,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      },
    );
  }, sectionRef);
  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-[#1b2b3a] text-white flex items-center"
    >
      <div className="max-w-5xl mx-auto text-center px-6">
        <h2
          ref={titleRef}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          {invitationConfig.title}
        </h2>

        <p ref={subtitleRef} className="mt-10 text-2xl text-gray-300">
          {invitationConfig.subtitle}
        </p>

        <p
          ref={closingRef}
          className="mt-32 text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed"
        >
          {invitationConfig.closing}
        </p>

        <div
          ref={buttonsRef}
          className="mt-14 flex flex-col sm:flex-row justify-center gap-6"
        >
          <button className="rounded-full bg-white text-black px-8 py-4 mb-8 font-medium hover:scale-105 transition">
            Read the Manifesto
          </button>

          <button className="rounded-full border border-white/40 px-8 py-4 mb-8 hover:bg-white hover:text-black transition">
            Walk With Us
          </button>
        </div>
      </div>
    </section>
  );
}
