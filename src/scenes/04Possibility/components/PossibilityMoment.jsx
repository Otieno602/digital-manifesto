import { useRef } from "react";
import gsap from "../../../lib/gsap";
import { useScene } from "../../../hooks/useScene";

export default function PossibilityMoment({ text, index }) {

  const ref = useRef(null);

  useScene(() => {

    gsap.fromTo(
      ref.current,
      {
        opacity:0,
        y:30,
      },
      {
        opacity:1,
        y:0,
        duration:0.8,
        ease:"power1.out",
        scrollTrigger:{
          trigger:ref.current,
          start:"top 80%",
          toggleActions:"play none none reverse",
        },
      }
    );

  },ref);

  return(

    <div
      ref={ref}
      className={index === 0 ? "" : "mt-28"}
    >

      <h3 className="text-2xl md:text-3xl leading-relaxed text-gray-100">

        {text}

      </h3>

    </div>

  );

}