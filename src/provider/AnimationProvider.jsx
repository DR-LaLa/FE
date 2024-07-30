import { useMemo, useState } from "react";
import { AnimationContext } from "../context/context";

export default function AnimationProvider({ children }) {
  const [prevPage, setPrevPage] = useState("/");
  const value = useMemo(() => ({ prevPage, setPrevPage }), [prevPage, setPrevPage]);
  return <AnimationContext.Provider value={value}>{children}</AnimationContext.Provider>;
}
