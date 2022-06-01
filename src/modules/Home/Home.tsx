import { FC, useEffect } from "react";
import { useAppSelector } from "core/redux/hooks";
import "./Home.scss";
import { useNavigate } from "react-router-dom";

type Props = {};

export const Home:FC<Props> = (props) => {
  const {error} = useAppSelector(state => state.signIn);
  const navigate = useNavigate();

  useEffect(() => {
    if(error){
      localStorage.removeItem('token');
      navigate('/signIn')
    }
  }, [])
  
  return (
    <>
    </>
  );
};
