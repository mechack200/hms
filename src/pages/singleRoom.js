import React, { Component } from 'react';
import BcgImage from '../images/defaultBcg.jpeg'
import Banner from './../components/Banner';
import { Link } from 'react-router-dom';
import {RoomContext} from '../Context';
import StyledHero from '../components/styledHero';


class SingleRoom extends Component {
   constructor(props){
      super(props)
      this.state ={
         slug:this.props.match.params.slug,
         BcgImage
      }
   }
   static contextType = RoomContext;

   render() {
      const {getRoom} = this.context;
      const room = getRoom(this.state.slug)
         if(!room){
            return(
               <div className="error">
                 <h3>no such room available</h3>
              </div>
              )  
            }
            const { name, price, images, description, 
                    capacity, extras, pets, breakfast, size } = room
           return(
              <>
              <StyledHero  hero='roomsHero' img={images[0] || this.state.BcgImage }>
                <Banner title={ `${name} room`}>
                  <Link to='/rooms' className="btn-primary">
                     back to rooms
                  </Link>
                </Banner>
              </StyledHero>
              <section className="single-room">
                 <div className="single-room-images">
                  {images.map((img, index) =>{
                  return(
                        <img key={index} src={img} alt={name} />
                       )
                   })}
                 </div>
                 <div className="single-room-info">
                    <article className="desc">
                       <h3>details</h3>
                       <p>{description}</p>
                    </article>
                    <article>
                       <h3>info</h3>
                       <h6>price: ${price}</h6>
                       <h6>size : {size} Square feet</h6>
                       <h6>max capacity  : {" "}
                        {capacity > 1 ?`${capacity} people` : `${capacity} person`}
                       </h6>
                       <h6>pets : {pets ? "pets allowed" : "no pet allowed"}</h6>
                       <h6>breakfast : {breakfast ? "breakfast available" : "no  breakfast available"}</h6>
                    </article>
                 </div>
              </section>
              <section className="rooms-extras">
                 <h3>extras</h3>
                 <ul className="extras">
                   {extras.map((item, index)=>{
                     return(
                        <li key={index}>{item}</li>
                     )
                   })}
                 </ul>
              </section>
              </>
           )       
      }
}

export default SingleRoom;
