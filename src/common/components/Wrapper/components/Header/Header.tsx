import { useEffect } from "react";
import { Button } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "core/redux/hooks";
import { signInThunk } from "modules/SignIn/SignInThunk";
import { Arrows } from "./components/Arrows/Arrows";
import { loginEndpoint } from "api/baseRequest";
import { Profile } from "./components/Profile/Profile";
import "./Header.scss";
import TabsComponent from "./components/Tabs/Tabs";

type Props = {};

export const HeaderComponent = (props: Props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user, error } = useAppSelector((state) => state.signIn);


  useEffect(() => {
    if (!error) {
      (async function () {
        const token = window.localStorage.getItem("token");
        const hash = window.location.hash;
        window.location.hash = "";
        if (!token && hash) {
          const _token = hash.split("&")[0].split("=")[1];
          window.localStorage.setItem("token", _token);
          await dispatch(signInThunk(_token));
          navigate("/home");
        }
        if (token) {
          await dispatch(signInThunk(token));
          navigate("/home");
        }
      })();
    } else {
      localStorage.removeItem("token");
    }
  }, []);

  return (
    <>
      <div className="header__left-container">
      <Arrows />
      <TabsComponent/>
      </div>
      {user.id ? (
        <Profile user={user} />
      ) : (
        <Button
          href={loginEndpoint}
          type="link"
          className="header__button-signIn"
        >
          Войти
        </Button>
      )}
    </>
  );
};
