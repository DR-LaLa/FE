import { useMemo } from "react";
import { IsLoginContext } from "../context/context";
import { useImmer } from "use-immer";

export default function IsLoginProvider({ children }) {
  const [userData, updateUserData] = useImmer(obj);
  const value = useMemo(() => ({ userData, updateUserData }), [userData, updateUserData]);
  return <IsLoginContext.Provider value={value}>{children}</IsLoginContext.Provider>;
}

const obj = {
  loginid: "",
  nickname: "",
  isLogin: false,
};
