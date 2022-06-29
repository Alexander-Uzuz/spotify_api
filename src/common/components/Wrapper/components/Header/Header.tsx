import { useEffect, FC, BaseSyntheticEvent } from "react";
import { Button, Input } from "antd";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "core/redux/hooks";
import { signInThunk } from "modules/SignIn/SignInThunk";
import { Arrows } from "./components/Arrows/Arrows";
import {ReactComponent as SearchIcon} from 'assets/icons/search.svg';
import {ReactComponent as CloseIcon} from 'assets/icons/close.svg';
import { loginEndpoint } from "api/baseRequest";
import { Profile } from "./components/Profile/Profile";
import {getSearchThunk} from 'modules/Search/SearchThunk';
import { debounce } from "lodash";
import "./Header.scss";
import Tabs from "./components/Tabs/Tabs";

type Props = {};


export const HeaderComponent:FC<Props> = (props) => {
  const params = useParams();
  const {pathname} = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user, error } = useAppSelector((state) => state.signIn);
  const token = localStorage.getItem('token');


  const debouncedSearch = debounce(async (searchValue:string) => {
    await dispatch(getSearchThunk({token,searchValue}))
  },300);

  const handleSearch = (e:BaseSyntheticEvent) => debouncedSearch(e.target.value);

  useEffect(() => {
    return () => {
      debouncedSearch.cancel()
    }
  },[debouncedSearch])


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
      {params.category && <Tabs/>}
      {pathname === '/search' && 
      <Input
      allowClear={{clearIcon: <CloseIcon/>}}
      prefix={<SearchIcon/>}
      placeholder='Artists, songs, or podcasts'
      className="header__input-search"
      bordered={false}
      onChange={handleSearch}
      />} 
      </div>
      {token ? (
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
