import {FC, useState} from 'react';
import { Menu, Avatar, Typography, Dropdown, MenuProps } from "antd";
import { useAppDispatch } from 'core/redux/hooks';
import { removeUser } from 'modules/SignIn/SignInSlice';
import AvatarImg from "assets/images/avatar.png";
import ProfileArrow from "assets/icons/profile__arrow.svg";
import './Profile.scss'

type Props = {

}

const { Title } = Typography;




export const Profile:FC<Props> = () => {
    const [rotate, setRotate] = useState(false);
    const dispatch = useAppDispatch();
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    const handleRotate = () => setRotate(!rotate);

    const handleLogout = () => {
      localStorage.removeItem('token');
      dispatch(removeUser())
      window.location.reload();
    }
    

    const items: MenuProps["items"] = [
      {
        label: <p className="dropdown__menu-item" onClick={handleLogout}>Logout</p>,
        key: "exit",
      },
    ];

    const menu = <Menu items={items} />;

  return (
    <div className="profile__container">
    <Avatar
      src={user?.avatarUrl ? user.avatarUrl : AvatarImg}
      size={37}
      shape={"circle"}
      className="profile__avatar"
    />
    <Title className="profile_title" level={5}>
      {user?.username ? user.username : 'Гость'}
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