import { useRef } from "react";

import gsap from "../../lib/gsap";
import { useScene } from "../../hooks/useScene";

import { decisionConfig } from "./config";
import memoryImage from "./assets/memory.png";

export default function Scene02Decision() {
  const sectionRef = useRef(null);
  const introRef = useRef(null);

  const labelRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const imageRef = useRef(null);
  const paragraphRefs = useRef([]);

  useScene(() => {
    gsap.set(titleRef.current, {
      opacity: 0,
    });

    gsap.set(subtitleRef.current, {
      opacity: 0,
    });

    gsap.set(imageRef.current, {
      opacity: 0,
      scale: 1.08,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=200%",
        scrub: true,
        pin: false,
      },
    });

    tl.to(labelRef.current, {
      opacity: 0,
      filter: "blur(8px)",
      ease: "none",
    });

    tl.fromTo(
      titleRef.current,
      {
        opacity: 0,
        filter: "blur(8px)",
      },
      {
        opacity: 1,
        filter: "blur(0px)",
        ease: "none",
      },
    );

    tl.to(titleRef.current, {
      opacity: 0,
      filter: "blur(8px)",
      ease: "none",
    });

    tl.fromTo(
      subtitleRef.current,
      {
        opacity: 0,
        filter: "blur(8px)",
      },
      {
        opacity: 1,
        filter: "blur(0px)",
        ease: "none",
      },
    );

    tl.to({}, { duration: 0.8 });

    tl.to(subtitleRef.current, {
      opacity: 0,
      filter: "blur(8px)",
      ease: "none",
    });

    tl.to({}, { duration: 0.5 });

    tl.to(imageRef.current, {
      opacity: 0.9,
      scale: 1,
      ease: "none",
    });

    gsap.to(imageRef.current, {
      scale: 1.02,
      ease: "none",
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top top",
        end: "bottom+=250% top",
        scrub: true,
      },
    });

    paragraphRefs.current.forEach((paragraph) => {
      gsap.fromTo(
        paragraph,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: paragraph,
            start: "top 75%",
            end: "center center",
            scrub: true,
          },
        },
      );
    });
  }, sectionRef);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-[#111111] text-white py-32"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Intro */}
        <div className="relative h-[200vh]">
          <div className="sticky top-0 h-screen flex items-center justify-center">
            {/* Everything inside here stays on screen */}
            <div className="relative w-full max-w-5xl mx-auto text-center">
              <p
                ref={labelRef}
                className="absolute inset-0 flex items-center justify-center uppercase tracking-[0.35em] text-gray-500 text-xl"
              >
                THE DECISION
              </p>

              <h2
                ref={titleRef}
                className="absolute inset-0 flex items-center justify-center text-5xl md:text-7xl font-bold leading-tight"
              >
                {decisionConfig.introTitle}
              </h2>

              <p
                ref={subtitleRef}
                className="absolute inset-0 flex items-center justify-center text-center text-2xl text-gray-400 px-6"
              >
                {decisionConfig.introSubtitle}
              </p>
            </div>
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto py-32">
          <div
            ref={imageRef}
            className="sticky top-0 h-screen flex items-center justify-center"
          >
            <img
              src={memoryImage}
              alt="Community memory"
              className="w-full max-w-5xl rounded-3xl shadow-2xl object-cover"
            />
          </div>

          <div className="relative z-10 mt-[-60vh]">
            {decisionConfig.story.map((paragraph, index) => (
              <div
                key={index}
                className="min-h-screen flex items-center justify-center"
              >
                <p
                  ref={(el) => (paragraphRefs.current[index] = el)}
                  className="max-w-3xl text-3xl font-bold leading-relaxed text-white"
                >
                  {paragraph}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Final Statement */}
        <div className="min-h-screen flex items-center justify-center">
          <h2 className="text-6xl md:text-8xl font-bold text-center">
            {decisionConfig.finalStatement}
          </h2>
        </div>
      </div>
    </section>
  );
}
