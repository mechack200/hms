import React, { Component } from 'react';
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan,FaBeer } from 'react-icons/fa';
class Service extends Component {
   state = {
      services:[
         {
          icon:<FaCocktail/>,
          title:"Free Cock tail",
          info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, iste?"
        },
        {
           icon:<FaHiking/>,
           title:"endless Hiking",
           info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, iste, we love you all?"
         },
         {
            icon:<FaShuttleVan/>,
            title:"Free Shuttle Van",
            info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, iste?"
          },
          {
            icon:<FaBeer/>,
            title:"Strongest Beer",
            info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, iste?"
          },         
      ]
   }
   render() {
      return (
         <section className="services">
            <Title title="Service"/>
            <div className="services-center">
               {this.state.services.map((item, index)=>{
                  return (
                       <article key={index} className="service">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                      </article>
                  )
               })}
            </div>
         </section>
         
         
      );
   }
}

export default Service;