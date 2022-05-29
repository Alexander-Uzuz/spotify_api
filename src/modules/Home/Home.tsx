import React,{ FC } from "react";
import { Typography, List } from "antd";
import { CardComponent } from "common/components/Card/Card";
import "./Home.scss";

type Props = {};

const { Title } = Typography;

const data = [
  {
    title: "Title 1",
  },
  {
    title: "Title 2",
  },
  {
    title: "Title 3",
  },
  {
    title: "Title 4",
  },
];

export const Home:FC<Props> = (props) => {
  return (
    <>
      {/* <Title level={2} className="content__title">
        Good Morning
      </Title>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 4,
          xxl: 6,
        }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <CardComponent/>
          </List.Item>
        )}
      /> */}
    </>
  );
};
