import { useRef } from "react";
import gsap from "../../../lib/gsap";
import { useScene } from "../../../hooks/useScene";

export default function RealityMoment({ title, text }) {
  const momentRef = useRef(null);

  useScene(() => {
    gsap.fromTo(
      momentRef.current,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        ease: "power1.out",
        scrollTrigger: {
          trigger: momentRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, momentRef);

  return (
    <div
      ref={momentRef}
      className="min-h-[70vh] flex flex-col justify-center"
    >
      <p className="uppercase tracking-[0.3em] text-gray-400 mb-4">
        {title}
      </p>

      <h3 className="text-3xl md:text-4xl font-semibold leading-tight max-w-4xl">
        {text}
      </h3>
    </div>
  );
}