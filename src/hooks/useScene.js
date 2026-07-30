import { useLayoutEffect } from "react";

export function useScene(callback) {
  useLayoutEffect(() => {
    return callback();
  }, []);
}