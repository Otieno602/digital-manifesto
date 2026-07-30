import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollIndicator from "../components/ScrollIndicator";
import heroImage from "../assets/hero.png";

export default function Scene01Arrival() {
  const [intro, setIntro] = useState(0);

  useEffect(() => {
    const first = setTimeout(() => {
      setIntro(1);
    }, 2500);

    const second = setTimeout(() => {
      setIntro(2);
    }, 5000);

    return () => {
      clearTimeout(first);
      clearTimeout(second);
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">

      {/* Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
        animate={{
          scale: [1, 1.05],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Cinematic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />


      {/* Intro */}
      <AnimatePresence>
        {intro < 2 && (
          <motion.div
            key={intro}
            className="absolute inset-0 flex items-center justify-center text-center px-6"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 1,
            }}
          >

            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight">
              {intro === 0
                ? "Every community has a story."
                : "This is ours."}
            </h1>

          </motion.div>
        )}
      </AnimatePresence>


      {/* Main Hero */}
      {intro === 2 && (
        <motion.div
          className="relative z-10 h-full flex flex-col justify-center px-8 md:px-20"
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.5,
          }}
        >

          <h1 className="max-w-4xl text-6xl md:text-8xl font-bold leading-tight">
            Our Ward.
            <br />
            Our Future.
            <br />
            Our Responsibility.
          </h1>


          <div className="mt-10 flex gap-5">

            <button className="rounded-full bg-white px-8 py-4 text-black font-medium hover:scale-105 transition">
              Explore the Vision
            </button>


            <button className="rounded-full border border-white/50 px-8 py-4 hover:bg-white hover:text-black transition">
              Join the Movement
            </button>

          </div>


        </motion.div>
      )}


      {intro === 2 && <ScrollIndicator />}

    </section>
  );
}