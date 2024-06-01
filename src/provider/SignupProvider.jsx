import { useImmer } from "use-immer";
import { SignupContext } from "../context/context";
import { useState } from "react";

export default function SignupProvider(props) {
  const [signUpInpo, updateSignUpInpo] = useImmer(signUpObj);
  const [duplication, setDuplication] = useState(true);
  const [duplicationState, setDuplicationState] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState("true");
  return (
    <SignupContext.Provider
      value={{
        signUpInpo,
        updateSignUpInpo,
        duplication,
        setDuplication,
        duplicationState,
        setDuplicationState,
        passwordCheck,
        setPasswordCheck,
      }}
    >
      {props.children}
    </SignupContext.Provider>
  );
}

const signUpObj = {
  loginid: "",
  password: "",
  nickname: "",
  count: 0,
  level: 0,
};
