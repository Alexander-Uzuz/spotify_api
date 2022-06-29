import {FC} from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/lib/table';
import {ReactComponent as TimeIcon} from 'assets/icons/time.svg';
import { useAppSelector } from 'core/redux/hooks';
import {IGetSearchItem} from '../../interfaces/IGetSearch';
import './SongsTable.scss';


type Props = {}

  const columns: ColumnsType<IGetSearchItem> = [
    {
      title: '#',
      dataIndex: 'key',
      key: '1',
      render: (value,data,index) => <p className='songsTable__text' key={index + 1}>{index + 1}</p>,
    },
    {
      title: 'Название',
      key: '2',
      render:(item, index) => {
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
      render:(item) => <p className='songsTable__text' key={item.name}>{item.name}</p>
    },
    {
      title: 'Время',
      key: 'tags',
      dataIndex: '4',
      render:(_, time ) =>{
        return <p className='songsTable__text' key={new Date().getTime()}>0:32</p>
      }
    },
  ];
  
export const SongsTable:FC<Props> = () => {
  const {searchData} = useAppSelector(state => state.search)


  return (
    <Table className='songsTable' columns={columns} dataSource={searchData?.tracks.items} pagination={false} rowKey='id'/>
  )
}