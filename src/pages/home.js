import React from 'react';
import Hero from '../components/Hero';
import Banner from './../components/Banner';
import Service from '../components/Services.js';
import {Link} from 'react-router-dom';

const Home = () => {
   return (
          <>
            <Hero hero="defaultHero">
               <Banner title="luxurious rooms"
                  subtitle="affordable deluxe rooms next to school">
                  <Link to="/rooms" className="btn-primary">
                     our rooms
                  </Link>
               </Banner>
            </Hero>
            <Service/>
         </>   
   )
}

export default Home
