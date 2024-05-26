import { AlbumContext } from "../context/context";
import { useImmer } from "use-immer";

export default function AlbumProvider(props) {
  const [selectPicture, updateSelectPicture] = useImmer(obj);
  return <AlbumContext.Provider value={{ selectPicture, updateSelectPicture }}>{props.children}</AlbumContext.Provider>;
}

const obj = {
  img: "",
  name: "",
  albumNum: null,
};
