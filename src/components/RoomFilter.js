import React from 'react';
import {useContext} from  'react';
import Title from './Title';
import {RoomConsumer, RoomContext} from '../Context';

// get unique room types 
 const getUniqueType =  (items, value) =>{
    return [...new Set(items.map(item => item[value]))]
 }

export default function RoomFilter({rooms}) {
   const context = useContext(RoomContext)
   const {handleChange, type, maxPrice, minPrice, price, 
        minSize, maxSize, pets, breakfast, capacity } = context;

   let types = getUniqueType(rooms, 'type')  
   types = [ "all", ...types]
   types = types.map((item, index) =>{
      return <option key={index} value={item}>
         {item}
      </option>
   })

   let people = getUniqueType(rooms, "capacity");
    people = people.map((item , index) => ( 
     <option key={index} value={item}>{item}</option>)
     ) 

   return (
      <section className="filter-container">
       <Title title="search room"/>
       <form className="filter-form">
           {/* select type */}
         <div className="form-group">
            <label htmlFor="type">room type</label>
            <select 
               onChange={handleChange}
               name="type" id="type" 
               className="form-control" 
               value={type}>
               {types}
            </select>
            </div>
            {/* end of select type */}
             {/* Guest selection */}
             <div className="form-group">
            <label htmlFor="capacity">Guest</label>
               <select 
                  onChange={handleChange}
                  name="capacity" id="capacity" 
                  className="form-control" 
                  value={capacity}>
                  {people}
               </select>
         </div>
          {/* end of guest selection */}
          {/* price selection */}
          <div className="form-group">
             <label htmlFor="price">room price ${price}</label>
             <input type="range"
              name="price"
              id="price" 
              value={price} 
              className="form-control"
              min={minPrice}
              max ={maxPrice} 
              onChange={handleChange}/>
          </div>
          {/* end of price selection */}
          {/* size selection */}
          <div className="form-group">
             <label htmlFor="size">room size</label>
             <div className="size-inputs">
              <input 
               type="number" 
               className="size-input"
               id="size"
               name="minSize"
               value={minSize}
               onChange={handleChange}
               />                
               <input 
               type="number" 
               className="size-input"
               id="size"
               name="maxSize"
               value={maxSize}
               onChange={handleChange}
               />                
             </div>
          </div>
          {/* end of size selection */}
          {/* extras checkbox input part for pets and breakfast*/}
          <div className="form-group">
            <div className="single-extra">
               <label htmlFor="breakfast">breakfast</label>
                     <input 
                     type="checkbox"
                     name="breakfast"
                     id="breakfast"
                     onChange={handleChange}
                     checked={breakfast}
                     />
               <div className="single-extra">   
                  <label htmlFor="pets">pets</label>
                     <input 
                     type="checkbox"
                     name="pets"
                     id="pets"
                     onChange={handleChange}
                     value={pets}
                     />
               </div>   
            </div>    
         </div>
          {/* end of check boss input part fro pets and breakfast */}
       </form>
      </section>
   )
}
