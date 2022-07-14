import {FC} from 'react';
import { Modal, Typography, Button } from "antd";
import photoCard from "assets/images/photoCard.png";
import { loginEndpoint } from "api/baseRequest";
import './HomeModal.scss';

const { Title } = Typography;

type Props = {
    isModalVisible:boolean;
    handleOk:() => void;
    handleCancel:() => void;
    currentCard:{
        img:string;
        name:string;
        id:string;
    } | null
}

export const HomeModal:FC<Props> = (props) => {
    const {isModalVisible,handleOk,handleCancel,currentCard} = props

  return (
    <Modal
    visible={isModalVisible}
    onOk={handleOk}
    onCancel={handleCancel}
    bodyStyle={{
      background:
        "linear-gradient(180deg, #222222 0%, #1F1F1F 11.64%, #171717 25.66%, #161616 32.94%, #151515 35.98%, #131313 44.89%, #121212 55.22%, #121212 75.34%, #121212 85.45%, rgba(18, 18, 18, 0) 100%)",
      padding: "50px 40px 100px 40px",
    }}
    className="signIn__modal"
    footer={null}
  >
    <div className="signIn__modal_body">
      <img src={currentCard?.img ? currentCard.img : photoCard} alt="" />
      <div className="signIn__modal_content">
        <Title level={2} style={{ color: "#FFF", textAlign:'center' }}>
          Слушай что угодно в бесплатной версии Spotify
        </Title>
        <Button
          href={loginEndpoint}
          type="link"
          className="header__button-signIn"
        >
          Войти
        </Button>
      </div>
    </div>
  </Modal>
  )
}