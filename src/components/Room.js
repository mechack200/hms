import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import defaultImage from '../images/defaultBcg.jpeg';

export default function Room({room}) {
   const { price, slug, name, images }  = room
   return (
      <article className="room">
       <div className="img-container">
         <img src={ images[0] || defaultImage} alt="single-room"/>
         <div className="price-top">
            <h6>${price}</h6> 
            <p>per night</p>
         </div>
         <Link to={`/rooms/${slug}`} className="btn-primary room-link">features</Link>
       </div>
       <p className="room-info">{name}</p>
      </article>
   )
}

Room.propTypes = {
    room:PropTypes.shape({
       name:PropTypes.string.isRequired,
       price:PropTypes.number.isRequired,
       images:PropTypes.arrayOf(PropTypes.string).isRequired,
       slug:PropTypes.string.isRequired
    })
}