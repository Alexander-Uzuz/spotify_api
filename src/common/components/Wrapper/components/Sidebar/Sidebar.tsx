import { FC, useState, useEffect, BaseSyntheticEvent } from "react";
import { Menu } from "antd";
import { NavLink, useLocation } from "react-router-dom";
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
      <NavLink to="/home">
        <img
          src={Logo}
          alt="Logo"
          style={{ width: "164px", height: "49px" }}
          className="sidebar__logo"
        />
      </NavLink>
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
              <NavLink to="/home" className="menu__link">
                Home
              </NavLink>
            ),
            className: "menu__item",
          },
          {
            key: "/search",
            icon: <SearcIcon />,
            label: (
              <NavLink to="/search" className="menu__link">
                Search
              </NavLink>
            ),
            className: "menu__item",
          },
          {
            key: "/lib",
            icon: <LibIcon />,
            label: (
              <NavLink to="/library/playlists" className="menu__link">
                Library
              </NavLink>
            ),
            className: "menu__item",
          },
        ]}
      />
    </div>
  );
};
