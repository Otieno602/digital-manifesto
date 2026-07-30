import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sm text-white/70"
      animate={{
        y: [0, 10, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
    >
      ↓
      <div className="mt-2">
        Scroll to begin
      </div>
    </motion.div>
  );
}