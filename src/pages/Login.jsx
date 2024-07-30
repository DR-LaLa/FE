import Header from "../components/common/Header";
import MainFrame from "../components/common/MainFrame";
import MainProvider from "../provider/MainProvider";
import LoginProvider from "../provider/LoginProvider";
import LoginForm from "../components/login/LoginForm";
export default function Login() {
  return (
    <>
      <MainProvider>
        <Header show={"false"} transform={"bigger"} />
      </MainProvider>
      <MainFrame>
        <LoginProvider>
          <LoginForm />
        </LoginProvider>
      </MainFrame>
    </>
  );
}
