import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/lib/table';
import TimeIcon from 'assets/icons/time.svg';
import { useAppSelector } from 'core/redux/hooks';
import {IGetSearchItem} from '../../interfaces/IGetSearch';
import './SongsTable.scss';


type Props = {}

interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
  }


  
  const columns: ColumnsType<IGetSearchItem> = [
    {
      title: '#',
      dataIndex: 'key',
      key: '1',
      render: (value,data,index) => <p className='songsTable__text'>{index + 1}</p>,
    },
    {
      title: 'Название',
      key: '2',
      render:(item, index) => {
        console.log(item,'item')
        return (
          <div className='name__container' key={`${index}`}>
            <img className='songsTable__img' src={item.album.images ? item.album.images[2].url : ''} alt="" />
            <div>
              <p className='songsTable__text'>{item.name}</p>
              <p className='songsTable__text'>{item.album.artists[0].name}</p>
            </div>
          </div>
        )
      }
      
    },
    {
      title: 'Альбом',
      dataIndex: 'album',
      key: '3',
      render:(item) => <p className='songsTable__text'>{item.name}</p>
    },
    {
      title: <img style={{width:'20px'}} src={TimeIcon} alt="" />,
      key: 'tags',
      dataIndex: '4',
      render:(_, time) =>{
        return <p className='songsTable__text'>0:32</p>
      }
    },
  ];
  
export const SongsTable = (props: Props) => {
  const {searchData} = useAppSelector(state => state.search)


  return (
    <Table className='songsTable' columns={columns} dataSource={searchData?.tracks.items} pagination={false}/>
  )
}