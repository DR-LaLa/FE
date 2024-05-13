import { useRef, useState } from "react";
import { MainContext } from "../context/context";

export default function MainProvider(props) {
  const [anime, setAnime] = useState("none");
  return <MainContext.Provider value={{ anime, setAnime }}>{props.children}</MainContext.Provider>;
}
