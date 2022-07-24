import { useEffect, FC, BaseSyntheticEvent } from "react";
import { Button, Input } from "antd";
import { useParams, useLocation, useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "core/redux/hooks";
import { Arrows } from "./components/Arrows/Arrows";
import { ReactComponent as SearchIcon } from "assets/icons/search.svg";
import { ReactComponent as CloseIcon } from "assets/icons/close.svg";
import { loginEndpoint } from "api/baseRequest";
import { Profile } from "./components/Profile/Profile";
import { getSearchThunk } from "modules/Search/SearchThunk";
import { debounce } from "lodash";
import "./Header.scss";
import Tabs from "./components/Tabs/Tabs";

type Props = {};

export const HeaderComponent: FC<Props> = (props) => {
  const params = useParams();
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const { user, _error } = useAppSelector((state) => state.signIn);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("q") || "";
  const token = localStorage.getItem("token");

  const debouncedSearch = debounce(async (searchValue: string) => {
    setSearchParams({ q: searchValue });
    await dispatch(getSearchThunk({ token, searchValue }));
  }, 300);

  const handleSearch = (e: BaseSyntheticEvent) => {
    const searchValue = e.target.value;
    if (searchValue) {
      setSearchParams({ q: searchValue });
    } else {
      setSearchParams({});
    }
  };

  useEffect(() => {
    debouncedSearch(searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  return (
    <>
      <div className="header__left-container">
        <Arrows />
        {params.category && <Tabs />}
        {pathname === "/search" && (
          <Input
            allowClear={{ clearIcon: <CloseIcon /> }}
            prefix={<SearchIcon />}
            placeholder="Artists, songs, or podcasts"
            className="header__input-search"
            bordered={false}
            value={searchParams.get("q") || ""}
            onChange={handleSearch}
          />
        )}
      </div>
      {!_error && token ? (
        <Profile/>
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
