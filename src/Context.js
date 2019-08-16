import React, { Component } from 'react';
// import items from './data'
import Client from './Contentful'


const RoomContext = React.createContext();
class RoomProvider extends Component {
   state={
      rooms:[],
      sortedRooms:[],
      featuredRooms:[],
      loading:true,
      type:"all",
      price: 0,
      minPrice: 0,
      maxPrice:0,
      maxSize: 0,
      minSize: 0,
      breakfast:false,
      pets:false,
   }

   // get data from contentful cms
    getData = async () =>{
        try {
         let response = await Client.getEntries({
            content_type: "hostelManagementSystem",
            order:"fields.price"
         })
         console.log(response.items)
         let rooms =this.formatData(response.items)
         let featuredRooms = rooms.filter( room =>
            room.featured === true
         ) 
         const maxPrice = Math.max(...rooms.map(item => item.price))
         const maxSize = Math.max(...rooms.map(item => item.size))
         this.setState({
            rooms,
            featuredRooms,
            sortedRooms:rooms,
            loading:false,
            maxSize:maxSize,
            maxPrice:maxPrice
         })
        } catch (error) {
           console.log(error)
        }  
    }

   componentDidMount(){
      this.getData();
     };

   filterRoom = () =>{
      let {rooms, type, capacity, minPrice, 
            maxPrice, minSize, maxSize, price, breakfast, pets} = this.state;
      let tempRooms = [...rooms];
      // types fitering
      if(type !== "all"){
        tempRooms = tempRooms.filter(room => room.type === type)
      }
      // capacity filtering
      capacity = parseInt(capacity)
      if(capacity !==1 ){
         tempRooms = tempRooms.filter(room =>room.capacity >= capacity)
      }
      // price filtering
       price = parseInt(price)
       tempRooms = tempRooms.filter( room =>room.price <= price )
      //  size filtering
      tempRooms = tempRooms.filter(room => room.size >=minSize && room.size <= maxSize)
      //  filtering breafast
      if(breakfast){
         tempRooms.filter(room => room.breakfast === true)
      }
      //  filtering breafast
      if(pets){
         tempRooms.filter(room => room.pets === true)
      }
      // change state
      this.setState({
         sortedRooms:tempRooms
      })
   }

   // handle input changes
   handleChange = (event) =>{
      const target = event.target
      const name= event.target.name;
      const type = event.target.type;
      const value = target.type === "checkbox" ? target.checked : target.value;
      this.setState({
         [name]:value
      },
       this.filterRoom
      )
     }

   getRoom = (slug => {
     let tempRoom = [...this.state.rooms];
     const room = tempRoom.find(room =>{
       return room.slug === slug
     })
     return room
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
         <RoomContext.Provider value={{...this.state, getRoom:this.getRoom, 
           handleChange:this.handleChange}}>
             {this.props.children}
         </RoomContext.Provider>
      );
   }
}
const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component){
   return function consumerWrapper(props){
      return <RoomConsumer  >
         { value => <Component {...props} context={value} />  }
      </RoomConsumer>
   }
}

export {RoomProvider, RoomConsumer, RoomContext}