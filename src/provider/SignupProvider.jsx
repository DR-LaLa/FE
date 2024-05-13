import { useImmer } from "use-immer";
import { SignupContext } from "../context/context";

export default function SignupProvider(props) {
  const [signUpInpo, updateSignUpInpo] = useImmer(signUpObj);
  return <SignupContext.Provider value={{ signUpInpo, updateSignUpInpo }}>{props.children}</SignupContext.Provider>;
}

const signUpObj = {
  loginid: "",
  password: "",
  nickname: "",
};
