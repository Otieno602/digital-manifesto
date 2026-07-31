import { useLayoutEffect } from "react";
import gsap from "../lib/gsap";

export function useScene(callback, scope) {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      callback();
    }, scope);

    return () => ctx.revert();
  }, [callback, scope]);
}