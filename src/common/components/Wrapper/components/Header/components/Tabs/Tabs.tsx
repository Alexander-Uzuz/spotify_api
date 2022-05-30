import React from 'react';
import {useNavigate} from 'react-router-dom';
import { Tabs } from 'antd';
import './Tabs.scss';

const { TabPane } = Tabs;



const TabsComponent: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = (path:string) => navigate('/library/' + path)
  
  return(
    <div className="card-container">
    <Tabs onTabClick={(e) => handleNavigate(e)} type="card">
      <TabPane className='card_tab' tab="Плейлисты" key="playlists"/>
      <TabPane className='card_tab' tab="Исполнители" key="artists"/>
      <TabPane className='card_tab' tab="Альбомы" key="albums"/>
    </Tabs>
  </div>
  )
}

export default TabsComponent;

