import React, { Component } from 'react';
import items from './data'
import Room from './components/Room';
const RoomContext = React.createContext();

class RoomProvider extends Component {
   state={
      rooms:[],
      sortedRooms:[],
      featuredRooms:[],
      loading:true
   }

   componentDidMount(){
    let rooms =this.formatData(items)
    let featuredRooms = rooms.filter( room =>
       room.featured === true
    ) 
    this.setState({
       rooms,
       featuredRooms,
       sortedRooms:rooms,
       loading:false
    })
   };


   getRoom = (slug => {
     let tempRoom = [...this.state.rooms];
     let room = tempRoom.find(room =>{
       return room.slug === slug
     })
     return Room
   });

   formatData = (items) =>{
    let tempItems = items.map(item =>{
    let id = item.sys.id
    let images = item.fields.images.map(image=> 
        image.fields.file.url )
      // override images of the field and add new element called id
        let room = {...item.fields, images, id }
        return room
    })
    return tempItems
   }
   render() {
      return (
         <RoomContext.Provider value={{...this.state}}>
             {this.props.children}
         </RoomContext.Provider>
      );
   }
}
const RoomConsumer = RoomContext.Consumer;

export {RoomProvider, RoomConsumer, RoomContext}