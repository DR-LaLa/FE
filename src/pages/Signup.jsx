import Header from "../components/common/Header";
import MainFrame from "../components/common/MainFrame";
import MainProvider from "../provider/MainProvider";
import SignupProvider from "../provider/SignupProvider";
import SignUpForm from "../components/SignUp/SignUpForm";

export default function SignUp() {
  return (
    <>
      <MainProvider>
        <Header show={"false"} anime={"none"} />
      </MainProvider>
      <MainFrame>
        <SignupProvider>
          <SignUpForm />
        </SignupProvider>
      </MainFrame>
    </>
  );
}
