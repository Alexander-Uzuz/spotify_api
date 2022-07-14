import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Typography, Button } from "antd";
import { useAppSelector, useAppDispatch } from "core/redux/hooks";
import { signInThunk } from "modules/SignIn/SignInThunk";
import { Cards } from "common/components/Cards/Cards";
import photoCard from "assets/images/photoCard.png";
import { loginEndpoint } from "api/baseRequest";
import "./SignIn.scss";
import { ICurrentCard } from "./interfaces/ICurrentCard";

const { Title } = Typography;

type Props = {};

export const SignIn: FC<Props> = (props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const token = window.localStorage.getItem("token");
  const { _error, signInCards, loading } = useAppSelector(
    (state) => state.signIn
  );

  // useEffect(() => {
  //   if (!_error) {
  //     (async function () {
  //       const hash = window.location.hash;
  //       window.location.hash = "";
  //       if (!token && hash) {
  //         const _token = hash.split("&")[0].split("=")[1];
  //         window.localStorage.setItem("token", _token);
  //         await dispatch(signInThunk(_token));
  //         navigate("/home");
  //       }
  //       if (token) {
  //         await dispatch(signInThunk(token));
  //         navigate("/home");
  //       }
  //     })();
  //   } else {
  //     localStorage.removeItem("token");
  //   }
  // }, []);

  return (
    <div style={{ color: "black" }}>
      <Button
        href={loginEndpoint}
        type="link"
        className="header__button-signIn"
      >
        Войти
      </Button>
    </div>
  );
};
