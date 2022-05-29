import React, { useState } from "react";
import { Menu } from "antd";
import { ReactComponent as HomeIcon } from "assets/icons/homeNav.svg";
import { ReactComponent as SearcIcon } from "assets/icons/searchNav.svg";
import { ReactComponent as LibIcon } from "assets/icons/libNav.svg";
import Logo from "assets/icons/logo.svg";
import './Sidebar.scss'

type Props = {};

export const Sidebar = (props: Props) => {
  return (
    <div>
      <img
        src={Logo}
        alt="Logo"
        style={{ width: "164px", height: "49px" }}
        className="sidebar__logo"
      />
      <Menu
        defaultSelectedKeys={["1"]}
        mode="inline"
        inlineIndent={12}
        className="menu"
        items={[
          {
            key: "1",
            icon: <HomeIcon />,
            label: "Home",
            className: "menu__item",
          },
          {
            key: "2",
            icon: <SearcIcon />,
            label: "Search",
            className: "menu__item",
          },
          {
            key: "3",
            icon: <LibIcon />,
            label: "Library",
            className: "menu__item",
          },
        ]}
      />
    </div>
  );
};
