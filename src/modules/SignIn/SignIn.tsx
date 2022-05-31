import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {useAppSelector, useAppDispatch} from 'core/redux/hooks';
import { signInThunk } from "modules/SignIn/SignInThunk";

type Props = {};

export const SignIn:FC<Props> = (props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {error} = useAppSelector(state => state.signIn)

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
      <div style={{color:'#FFF'}}>
      Авторизация
      </div>
  );
};
