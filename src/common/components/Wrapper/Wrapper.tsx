import { useState,FC, forwardRef } from "react";
import { Layout } from "antd";
import { Player } from "../Player/Player";
import { HeaderComponent } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import {Outlet} from 'react-router-dom';
import './Wrapper.scss';

type Props = {
  curTime:number | undefined;
  duration:number | undefined;
  playing:boolean;
  setPlaying:(playing:boolean) => void;
  setClickedTime:any;
};

const { Sider, Content, Header } = Layout;

export const Wrapper:FC<Props> = ({curTime, duration, playing, setPlaying, setClickedTime}) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
<Layout>
      <Sider
        width={301}
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="sidebar"
      >
        <Sidebar />
      </Sider>
      <Layout className="layout">
        <Header className="header">
          <HeaderComponent />
        </Header>
        <Content className="content" style={{height:'100vh'}}>
          <Outlet/>
        </Content>
        <Player curTime={curTime} duration={duration} playing={playing} setPlaying={setPlaying} setClickedTime={setClickedTime}/>
      </Layout>
    </Layout>
  )
}





// export const Example = forwardRef<HTMLImageElement, Props>(({curTime, duration, playing, setPlaying, setClickedTime}, ref) => {

//   return (
//       <>
//       </>
//   )
// })