import React, { FC } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { ReactComponent as HomeIcon } from "assets/icons/homeNav.svg";
import { ReactComponent as SearcIcon } from "assets/icons/searchNav.svg";
import { ReactComponent as LibIcon } from "assets/icons/libNav.svg";
import Logo from "assets/icons/logo.svg";
import "./Sidebar.scss";

type Props = {};

export const Sidebar: FC<Props> = (props) => {
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
        items={[
          {
            key: "1",
            icon: <HomeIcon />,
            label: (
              <Link to="/home" className="menu__link">
                Home
              </Link>
            ),
            className: "menu__item",
          },
          {
            key: "2",
            icon: <SearcIcon />,
            label: (
              <Link to="/search" className="menu__link">
                Search
              </Link>
            ),
            className: "menu__item",
          },
          {
            key: "3",
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
