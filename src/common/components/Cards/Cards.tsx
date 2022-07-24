import { FC, memo } from "react";
import { Typography, List, Spin } from "antd";
import { CardComponent } from "common/components/Cards/components/Card/Card";
import { ReactComponent as SpinnerLogo } from "assets/icons/spinner.svg";


type Props = {
    loading:boolean;
    title?:string;
    playlist: {
        id: string;
        img: string;
        name: string;
        description?: string | undefined;
      }[];
    handlePlay:(id:string) => void;
    playing:boolean;
    setPlaying:React.Dispatch<React.SetStateAction<boolean>>
    currentItemId:string;
};

const { Title } = Typography;

const CardsInner:FC<Props> = (props) => {
    const {loading,title,playlist,handlePlay,currentItemId, playing, setPlaying} = props;

  return (
    <div className="block">
      {!loading ? (
        <>
          <Title level={2} className="content__title">
            {title ? title : "Все плейлисты"}
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
            dataSource={playlist}
            renderItem={(item) => (
              <List.Item key={item.id}>
                <CardComponent
                  card={item}
                  playing={playing}
                  setPlaying={setPlaying}
                  handlePlay={handlePlay}
                  currentItemId={currentItemId}
                />
              </List.Item>
            )}
          />
        </>
      ) : (
        <Spin
          indicator={<SpinnerLogo style={{ fontSize: "200px" }} />}
          className="spin"
        />
      )}
    </div>
  );
};

export const Cards = memo(CardsInner);
