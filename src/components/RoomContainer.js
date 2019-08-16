import React from 'react';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import {RoomConsumer} from '../Context'
import Loading from "../components/Loading";

import { withRoomConsumer } from './../Context';

function RoomContainer({context}) {
           const {loading, sortedRooms, rooms} = context
           if(loading){
              return <Loading/>
           }
            return(
            <div>
              <RoomFilter rooms={rooms}/>
              <RoomList rooms={sortedRooms}/> 
            </div>
          )
       }
export default withRoomConsumer(RoomContainer)
