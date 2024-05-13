import { useImmer } from "use-immer";
import { LoginContext } from "../context/context";

export default function LoginProvider(props) {
  const [loginInpo, updateLoginInpo] = useImmer(userObj);
  return <LoginContext.Provider value={{ loginInpo, updateLoginInpo }}>{props.children}</LoginContext.Provider>;
}

const userObj = {
  loginid: "",
  password: "",
};
