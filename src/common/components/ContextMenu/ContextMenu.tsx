import {FC,memo} from "react";
import {CopyToClipboard} from "react-copy-to-clipboard";
import { Dropdown, Menu, message } from "antd";
import { switchFollowing } from "modules/Info/InfoSlice";
import "./ContextMenu.scss";
import { useAppDispatch, useAppSelector } from "core/redux/hooks";

type Props = {
  type:"playlist" | "album" | "artist";
  id:string;
  handleFollow?:() => void;
};

const ContextMenuContainer:FC<Props> = (props) => {
  const dispatch = useAppDispatch();
  const {type,id, handleFollow} = props;
    const url = window.location.href;
    const {checkFollow} = useAppSelector(state => state.info);
    const handleMedia = () => {
      if(handleFollow){
        handleFollow()
      }
    }
    const handleCopy = () => message.success('Адрес успешно скопирован в буфер обмена');



    const menu = (
        <Menu
        style={{
            width:'auto'
        }}
          items={[
            {
              key: "1",
              type: "group",
              children: [
                {
                  key: "1-1",
                  label: <p style={{display:type === "album" ? "none" : "block"}} onClick={handleMedia}>{checkFollow ? 'Отписаться от медиатеки' : 'Добавить в медиатеку'}</p>,
                }, 
              ],
            },
            {
                key: "2",
                type: "group",
                children: [
                  {
                    key: "2-2",
                    label: <CopyToClipboard text={url}><p onClick={handleCopy}>Копировать ссылку текущей страницы</p></CopyToClipboard>,
                  },
                ],
              },
          ]}
        />
      );

  return (
    <>
      <Dropdown  overlay={menu} trigger={['click']}>
        <div className="settings">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </Dropdown>
    </>
  );
};

export const ContextMenu = memo(ContextMenuContainer);
