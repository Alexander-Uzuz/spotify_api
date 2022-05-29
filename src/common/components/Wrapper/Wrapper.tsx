import { useState } from "react";
import { Layout } from "antd";
import { HeaderComponent } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import {Outlet} from 'react-router-dom';
import './Wrapper.scss';

type Props = {};

const { Sider, Content, Header } = Layout;


export const Wrapper = (props: Props) => {
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
        <Content className="content">
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
  );
};
