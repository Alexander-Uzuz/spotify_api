import {FC, useState} from 'react';
import { Menu, Avatar, Typography, Dropdown, MenuProps } from "antd";
import AvatarImg from "assets/images/avatar.png";
import ProfileArrow from "assets/icons/profile__arrow.svg";
import './Profile.scss'

type Props = {
    user:{
        username:string | null;
        id:string | null;
        avatarUrl:string | null;
    }
}

const { Title } = Typography;

const handleLogout = () => {
  localStorage.removeItem('token');
  window.location.reload();
}

const items: MenuProps["items"] = [
  // {
  //   label: <p className="dropdown__menu-item">Profile</p>,
  //   key: "setting",
  // },
  {
    label: <p className="dropdown__menu-item" onClick={handleLogout}>Logout</p>,
    key: "exit",
  },
];
const menu = <Menu items={items} />;

export const Profile:FC<Props> = ({user}) => {
    const [rotate, setRotate] = useState(false);

    const handleRotate = () => setRotate(!rotate);
  return (
    <div className="profile__container">
    <Avatar
      src={user.avatarUrl ? user.avatarUrl : AvatarImg}
      size={37}
      shape={"circle"}
      className="profile__avatar"
    />
    <Title className="profile_title" level={5}>
      {user.username}
    </Title>
    <Dropdown overlay={menu} trigger={["click"]}>
      <img
        src={ProfileArrow}
        alt=""
        className={rotate ? "profile__arrow rotate" : "profile__arrow"}
        onClick={handleRotate}
      />
    </Dropdown>
  </div>
  )
}