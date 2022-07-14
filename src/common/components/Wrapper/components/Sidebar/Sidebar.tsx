import { FC, useState, useEffect, BaseSyntheticEvent } from "react";
import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as HomeIcon } from "assets/icons/homeNav.svg";
import { ReactComponent as SearcIcon } from "assets/icons/searchNav.svg";
import { ReactComponent as LibIcon } from "assets/icons/libNav.svg";
import Logo from "assets/icons/logo.svg";
import "./Sidebar.scss";

type Props = {};

export const Sidebar: FC<Props> = (props) => {
  let location = useLocation();
  const [current, setCurrent] = useState('/home');


  useEffect(() => {
    if (location) {
      if (current !== location.pathname) {
        setCurrent(location.pathname);
      }
    }
  }, [location, current]);

   const handleClick = (e: any) => setCurrent(e.key);
  

  return (
    <div>
      <Link to="/home">
        <img
          src={Logo}
          alt="Logo"
          style={{ width: "164px", height: "49px" }}
          className="sidebar__logo"
        />
      </Link>
      <Menu
        defaultSelectedKeys={["1"]}
        mode="inline"
        inlineIndent={12}
        className="menu"
        onClick={handleClick}
        selectedKeys={[current]}
        items={[
          {
            key: "/home",
            icon: <HomeIcon />,
            label: (
              <Link to="/home" className="menu__link">
                Home
              </Link>
            ),
            className: "menu__item",
          },
          {
            key: "/search",
            icon: <SearcIcon />,
            label: (
              <Link to="/search" className="menu__link">
                Search
              </Link>
            ),
            className: "menu__item",
          },
          {
            key: "/lib",
            icon: <LibIcon />,
            label: (
              <Link to="/library/playlists" className="menu__link">
                Library
              </Link>
            ),
            className: "menu__item",
          },
        ]}
      />
    </div>
  );
};
