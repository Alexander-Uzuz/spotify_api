import { useState, useEffect } from "react";
import { Menu, Avatar, Typography, Dropdown, MenuProps, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "core/redux/hooks";
import {signInThunk} from 'modules/SignIn/SignInThunk';
import { loginEndpoint } from "api/baseRequest";
import AvatarImg from "assets/images/avatar.png";
import ProfileArrow from "assets/icons/profile__arrow.svg";
import './Header.scss';
type Props = {};

const { Title } = Typography;
const items: MenuProps["items"] = [
  {
    label: <p className="dropdown__menu-item">Profile</p>,
    key: "setting",
  },
  {
    label: <p className="dropdown__menu-item">Logout</p>,
    key: "exit",
  },
];

const menu = <Menu items={items} />;

export const HeaderComponent = (props: Props) => {
  const [activeButton, setActiveButton] = useState<"left" | "right">("right");
  const [rotate, setRotate] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {user,error} = useAppSelector((state) => state.signIn);

  useEffect(() => {
    if(!error){
      (async function() {
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
   }());
    }else{
      localStorage.removeItem('token')
    }
  }, []);


  const handleButton = (direction: "left" | "right") => setActiveButton(direction);
  const handleRotate = () => setRotate(!rotate);
  return (
    <>
        <div className="arrows__container">
          <div
            className="arrow__container"
            onClick={() => handleButton("left")}
          >
            <svg
              className="arrow"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5999 12.71C10.5062 12.617 10.4318 12.5064 10.381 12.3846C10.3303 12.2627 10.3041 12.132 10.3041 12C10.3041 11.868 10.3303 11.7373 10.381 11.6154C10.4318 11.4936 10.5062 11.383 10.5999 11.29L15.1899 6.71C15.2836 6.61704 15.358 6.50644 15.4088 6.38458C15.4596 6.26272 15.4857 6.13201 15.4857 6C15.4857 5.86799 15.4596 5.73728 15.4088 5.61542C15.358 5.49356 15.2836 5.38296 15.1899 5.29C15.0026 5.10375 14.7491 4.99921 14.4849 4.99921C14.2207 4.99921 13.9673 5.10375 13.7799 5.29L9.18992 9.88C8.62812 10.4425 8.31256 11.205 8.31256 12C8.31256 12.795 8.62812 13.5575 9.18992 14.12L13.7799 18.71C13.9662 18.8947 14.2176 18.9989 14.4799 19C14.6115 19.0008 14.742 18.9755 14.8638 18.9258C14.9857 18.876 15.0965 18.8027 15.1899 18.71C15.2836 18.617 15.358 18.5064 15.4088 18.3846C15.4596 18.2627 15.4857 18.132 15.4857 18C15.4857 17.868 15.4596 17.7373 15.4088 17.6154C15.358 17.4936 15.2836 17.383 15.1899 17.29L10.5999 12.71Z"
                fill={activeButton === "left" ? "white" : "#7B7B7B"}
              />
            </svg>
          </div>
          <div
            className="arrow__container"
            onClick={() => handleButton("right")}
          >
            <svg
              className="arrow"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.3999 9.88L10.8099 5.29C10.6225 5.10375 10.369 4.99921 10.1049 4.99921C9.84068 4.99921 9.58723 5.10375 9.39986 5.29C9.30613 5.38296 9.23174 5.49356 9.18097 5.61542C9.1302 5.73728 9.10406 5.86799 9.10406 6C9.10406 6.13201 9.1302 6.26272 9.18097 6.38458C9.23174 6.50644 9.30613 6.61704 9.39986 6.71L13.9999 11.29C14.0936 11.383 14.168 11.4936 14.2188 11.6154C14.2695 11.7373 14.2957 11.868 14.2957 12C14.2957 12.132 14.2695 12.2627 14.2188 12.3846C14.168 12.5064 14.0936 12.617 13.9999 12.71L9.39986 17.29C9.21156 17.477 9.10524 17.7311 9.10431 17.9965C9.10337 18.2618 9.20789 18.5167 9.39486 18.705C9.58184 18.8933 9.83596 18.9996 10.1013 19.0006C10.3667 19.0015 10.6216 18.897 10.8099 18.71L15.3999 14.12C15.9617 13.5575 16.2772 12.795 16.2772 12C16.2772 11.205 15.9617 10.4425 15.3999 9.88Z"
                fill={activeButton === "right" ? "white" : "#7B7B7B"}
              />
            </svg>
          </div>
        </div>
        {
          user.id
          ?
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
        :
        <Button href={loginEndpoint} type="link" className="header__button-signIn">Войти</Button>
        }
    </>
  );
};
